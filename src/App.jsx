import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Nav } from "./components/Nav/Nav";
import { Home } from "./components/Home/Home"; // 👈 importamos el nuevo

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} /> {/* 👈 ahora esto muestra el cartel */}
        <Route path="/discos" element={<ItemListContainer type="disco" />} />
        <Route path="/remeras" element={<ItemListContainer type="remera" />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
