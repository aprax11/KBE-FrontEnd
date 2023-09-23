import React, {useContext} from "react";

export const AdminProduct = (props) => {
    const { id, name, description, price, details, imageLink } = props.data;

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
            <div className="buttonBox">
                <button className="updateBttn" >
                    Update Product
                </button>
                <button className="deleteBttn" >
                    Delete Product
                </button>
            </div>


        </div>
    );
};