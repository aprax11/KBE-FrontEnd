import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {Image} from "../image";

export const CartItem = (props) => {
  const { id, name, price, image, count} = props.data;
  const {addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <Image data={image}></Image>
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.data)}> - </button>
          <input
            value={count}
            readOnly={true}
          />
          <button onClick={() => addToCart(props.data)}> + </button>
        </div>
      </div>
    </div>
  );
};
