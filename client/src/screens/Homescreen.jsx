import React from "react";
import products from "../products";
import Product from "../components/Product";
function Homescreen() {
  return (
    <>
      <h1>Home Screen Page</h1>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </>
  );
}

export default Homescreen;
