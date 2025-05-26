import React from "react";

import RegisterForm from "../components/forms/RegisterForm";

const RegisterPage = () => {
    return (
        <div className="page-background">
            <div className="register-page">
                <h1>Welcome to the Registration Page</h1>
                <RegisterForm/>
            </div>
        </div>
    )
}

export default RegisterPage;