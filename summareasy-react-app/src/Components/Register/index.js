import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        console.log('Registered!');

        if (firstName !== '' && lastName !== '' && email !== '' && password !== '') {
            const req = {
                firstName,
                lastName,
                email,
                password
            };

            axios.post('http://localhost:3000/users', req).then(result => {
                
                const token = result.data.accessToken;
                localStorage.setItem('myJWT', token);
                localStorage.setItem('userId', result.data.user.id);
                localStorage.setItem('email', result.data.user.email);
                localStorage.setItem('firstName', result.data.user.firstName);
                console.log(result.data);
                navigate('/dashboard');

            })
        }
    
    };

//TODO handle actual sign in - How do we do this without an official backend

    return (
        <div>
        
            <form onSubmit={ register }> 
                <h1>Register</h1>
                <label htmlFor="firstName">First Name</label>
                <br />
                <input type="text" name="name" onChange={ e => setFirstName(e.target.value) }></input> 
                <br />
                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" name="lastName" onChange={ e => setLastName(e.target.value) }></input> 
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" onChange={ e => setEmail(e.target.value) }></input> 
                <br />

                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" onChange={ e => setPassword(e.target.value) }></input>
                <br />
                <button>Sign In</button>
                <br />
         
            </form>
        </div>
    );

}

export default Register;