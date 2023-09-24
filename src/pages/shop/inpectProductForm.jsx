import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./inspectProductForm.css";
import React, {useEffect, useState} from "react";
import Axios from "axios";


export const InspectProductForm = (props) => {

    const { id, name, description, price, details, imageLink } = props.data;


    return (
        <div className="create-post">
            <form>

                <label>Name:</label>
                <input   value={name}  readOnly={true}/>
                <label>Price:</label>
                <input   value={price}  readOnly={true}/>
                <label>Type:</label>
                <select >
                    <option disabled selected>Kette</option>

                </select>
                <label>Description:</label>
                <textarea placeholder={description}  value={description} readOnly={true} />

                <textarea placeholder="Details..."  />
            </form>
        </div>
    );
};