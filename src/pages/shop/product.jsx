import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import pic from "../../assets/products/1.png";


export const Product = (props) => {
  const { id, name, description, price, details, count, imageLink } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];




  return (
    <div className="product">
      <img src={require("../../assets/products/1.png")} />
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
