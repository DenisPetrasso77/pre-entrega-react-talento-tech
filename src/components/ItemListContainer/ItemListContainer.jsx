import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Hubo un error al buscar productos");
        return res.json();
      })
      .then((data) => {
        if (type) {
          const filtered = data.filter(
            (prod) => prod.type.toLowerCase() === type.toLowerCase()
          );
          setProducts(filtered);
        } else {
          setProducts(data);
        }
      })
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <section className="item-list-section">
      <h1>
        {type
          ? `Catálogo de ${type.charAt(0).toUpperCase() + type.slice(1)}s`
          : "Bienvenidos"}
      </h1>
      <ItemList list={products} />
    </section>
  );
};
