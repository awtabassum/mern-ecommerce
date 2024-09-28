import { useState } from "react";
import "./App.css";
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homescreen} exact />
          <Route path="/product/:id" Component={Productdescscreen} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
