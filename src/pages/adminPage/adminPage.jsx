import React from "react";
import {AdminProduct} from "./adminProduct";
import "./adminPage.css";

export const AdminPage = (props) => {
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Admin Page</h1>
            </div>

            <div className="products">
                {props.data.map((adminProduct) => (
                    <AdminProduct data={adminProduct} />
                ))}
            </div>
        </div>
    );
};