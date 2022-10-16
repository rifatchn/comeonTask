import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useContext } from "react";
import { LoginPage } from "./pages/LoginPage";
import { Routers } from "./component/Routers";
import { Link, UNSAFE_NavigationContext, useNavigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routers></Routers>
    </div>
  );
}

export default App;
