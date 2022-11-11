import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import Footer from '../Footer';
import schoolBus from '../../images/schoolbus.png';
import logo from '../../images/Logo.png'
import signup from '../../images/SignUp.png'
import signin from '../../images/SignIn.png'


const LandingPage = () => {

    return (
        <>

            <Container>


                <Row style={{ fontSize: '80px', padding: '5x', fontFamily: 'Amaranth' }}>

                    <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                        <img
                            alt=""
                            src={logo}
                            width="30%"
                            style={{ paddingTop: "2px", paddingBottom: "2px" }}
                        ></img>
                    </Col>

                </Row>

                <Row>

                    <Col xs='3' sm='3' md='3' lg='3' xl='3' >
                        <a href={`/register`} >
                            <img
                                alt=""
                                width="65%"
                                src={signup}
                                style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            ></img>
                        </a>
                    </Col>

                    <Col xs='6' sm='6' md='6' lg='6' xl='6'>
                        <h1 style={{paddingTop: '40px'}}>Welcome to Summareasy</h1>

                    </Col>

                    <Col xs='3' sm='3' md='3' lg='3' xl='3' >
                        <a href={`/login`} >
                            <img
                                alt=""
                                width="65%"
                                src={signin}
                                style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            ></img>
                        </a>
                    </Col>

                </Row>


                <Row style={{ fontSize: '24px', padding: '30px', fontFamily: 'Amaranth' }}>
                    <h4>
                        Welcome to Summareasy, where book report writing is easy-breezy. Effortlessly search for any book you like, and you will find that creating a report here is like riding a bike. Once you have your message conveyed, email it to your teacher to make the grade.
                    </h4>
                </Row>

                <Row>
                    <Col>
                        <img
                            alt="school bus background"
                            src={schoolBus}
                            width="60%"
                            style={{ paddingTop: "35px", paddingBottom: "40px" }}
                        ></img>
                    </Col>
                </Row>


            </Container>
            <Footer />
        </>
    );
};

export default LandingPage;