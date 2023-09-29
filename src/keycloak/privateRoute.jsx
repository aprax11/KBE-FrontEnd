import React from "react";
export const PrivateRoute = ({ isLogin, login, children }) => {
    if(isLogin) {
        return(
            <>
                {children}
            </>
        )
    }
    login();
    return null;
};

