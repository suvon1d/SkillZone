import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Profile from "../components/pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/skill/:id",
        element: <h1 className="text-3xl">Courses Layout</h1>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/*",
    element: <h1 className="text-3xl">Error Page</h1>,
  },
]);

export default router;
