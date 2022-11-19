import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from "../Footer";
import car from '../../images/car2.png';
import logo from '../../images/Logo.png';
import signin from '../../images/SignIn.png';

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


    return (
        <div >
            <Container style={{ backgroundColor: 'rgba(174, 152, 219)' }}>
                <Row>
                    <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{ paddingBottom: '5px', paddingTop: '10px' }}>
                        <a href={`/`} > <img
                            alt=""
                            src={logo}
                            width="30%"
                            style={{ paddingTop: "2px", paddingBottom: "2px" }}
                        ></img>
                        </a>
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px', marginBottom: '100px', padding: '50px' }}>
                    <Col xs='10' sm='10' md='7' lg='67' xl='7'>
                        <Row>
                            <Col xs='6' sm='6' md='6' lg='6' xl='6' >
                                <a href={`/login`} >
                                    <img
                                        alt=""
                                        width="65%"
                                        src={signin}
                                        style={{ paddingTop: "2px", paddingBottom: "60px" }}
                                    ></img>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <img
                                alt=""
                                src={car}
                                width="100%"
                                style={{ padding: "10px" }}
                            ></img>
                        </Row>
                    </Col>
                    <Col xs='12' sm='12' md='4' lg='4' xl='4' style={{ paddingTop: '15px', paddingBottom: '15px', margin: '15px', textAlign: 'center', backgroundColor: 'rgba(255,182,0)', fontFamily: 'Amaranth' }}>
                        <form onSubmit={register}>
                            <h1>Sign Up</h1>
                            <br />

                            <label htmlFor="firstName">First Name</label>
                            <br />
                            <input type="text" name="firstName" onChange={e => setFirstName(e.target.value )} autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" required></input>
                            <br />
                            <br />
                            <label htmlFor="lastName">Last Name</label>
                            <br />
                            <input type="text" name="lastName" onChange={e => setLastName(e.target.value ) } autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" required></input>
                            <br />
                            <br />
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="text" name="email" onChange={e => setEmail(e.target.value ) } autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" required></input>
                            <br />
                            <br />
                            <label htmlFor="password">Password</label>
                            <br />
                            <input type="password" name="password" onChange={e => setPassword(e.target.value ) } autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" required></input>
                            <br />
                            <br />
                            <Button variant="success" onClick={register}>Sign Up</Button>
                            <br />

                        </form>
                    </Col>

                </Row>

            </Container>
            <Footer />

        </div>
    );

}

export default Register;