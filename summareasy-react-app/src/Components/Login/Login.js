import axios from "axios";
import { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        console.log('Sign in!');

        if (email !== '' && password !== '') {
            const req = {
                email,
                password
            };

            axios.post('http://localhost:3000/login', req).then(result => {
                const token = result.data.accessToken;
                localStorage.setItem('myJWT', token);
                localStorage.setItem('userId', result.user.id);
                localStorage.setItem('email', result.user.email);
                console.log(result.data);

            })
        }
    
    };

//TODO handle actual sign in - How do we do this without an official backend

    return (
        <div>
        
            <form onSubmit={ signIn }> 
                <h1>Sign In</h1>
               
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

export default Login;