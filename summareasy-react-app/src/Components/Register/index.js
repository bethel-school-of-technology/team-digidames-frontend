import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../Footer";
import NavBar from "../NavBar";
import car from '../../images/car2.png'

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
                        <form onSubmit={register}>
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

export default Register;