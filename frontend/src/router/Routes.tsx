import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import JournalLayout from "../layout/JournalLayout";
import Journal from "../pages/journal/Journal";
import Login from "../pages/login/Login";
import Dashboard from "../pages/login/Dashboard";
import EditPost from "../pages/login/EditPost";
import PrivateRoute from "./PrivateRoute";
import AdminRoutes from "./AdminRoutes";
import CoffeeLayout from "../layout/CoffeeLayout";
import BuyMeCoffee from "../pages/BuyMeCoffee/BuyMeCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        ],
      },
      {
        path: "/buy-me-coffee",
        element: <CoffeeLayout />,
        children: [
          {
            path: "/buy-me-coffee",
            element: <BuyMeCoffee />,
          },
        ],
      },
      {
        path: "/journal",
        element: <JournalLayout />,
        children: [
          {
            path: "/journal",
            element: <Journal />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-post/:id",
        element: (
          <PrivateRoute>
            <AdminRoutes>
              <EditPost />
            </AdminRoutes>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
