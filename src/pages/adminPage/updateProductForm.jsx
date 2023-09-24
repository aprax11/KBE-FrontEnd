import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./updateProductForm.css";
import React, {useEffect, useState} from "react";
import Axios from "axios";


export const UpdateProductForm = (props) => {

    const { id, name, description, price, details, imageLink } = props.data;

    const updateSchema = yup.object().shape({
        name: yup
            .string()
            .required("You must add a title."),
        price: yup
            .string()
            .required('You must add a price.')
            .matches(/^\d+€$/, 'The input may only contain numbers and must end with a euro symbol (€).'),
        description: yup
            .string(),
        details: yup
            .string(),
        imageLink: yup
            .string()
            .notOneOf(['Select a Type'], 'Please select a type.')

    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(updateSchema),
    });


    const onCreatePost = async (data) => {
        let ret = data;
        ret.id = id;

        console.log(ret);

        Axios.put("http://localhost:8081/products", ret)
            .then((response) => {
                // Handle the successful response here
                console.log('Response:', response.data);
            })
            .catch(error =>
                console.error(error));

        window.location.reload();
    };
    const [nameValue, setNameValue] = useState(name);
    const handleNameChange = (e) => {
        // Update the inputValue state when the user types
        setNameValue(e.target.value);
    };
    const [priceValue, setPriceValue] = useState(price);
    const handlePriceChange = (e) => {
        // Update the inputValue state when the user types
        setPriceValue(e.target.value);
    };
    const [descriptionValue, setDescriptionValue] = useState(price);
    const handleDescriptionChange = (e) => {
        // Update the inputValue state when the user types
        setDescriptionValue(e.target.value);
    };
    return (
        <div className="create-post">
            <form onSubmit={handleSubmit(onCreatePost)}>

                <input  {...register("name")} value={nameValue} onChange={handleNameChange} />
                <p style={{ color: "red" }}> {errors.name?.message}</p>

                <input  {...register("price")} value={priceValue} onChange={handlePriceChange}  />
                <p style={{ color: "red" }}> {errors.price?.message}</p>

                <select id="auswahlelement" {...register("imageLink")}>
                    <option disabled selected hidden>Select a Type</option>
                    <option value="2">Necklace</option>
                    <option value="1">Ring </option>
                    <option value="3">Earring</option>
                </select>
                <p style={{ color: "red" }}> {errors.imageLink?.message}</p>

                <textarea placeholder={description} {...register("description")} value={descriptionValue} onChange={handleDescriptionChange}/>

                <textarea placeholder="Details..." {...register("details")} />

                <input type="submit" className="submitForm" />
            </form>
        </div>
    );
};