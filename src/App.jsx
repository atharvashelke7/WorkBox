import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ErrorElement from "./components/ErrorElement";
import AddProject from "./pages/AddProject";
import ListingPage from "./pages/ListingPage";
import Login from "./pages/Login";

import SharedLayout from "./components/SharedLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Auth from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/homepage",
    element: <SharedLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Dashboard />,
            errorElement: <ErrorElement />,
          },
          {
            path: "listing",
            element: <ListingPage />,
            errorElement: <ErrorElement />,
          },
          {
            path: "addProject",
            element: <AddProject />,
            errorElement: <ErrorElement />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <ErrorElement />,
  },
]);

function App() {
  return (
    <>
        {/* <Auth> */}
      <RouterProvider router={router} />
      <ToastContainer />
        {/* </Auth> */}
    </>
  );
}

export default App;
