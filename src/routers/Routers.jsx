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
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Emergency",
        element: <Emergency />,
      },
      {
        path: "/doctor-details/:id",
        element: <DoctorDetails />,
        hydrateFallbackElement: <p>Loading , please wait.....</p>,
        loader: () => fetch("../drmain.json"),
      },
    ],
  },
]);

export default router;
