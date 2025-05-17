import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyBooking from "../pages/MyBooking";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import DoctorDetails from "../pages/DoctorDetails";
import Loader from "../components/Loader";
import Emergency from "../pages/Emergency";

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
        loader: () => fetch("/drmain.json"),
      },
      {
        path: "/my-booking",
        element: <MyBooking />,
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
      {
        path: "/Emergency",
        element: <Emergency />,
        HydrateFallback: Loader,
      },
      {
        path: "/doctor-details/:id",
        element: <DoctorDetails />,
        HydrateFallback: Loader,
        loader: () => fetch("../drmain.json"),
      },
    ],
  },
]);

export default router;
