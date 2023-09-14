import { useState } from "react";
import Navbar from "../components/Navbar";
import Catalogo from "../components/Catalogo";

const Home = () => {
  const [carrito, setCarrito] = useState([]);
  return (
    <>
      <Navbar carrito={carrito} />
      <Catalogo setCarrito={setCarrito} carrito={carrito} />
    </>
  );
};

export default Home;
