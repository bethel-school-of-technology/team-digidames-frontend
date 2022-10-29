import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const SignUp = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        console.log('Signed Up!');



        if (email !== '' && password !== '' & firstName !== '' && lastName !== '') {
            const createNewUser = {
                email,
                password,
                firstName,
                lastName
            };

            axios.post('http://localhost:3000/users', createNewUser).then(result => {
                const token = result.data.accessToken;
                localStorage.setItem('myJWT', token);
                localStorage.setItem('userId', result.data.user.id);
                localStorage.setItem('email', result.data.user.email);
                console.log(result.data);
                // redirects to dashboard
                navigate("/dashboard")
            })
        }
    };

    return (
        <div>
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>

                <label htmlFor="firstName">First Name</label>
                <br />
                <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)}></input>
                <br />

                <label htmlFor="lastName">Last Name</label>
                <br />
                <input type="text" name="lastName" onChange={e => setLastName(e.target.value)}></input>
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input type="text" name="email" onChange={e => setEmail(e.target.value)}></input>
                <br />

                <label htmlFor="password">Password</label>
                <br />
                <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
                <br />
                <button>Sign Up</button>
                <br />

            </form>
            <Footer />
        </div>
    );
}

export default SignUp;