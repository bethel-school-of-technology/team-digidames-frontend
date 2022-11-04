import axios from "axios";
import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
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
                console.log(result.data);
                navigate('/dashboard');

            })
        }
    };
    


    //TODO handle actual sign in - How do we do this without an official backend

    return (
        <>
             <NavBar />  
            <Container style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(144,186,249)' }}>


                <Row>
                    <Col>
                        <img
                            alt=""
                            src={tree}
                            width="550"
                            style={{ padding: "10px" }}
                        ></img>
                    </Col>
                    <Col>
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

                            <input type="password" name="password" onChange={e => setPassword(e.target.value)}></input>
                            <br />
                            <br />
                            <button>Sign In</button>
                            <br />

                        </form>
                    </Col>
                    <Col>


                        <img
                            alt=""
                            src={sun}
                            width="250"
                            style={{ padding: "30px" }}
                        ></img>
                        <br></br>
                        {/* <img
                            alt=""
                            src={babyDino}
                            width="150"
                            
                        ></img> */}
                       
                       
                       <img
                            alt=""
                            src={babyDinos}
                            width="500"
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
