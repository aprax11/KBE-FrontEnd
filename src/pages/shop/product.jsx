import React, {useContext, useEffect, useState} from "react";
import { ShopContext } from "../../context/shop-context";
import {Image} from "../image";
import {InspectProductForm} from "./inpectProductForm";


export const Product = (props) => {
  const { id, name, description, price, details, image } = props.data;
  const { addToCart, cartItems, getAmmountOfItemInCart, updateCartItemCount } = useContext(ShopContext);


    useEffect(() => {
        updateCartItemCount();
    }, []);

  const cartItemCount = getAmmountOfItemInCart(id);

  const [showForm, setShowForm] = useState(false);
  const handleInfoButtonClick = () => {
      setShowForm(!showForm);
  };
  return (
    <div className="product">
        {!showForm && (
            <Image data={[image, description]}></Image>
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
            <button className="addToCartBttn" onClick={() => addToCart(props.data)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>

    </div>
  );
};
