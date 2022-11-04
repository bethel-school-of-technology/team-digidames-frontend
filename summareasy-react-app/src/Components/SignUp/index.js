import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import NavBar from "../NavBar";
import car from '../../images/car2.png'

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
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <img
                            alt=""
                            src={car}
                            width="850"
                            style={{ padding: "10px" }}
                        ></img>
                    </Col>
                    <Col style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(255,182,0)', fontFamily: 'Amaranth' }}>
                        <form onSubmit={signUp}>
                            <h1>Sign Up</h1>
                            <br />
                            
                            <label htmlFor="firstName">First Name</label>
                            <br />
                            <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)}></input>
                            <br />
                            <br />
                            <label htmlFor="lastName">Last Name</label>
                            <br />
                            <input type="text" name="lastName" onChange={e => setLastName(e.target.value)}></input>
                            <br />
                            <br />
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="text" name="email" onChange={e => setEmail(e.target.value)}></input>
                            <br />
                            <br />
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
                            <br />
                            <br />
                            <button>Sign Up</button>
                            <br />

                        </form>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
            <Footer />

        </>
    );
}

export default SignUp;