export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const RESET = "RESET"

export const addCount = (number:any)=>({ type : INCREMENT, payload:number })
export const minusCount = (number:any)=>({ type : DECREMENT, payload:number })
export const resetCount = (number:any)=>({ type : RESET})

export interface Counterstate {
    ReducerCounter: any
    count: number,
    price? : number
}

const initialState: Counterstate = {
    count: 1,
    price: 10,
    ReducerCounter: undefined
}

export default function ReducerCounter(state = initialState, { type, payload }: any) {
    var newcount = 0;
    switch (type) {

        case "INCREMENT":
            newcount = state.count+payload
            return { ...state, count: newcount,price : 10*newcount}
        case "DECREMENT":
            newcount = state.count-payload
            return { ...state, count: newcount,price : 10*newcount}
        case "RESET":
            return { ...state, count: 0,price : 10*payload}

        default:
            return state
    }
}
