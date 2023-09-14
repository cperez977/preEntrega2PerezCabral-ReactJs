import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import categoria from "../data/categoria";

const Navbar = ({ carrito }) => {
  const navigate = useNavigate();
  const [carritoVisible, setCarritoVisible] = useState(false);
  const totalPrecio = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  const toggleCarrito = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="bg-slate-800 w-full relative">
      <div className="container mx-auto flex justify-between h-40 items-center">
        <Link to={"/"}>
          <div className="text-white text-3xl font-bold">CPStore</div>
        </Link>
        <div className="flex flex-col md:flex-row md:gap-10">
          {categoria.map((item, index) => (
            <button
              className="text-white text-xl "
              onClick={() => navigate(`/category/${item.id}`)}
            >
              {item.nombre}
            </button>
          ))}
        </div>
        <div className="relative">
          <button onClick={toggleCarrito}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white absolute top-1/2 right-0 -translate-y-1/2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>

          {carritoVisible && (
            <div className="absolute top-full right-0 bg-white p-4 shadow-md h-[300px] w-[400px]  ">
              <h1 className="text-xl font-bold text-center">
                Carrito de Compras
              </h1>
              <div className=" overflow-y-auto  h-[90%]">
                {carrito
                  .reduce((productos, producto) => {
                    const index = productos.findIndex(
                      (p) => p.id === producto.id
                    );
                    if (index === -1) {
                      productos.push({ ...producto, cantidad: 1 });
                    } else {
                      productos[index].cantidad++;
                    }
                    return productos;
                  }, [])
                  .map((producto) => (
                    <div key={producto.id} className="border p-2 mb-2 ">
                      <div className="flex justify-between items-center">
                        <div className="w-full flex items-center ">
                          <img
                            src={producto.imagen}
                            alt={producto.titulo}
                            className="w-16 h-16"
                          />
                          <h2 className="text-lg font-semibold">
                            {producto.titulo}
                          </h2>
                        </div>

                        <p className="text-lg font-bold">
                          ${producto.precio * producto.cantidad}
                        </p>
                      </div>
                      <p className="block">Cantidad: {producto.cantidad}</p>
                    </div>
                  ))}
                <div className="text-lg font-bold mt-4">
                  Total: ${totalPrecio}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
