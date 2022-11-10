import babydinowaving from "../../images/dinosaur-waving.png";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import {Col} from 'react-bootstrap'


const LoggedOut = () => {
    const navigate = useNavigate();
    
    useEffect(() =>{
        
    localStorage.clear();
  
    navigate("/loggedout"); 
    
   
    
    
    });


   
   




    return (
        <>
            <NavBar />
            <Container style={{ fontSize: '80px', padding: '50px', fontFamily: 'Amaranth' }}>
                <Row >

                    <h1>Successfully Signed Out!</h1>
                </Row>

                <Row>
                    <h1>See you next time. Bye!</h1>
                </Row>

                <Row>
                    <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                    <img
                        alt=""
                        src={babydinowaving}
                        width="75%"
                        style={{ padding: "10px" }}
                    ></img>
                    </Col>
                </Row>
                <Row>
                    <h1>Thank you!</h1>
                </Row>
            </Container>
            <Footer />

        </>
    );

}

export default LoggedOut;