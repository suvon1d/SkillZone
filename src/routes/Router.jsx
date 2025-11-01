import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/pages/Home/Home";

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
    element: <h1 className="text-3xl">Othotication Layout </h1>,
  },
  {
    path: "/courses",
    element: <h1 className="text-3xl">Courses Layout</h1>,
  },
  {
    path: "/*",
    element: <h1 className="text-3xl">Error Page</h1>,
  },
]);

export default router;
