import axios from "axios";
import { useState } from "react";
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from "../Footer";
import NavBar from "../NavBar";
import tree from '../../images/tree.png'
import sun from '../../images/sun.jpg.png'
import babyDinos from '../../images/babydinos.png'
import { useNavigate } from "react-router-dom";
// import boulder3 from '../../images/boulder3.png'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    

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
                localStorage.setItem('userId', result.data.user.id);
                localStorage.setItem('email', result.data.user.email);
                localStorage.setItem('firstName', result.data.user.firstName);
                localStorage.setItem('lastName', result.data.user.lastName);
                console.log(result.data);
                navigate('/dashboard');

            })
        }
    };
    




    return (
        <>
             <NavBar />  
            <Container style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(144,186,249)' }}>


                <Row>
                    <Col xs='7' sm='6' md='5' lg='5' xl='5' style={{ paddingBottom: '5px', paddingTop: '5px' }} >
                        <img
                            alt=""
                            src={tree}
                            width="100%"
                            style={{ padding: "10px" }}
                        ></img>
                    </Col>
                    <Col xs='3' sm='6' md='3' lg='3' xl='3' style={{ paddingBottom: '5px', paddingTop: '5px' }} >
                        <form onSubmit={signIn}>
                            <h1>Sign In</h1>
                            <br />
                            <br />
                            <label htmlFor="email">Email:</label>
                            <br />

                            <input type="text" name="email" onChange={e => setEmail(e.target.value)}></input>
                            <br />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <br />

                            <input type="password" name="password" onChange={e => setPassword(e.target.value) }></input>
                            <br />
                            <br />
                            <Button className="button" onClick={signIn}>Sign In</Button>
                            <br />

                        </form>
                    </Col>
                    <Col xs='12' sm='12' md='4' lg='4' xl='4' style={{ paddingBottom: '5px', paddingTop: '5px' }}>


                        <img
                            alt=""
                            src={sun}
                            width="50%"
                            style={{ padding: "30px" }}
                        ></img>
                        <br></br>
                    
                       
                       <img
                            alt=""
                            src={babyDinos}
                            width="100%"
                            style={{ padding: "30px" }}  

                            
                        ></img>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );

}

export default Login;
