import React, {useContext, useState} from "react";
import { ShopContext } from "../../context/shop-context";
import {Image} from "../image";
import {InspectProductForm} from "./inpectProductForm";


export const Product = (props) => {
  const { id, name, description, price, details, imageLink } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const [showForm, setShowForm] = useState(false);
  const handleInfoButtonClick = () => {
      setShowForm(!showForm);
  };
  return (
    <div className="product">
        {!showForm && (
            <Image data={[imageLink, description]}></Image>
        )}
        {!showForm && (
            <div className="description">

                <p>
                    <b>{name}</b>
                </p>
                <p> ${price}</p>
            </div>
        )}
        {showForm && (
            <InspectProductForm data={props.data}></InspectProductForm>
        )}

        <div className="buttonBox">
            <button className="infoBttn" onClick={handleInfoButtonClick}>
                Inspect Product
            </button>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>

    </div>
  );
};
