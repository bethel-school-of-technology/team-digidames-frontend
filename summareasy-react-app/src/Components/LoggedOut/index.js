import babydinowaving from "../../images/babydinowaving.jpg";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


const LoggedOut = () => {
    const navigate = useNavigate();
    
    useEffect(() =>{
        
    localStorage.clear();
  
    navigate("/loggedout"); 
    
   
    
    
    });


   
   




    return (
        <>
            <NavBar />
            <Container style={{ fontSize: '80px', padding: '100px', fontFamily: 'Amaranth' }}>
                <Row >

                    <h1>Successfully Signed Out!</h1>
                </Row>

                <Row>
                    <h1>See you next time. Bye!</h1>
                </Row>

                <Row>
                    <img
                        alt=""
                        src={babydinowaving}
                        width="200px"
                        style={{ padding: "10px" }}
                    ></img>
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