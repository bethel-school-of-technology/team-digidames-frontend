import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";



const SignOut = () => {

    const navigate = useNavigate();
    const signedOut = localStorage.clear()=== null;

    // e.preventDefault();
    console.log('Signed Out!');
    
    localStorage.clear();
    useEffect(() =>{
        if(signedOut){
            navigate("/loggedout")
        }
    })

return(
    <div>

        <h5>You are signed out!</h5>
    </div>
)};

export default SignOut;