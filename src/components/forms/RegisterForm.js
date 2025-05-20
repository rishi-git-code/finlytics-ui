/*
    RegisterForm component to handle the registration form and user input.
*/

import React,{useState} from "react";
import InputField from "./InputField";
import '../../styles/RegisterPageStyle.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        role:'',
        phoneNumber:''
    });

    const [error, setError] = useState(null);

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
            alert("Registration successful")

        } catch(error) {
            setError(error);
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <InputField className="form-group"
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            />
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
            <InputField className="form-group"
            label="PhoneNumber"
            name="phoneNumber"
            type="number"
            value={formData.phoneNumber}
            onChange={handleChange}
            />
            <InputField className="form-group"
            label="Role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;