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
        console.log(data);
        let ret = data;
        ret.id = id;

        Axios.put("http://localhost:8081/products", ret)
            .then((response) => {
                // Handle the successful response here
                console.log('Response:', response.data);
            })
            .catch(error =>
                console.error(error));

        window.location.reload();
    };

    return (
        <div className={"create-post"}>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <div className="form-group">
                    <input placeholder={name} {...register("name")} value={name} />
                    <p style={{ color: "red" }}> {errors.name?.message}</p>

                    <input placeholder={price} {...register("price")} value={price} />
                    <p style={{ color: "red" }}> {errors.price?.message}</p>

                    <select id="auswahlelement" {...register("imageLink")}>
                        <option disabled selected hidden>Select a Type</option>
                        <option value="2">Necklace</option>
                        <option value="1">Ring </option>
                        <option value="3">Earring</option>
                    </select>
                    <p style={{ color: "red" }}> {errors.imageLink?.message}</p>

                    <textarea placeholder={description} {...register("description")} value={description}/>

                    <textarea placeholder="Details..." {...register("details")} />
                </div>

                <input type="submit" className="submitForm" />
            </form>
        </div>
    );
};