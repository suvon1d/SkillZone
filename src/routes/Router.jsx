import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import Profile from "../components/pages/Profile/Profile";
import SkillDetails from "../components/pages/SkillDetails/SkillDetails";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Loading from "../components/pages/Loading/Loading";
import ErrorPage from "../components/pages/ErorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
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
    path: "/skill/:id",
    element: (
      <PrivateRoute>
        <SkillDetails></SkillDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/skillsData.json"),
    hasErrorBoundary: <Loading></Loading>,
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
