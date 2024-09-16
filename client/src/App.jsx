import { useState } from "react";
import "./App.css";
// import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Homescreen />
    </>
  );
}

export default App;
