import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

function Productdescscreen() {
  const { id } = useParams(); // Get the product ID from the URL

  return (
    <>
      <h1>Productdescscreen</h1>
      <h1>The product id is {id}</h1>
    </>
  );
}

export default Productdescscreen;
