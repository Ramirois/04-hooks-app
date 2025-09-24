import { createBrowserRouter, Navigate } from "react-router";
import { AboutPages } from "../pages/about/AboutPages";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPages } from "../pages/auth/LoginPages";
import { PrivateRoute } from "../pages/PrivateRoute";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPages />,
  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
