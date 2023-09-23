import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {Image} from "../image";


export const Product = (props) => {
  const { id, name, description, price, details, imageLink } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
        <Image data={[imageLink, description]}></Image>
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
