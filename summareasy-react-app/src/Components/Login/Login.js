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

    const input_fields = {
        firstName: /^[a-z\d]{5,12}$/i,
        lastName: /^[a-z\d]{5,12}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
        password: /^[!#\w@_-]{5,20}$/,
       
      }
      const validate = (field, regex) => {
        regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
      }
      let keys = document.querySelectorAll('input');
keys.forEach(item => item.addEventListener(
  'keyup', e => {
    validate(e.target, input_fields[e.target.attributes.name.value])
  }
));
    

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

                            <input type="text" name="email" onChange={e => setEmail(e.target.value)  } onChange2={e => e.target.attributes.name.value} required></input>
                            <br />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <br />

                            <input type="password" name="password" onChange={e => setPassword(e.target.value) }onChange2={e => e.target.attributes.name.value} required></input>
                            <br />
                            <br />
                            <button>Sign In</button>
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
