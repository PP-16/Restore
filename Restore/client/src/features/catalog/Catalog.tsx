import { useEffect, useState } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

export default function Catalog() {
  const [product,setProduct] = useState<Product[]>([])

  useEffect(() => {
    fetch("http://localhost:5000/api/Product")
    .then((response)=>response.json())
    .then((data)=>setProduct(data))
    .catch((error)=>console.log(error));
  }, [])
  

  return (
    <>
    <ProductList products={product}/>
    </>
  );
}
