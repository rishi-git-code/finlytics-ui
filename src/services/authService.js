const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const registerUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/user/register`, {
        method : 'POST',
        headers : {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(userData),
    });

    if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message ||"Failed to register user");
    }
    const successData = await response.json();
    console.log("Success Response Body:", successData);
    return successData;
};

export const loginUser = async (userData) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/user/login`, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "User login failed")
    }
    const successData = await response.json();
    // On successful login
    localStorage.setItem("token", successData.jwtToken);
    console.log("Login Successful:",successData);
    return successData;
};

export const validateToken = async() => {
    console.log("API VALIDATION STARTED");
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/api/token`, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if(!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Token is Invalid/Expired")
    }
    console.log("Token is valid...",response);
    return true;
};