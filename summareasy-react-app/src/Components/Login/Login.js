import axios from "axios";
import { useState } from "react";


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        console.log('Sign in!');

        if (username !== '' && password !== '') {
            const req = {
                username,
                password
            };

            axios.post('http://localhost:3000/users/login', req).then(result => {
                const token = result.data.jwt;
                localStorage.setItem('myJWT', token);
                console.log(result.data);

            })
        }
    
    };

//TODO handle actual sign in - How do we do this without an official backend

    return (
        <div>
        
            <form onSubmit={ signIn }> 
                <h1>Sign In</h1>
               
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" onChange={ e => setUsername(e.target.value) }></input> 
                <br />

                <label htmlFor="password">Password</label>
                <br />
                <input type="text" name="password" onChange={ e => setPassword(e.target.value) }></input>
                <br />
                <button>Sign In</button>
                <br />
         
            </form>
        </div>
    );

}

export default Login;