import babydinowaving from "../../images/dinosaur-waving.png";
import Footer from "../Footer";
import { useEffect } from "react";
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import logo from "../../images/Logo.png";


const LoggedOut = () => {

    useEffect(() => {

        localStorage.clear();

    });

    return (
        <>
           
            <Container style={{ fontSize: '80px', padding: '50px', fontFamily: 'Amaranth' }}>
                <Row>
                    <Col xs='8' sm='8' md='8' lg='12' xl='12' style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                       <a href={`/`} > <img
                            alt=""
                            src={logo}
                            width="30%"
                            style={{ paddingTop: "2px", paddingBottom: "2px" }}
                        ></img>
                        </a>
                    </Col>
                </Row>
                <Row >

                    <h1>Successfully Signed Out!</h1>
                </Row>

                <Row>
                    <h1>See you next time. Bye!</h1>
                </Row>

                <Row>
                    <Col xs='12' sm='12' md='8' lg='12' xl='12' style={{ paddingBottom: '5px', paddingTop: '5px' }}>
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