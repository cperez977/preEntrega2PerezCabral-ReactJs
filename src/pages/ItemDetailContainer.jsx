import { useState, useEffect } from "react";
import productos, { obtenerProductoPorId } from "../data/productos";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    setProducto(obtenerProductoPorId(Number(id)));
  }, [id]);

  return (
    <div>
      <div className="bg-slate-800 h-40 ">
        <Link to={"/"}>
          <div className="text-white text-3xl font-bold mx-3 pt-5">CPStore</div>
        </Link>
        <h1 className="text-white text-3xl font-bold pt-10 px-3">
          {" "}
          Detalles de {producto.titulo}
        </h1>
      </div>
      <div>
        <p className="text-xl mx-3 mt-10">
          <span className="font-bold">Descripcion:</span> {producto.descripcion}
        </p>
        <p className="text-xl mx-3 mt-10">
          <span className="font-bold">Precio:</span> {producto.precio}
        </p>
      </div>

      <img
        className="h-48 mx-auto"
        src={`${producto.imagen}`}
        alt={`${producto.title}`}
      />
    </div>
  );
};

export default ItemDetailContainer;
