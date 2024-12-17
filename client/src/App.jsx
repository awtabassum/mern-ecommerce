import { useState } from "react";
import "./App.css";
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Homescreen from "./screens/Homescreen"
import Productdescscreen from "./screens/Productdescscreen"
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
        
          <Route path="/" Component={Homescreen} exact />
          <Route path="/product/:id" Component={Productdescscreen} />
          <Route path="/cart" Component={Cartscreen}/>
          <Route path="/register" Component={Registerscreen}/>
          <Route path="/login" Component={Loginscreen}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
