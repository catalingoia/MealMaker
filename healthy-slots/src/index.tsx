import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Game from "./Game/Game";
import Recipe from "./Recipe/Recipe";
import Achievements from "./Achievements/Achievements";
import Rewards from "./Rewards/Rewards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/recipe",
    element: <Recipe />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
  },
  {
    path: "/rewards",
    element: <Rewards />,
  },
]);

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
