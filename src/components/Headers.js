import React, { useState } from "react";
import '../styles/Headers.css'
import { useNavigate } from "react-router-dom";
import loginIcon from "../assets/login_icon.png";

const Headers = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <header className="header">
            <div className="logo">FinanceTracker</div>
            <div className="icon-wrapper" onClick={()=>setOpen(!open)}>
                
                <img src={loginIcon} alt="User" className="login-icon" />
                {open && (
                <div className="dropdown">
                    <button onClick={logout}>Logout</button>
                </div>
                )}
            </div>
        </header>
    )
}

export default Headers