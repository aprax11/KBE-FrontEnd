import React, { useContext } from "react";
export const Image = (props) => {
    let img

    switch(props.data[0]){
        case "1": img = require("../assets/products/1.jpg")
            break;
        case "2": img = require("../assets/products/2.png")
            break;
        case "3": img = require("../assets/products/3.jpg")
            break;
        default:
            break;
    }

    return(
        <img src={img} alt={props.data[1]}/>
    )
}