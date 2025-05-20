export const registerUser = async (userData) => {
    const response = await fetch("http://localhost:8080/api/v1/user/register", {
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