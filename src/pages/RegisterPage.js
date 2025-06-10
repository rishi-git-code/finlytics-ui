import React from "react";

import RegisterForm from "../components/forms/RegisterForm";
import '../styles/RegisterPageStyle.css';
import logo from '../assets/fnt.png';


const RegisterPage = () => {
    return (
        
        <div className="page-background">
            <header className="logo-header">
                <img src={logo} className="logo-img" alt="logo" />
            </header>
            <div className="register-page">
                <h1 className="animated-heading">Welcome to FinLytics</h1>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;