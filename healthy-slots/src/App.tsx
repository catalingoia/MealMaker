import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router";
import NavBar from "./shared/NavBar";
import HomePage from "./HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Outlet />
      <NavBar />
    </div>
  );
}

export default App;
