import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import productos from "../data/productos";
import categoria from "../data/categoria";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const categoriaSeleccionada = categoria.find(
    (cat) => cat.id === parseInt(categoryId)
  );

  const productosFiltrados = productos.filter(
    (producto) => producto.tipo === categoriaSeleccionada.tipo
  );

  return (
    <div>
      <div className="bg-slate-800 h-20 ">
        <Link to={"/"}>
          <div className="text-white text-3xl font-bold mx-3 pt-5">CPStore</div>
        </Link>
      </div>
      <h2 className="font-bold text-2xl mx-3">
        Categoria: {categoriaSeleccionada.nombre}
      </h2>
      <div className="mt-10 mx-3">
        {productosFiltrados.map((producto) => (
          <div key={producto.id}>
            <div className="bg-white h-[450px] w-[300px] rounded-2xl shadow-2xl">
              <img
                className="h-48 mx-auto"
                src={`${producto.imagen}`}
                alt={`${producto.title}`}
              />
              <h3 className="font-bold text-center text-xl">
                {producto.titulo}
              </h3>
              <p className="mt-5 text-center">{producto.descripcion}</p>
              <div className="flex justify-between items-center mx-10 mt-10">
                <p className="text-2xl font-semibold text-blue-500">
                  $ {producto.precio}
                </p>
                <button
                  onClick={() => navigate(`/item/${producto.id}`)}
                  className="text-blue-500 "
                  href="#"
                >
                  Ver mas
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
