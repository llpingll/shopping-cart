import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import ErrorPage from "../../pages/ErrorPage";
import Store from "../../pages/Store";
import GameProfile from "../../pages/GameProfile";
import { Gameprovider } from "../context/GameContext";

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
    {
      path: "store/:gameId/",
      element: <GameProfile />,
    },
  ]);

  return (
    <Gameprovider>
      <RouterProvider router={router} />
    </Gameprovider>
  );
};

export default Router;
