import React from "react";
import { Product } from "./product";
import "./shop.css";

export const Shop = (props) => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>KBE Front-End</h1>
      </div>

      <div className="products">
        {props.data.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
