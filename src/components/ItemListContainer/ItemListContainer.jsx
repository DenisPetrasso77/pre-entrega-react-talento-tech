import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ITemList";

export const ItemListContainer = () => {
const [products, setProducts] = useState([])

useEffect(() =>{
    fetch("/data/products.json")
    .then((res) => {
        if(!res.ok){
            throw new Error("Hubo un error al buscar un producto");
        }
        return res.json();

    })
    .then((data) => {
        setProducts(data)
    })
    .catch((err) => {
        console.log(err)
    })
} ,[])

    return(
       <section className="item-list-section">
            <h1>Bienvenidos</h1>
            <ItemList list={products} />
        </section>

    )
};