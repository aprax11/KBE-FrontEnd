import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./inspectProductForm.css";
import React, {useEffect, useState} from "react";
import Axios from "axios";


export const InspectProductForm = (props) => {

    const { id, name, description, price, details, image } = props.data;

    let type;
    console.log("image: {}", image)

    switch(image){
        case "1": type="Necklace";
            break
        case "2": type="Ring";
            break
        case "3": type="Earring";
            break
        default: type="Item";
            break
    }
    return (
        <div className="create-post">
            <form>

                <label>Name:</label>
                <input   value={name}  readOnly={true}/>
                <label>Price:</label>
                <input   value={price}  readOnly={true}/>
                <label>Type:</label>
                <select >
                    <option disabled selected>{type}</option>

                </select>
                <label>Description:</label>
                <textarea placeholder={description}  value={description} readOnly={true} />

                <textarea placeholder="Details..."  />
            </form>
        </div>
    );
};