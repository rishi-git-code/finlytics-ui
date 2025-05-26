/*
    RegisterForm component to handle the registration form and user input.
*/

import React,{useState} from "react";
import InputField from "./InputField";
import '../../styles/RegisterPageStyle.css';
import { registerUser } from "../../services/authService";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        role:'',
        phoneNumber:''
    });

    const [isSignIn, setSignIn] = useState(true);

    const [error, setError] = useState(null);

    const [successMessage, setSuccessMessage] = useState("");

    const toggleSignIn = () => {
        setSignIn(!isSignIn);
    }

    const handleChange = (e) => {

        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await registerUser(formData);
            setSuccessMessage(response.username + " successfully registered!");
            setError("");

        } catch(error) {
            setSuccessMessage("");  // Clear any previous success message
            setError(error.message);  // Assuming `err.message` contains the error message
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>{isSignIn ? "Sign In" : "Register"}</h2>
            {error && <p className="error">{error}</p>}
            {/* Show success message if registration is successful */}
            {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}
            {!isSignIn && 
            <InputField className="form-group"
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            />}
            <InputField className="form-group"
            label="Email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            />
            <InputField className="form-group"
            label="Password"
            name="password"
            type="text"
            value={formData.password}
            onChange={handleChange}
            />
            {!isSignIn &&
            <InputField className="form-group"
            label="PhoneNumber"
            name="phoneNumber"
            type="number"
            value={formData.phoneNumber}
            onChange={handleChange}
            />}
            {!isSignIn &&
            <InputField className="form-group"
            label="Role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            />}

            <button type="submit">{isSignIn ?"Sign in": "Register"}</button>
            {/* <p className="cursor-pointer">{isSignIn ? "Don't have an account Signup":"Already have an account login"}</p> */}
            
            <p>
  {isSignIn ? (
    <>
      Don't have an account?{" "}
      <span className="login-text" onClick={toggleSignIn}>
        Sign up
      </span>
    </>
  ) : (
    <>
      Already have an account?{" "}
      <span className="login-text" onClick={toggleSignIn}>
        Log in
      </span>
    </>
  )}
</p>

        </form>
    )
}

export default RegisterForm;