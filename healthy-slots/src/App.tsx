import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./shared/NavBar";

function App() {
  return (
    <div className="App">
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;
