import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        HydrateFallback: Loader,
      },

      {
        path: "/blog",
        element: <Blogs />,
        HydrateFallback: Loader,
      },
      {
        path: "/contact",
        element: <Contact />,
        HydrateFallback: Loader,
      },
    ],
  },
]);

export default router;
