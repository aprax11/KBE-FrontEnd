import React, {useContext, useState} from "react";
import Axios from "axios";
import {Image} from "../image";
import {UpdateProductForm} from "./updateProductForm";

export const AdminProduct = (props) => {
    const { id, name, description, price, details, image } = props.data;

    const onDelete = async (data) => {
        console.log(data);


        Axios.delete("http://localhost:8081/products/"+data)
            .then((response) => {
                console.log('Response:', response.data);
            })
            .catch(error =>
                console.error(error));

       window.location.reload();
    };

    const [showForm, setShowForm] = useState(false);

    const handleUpdateButtonClick = () => {
        // Set showForm to true when the button is clicked
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
                <UpdateProductForm data={props.data}></UpdateProductForm>
            )}
            <div className="buttonBox">
                <button className="updateBttn" onClick={handleUpdateButtonClick}>
                    Update Product
                </button>
                <button className="deleteBttn" onClick={() => onDelete(id)}>
                    Delete Product
                </button>
            </div>


        </div>
    );
};