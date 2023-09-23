import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import "./addProductForm.css";
import React from "react";


export const AddProductForm = () => {
    const navigate = useNavigate();

    const schema = yup.object().shape({
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
        resolver: yupResolver(schema),
    });


    const onCreatePost = async (data) => {
       console.log(data);

        navigate("/");
    };

    return (
        <div className={"create-post"}>
            <form onSubmit={handleSubmit(onCreatePost)}>
                <div className="form-group">
                    <input placeholder="Name..." {...register("name")} />
                    <p style={{ color: "red" }}> {errors.name?.message}</p>

                    <input placeholder="Price... €" {...register("price")}  />
                    <p style={{ color: "red" }}> {errors.price?.message}</p>

                    <select id="auswahlelement" {...register("imageLink")}>
                        <option disabled selected hidden>Select a Type</option>
                        <option value="2">Necklace</option>
                        <option value="1">Ring </option>
                        <option value="3">Earring</option>
                    </select>
                    <p style={{ color: "red" }}> {errors.imageLink?.message}</p>

                    <textarea placeholder="Description..." {...register("description")} />

                    <textarea placeholder="Details..." {...register("details")} />
                </div>

                <input type="submit" className="submitForm" />
            </form>
        </div>
    );
};