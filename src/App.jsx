import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/item/:id",
    element: <ItemDetailContainer />,
  },

  {
    path: "/category/:categoryId",
    element: <ItemListContainer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
