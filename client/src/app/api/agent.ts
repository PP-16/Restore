import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";
import { PaginatedResponse } from "../models/pagination";
import { store } from "../store/configureStore";

axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials = true

const ResponseBody = (response: AxiosResponse) => response.data

//แนบ token ไปกับ Header
axios.interceptors.request.use((config: any) => {
    const token = store.getState().account.user?.token; //เรียกใช้ State โดยตรง
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})


const sleep = () => new Promise(_ => setTimeout(_, 250))


axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep()
    const pagination = response.headers['pagination']; //ส่งมำจำก ProductController
    if (pagination) {
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
        return response;
    }
    return response;
}, (error: AxiosError) => {
    var data = error.response?.data!

    var json = JSON.stringify(data)
    var result = JSON.parse(json)
    console.log(json)
    switch (result.status) {
        case 400:
            if (result.errors) {
                const modelStateErrors: string[] = [];
                for (const key in result.errors) {
                    if (result.errors[key]) {
                        modelStateErrors.push(result.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(result.title)
            console.log(result)
            break;
        case 401:
            toast.error(result.title)
            break;
        case 403:
            toast.error('You are not allowed to do that!')
            break;
        case 404:
            toast.error(result.title)
            break;
        case 500:
            history.push('/server-error', { state: data })
            toast.error(result.title)
            break;

        default:
            break;
    }

})
const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(ResponseBody),
    post: (url: string, body = {}) => axios.post(url, body).then(ResponseBody),
    delete: (url: string) => axios.delete(url).then(ResponseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: { 'Content-type': 'multipart/form-data' }   //มันคือpath form ต้องใส่นะ
    }).then(ResponseBody),
    putForm: (url: string, data: FormData) => axios.put(url, data, {
        headers: { 'Content-type': 'multipart/form-data' }
    }).then(ResponseBody)

}
const Orders = {
    list: () => requests.get('orders'),
    fetch: (id: number) => requests.get(`orders/${id}`),
    create: (values: any) => requests.post('orders', values)
}

const Payments = {
    createPaymentIntent: () => requests.post('payments', {})
}


const Account = {
    login: (values: any) => requests.post('account/login', values),
    register: (values: any) => requests.post('account/register', values),
    currentUser: () => requests.get('account/currentUser'),
    fetchAddress: () => requests.get('account/savedAddress')
}


const Catalog = {
    list: (params: URLSearchParams) => requests.get('product', params),
    details: (id: number) => requests.get(`product/${id}`),
    fetchFilters: () => requests.get('Product/filters'),
}

const TestErrors = {
    get400Error: () => requests.get('buggy/GetBadRequest'),
    get401Error: () => requests.get('buggy/GetUnAuthorized'),
    get404Error: () => requests.get("/Buggy/GetNotFound"),
    get500Error: () => requests.get('buggy/GetServerError'),
    getValidationError: () => requests.get('buggy/GetValidationError'),
}

const Basket = {
    get: () => requests.get('Basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)


}

function createFormData(item: any) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}

const Admin = {
    createProduct: (product: any) => requests.postForm('product', createFormData(product)),
    updateProduct: (product: any) => requests.putForm('product', createFormData(product)),
    deleteProduct: (id: number) => requests.delete(`product/${id}`)
}


const agent = {
    Catalog,
    TestErrors,
    Basket,
    Account,
    Orders,
    Payments,
    Admin
}
export default agent;