import * as React from "react";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
