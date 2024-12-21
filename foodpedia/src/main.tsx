import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Menu from "./pages/Menu.tsx";
import Middleware from "./libs/middleware.tsx";
import Profile from "./pages/Profile.tsx";
import Register from "./pages/Register.tsx";
import AuthContext from "./contexts/AuthContext.tsx";
import Aboutus from "./pages/Aboutus.tsx";

// seluruh routing ditaruh pada router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <Middleware.Guest>
        <Login />
      </Middleware.Guest>
    ),
  },
  {
    path: "/register",
    element: (
      <Middleware.Guest>
        <Register />
      </Middleware.Guest>
    ),
  },
  {
    path: "/menu",
    element: (
      <Middleware.Auth>
        <Menu />
      </Middleware.Auth>
    ),
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/about-us",
    element: <Aboutus />,
  },
]);

// gunakan RouterProvider lalu masukkan value dari router
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>
);
