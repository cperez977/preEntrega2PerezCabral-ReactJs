import React from "react";
import Producto from "./Producto";
import productos from "../data/productos";

const Catalogo = ({ setCarrito, carrito }) => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="mt-5 text-2xl font-bold text-center">
          Catalogo de Productos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 place-items-center mx-10 mt-10">
          {productos.map((item, index) => (
            <Producto item={item} setCarrito={setCarrito} carrito={carrito} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalogo;
