import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import ErrorPage from "../../pages/ErrorPage";
import Store from "../../pages/Store";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "store/",
      element: <Store />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
