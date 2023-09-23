import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const Product = (props) => {
  const { id, name, description, price, details, imageLink } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  let img

  switch(imageLink){
      case "1": img = require("../../assets/products/1.png")
          break;
      case "2": img = require("../../assets/products/2.png")
          break;
      default:
          break;
  }


  return (
    <div className="product">
      <img src={img} alt={description}/>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
