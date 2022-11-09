import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import Footer from '../Footer';
import NavBar from '../NavBar';
import schoolBus from '../../images/schoolbus.png';
import logo from '../../images/Logo.png'
import signup from '../../images/SignUp.png'
import signin from '../../images/SignIn.png'


const LandingPage = () => {

    return (
        <>

            <Container>
                <Row>

                </Row>
                <Row>

                    <div >

                        <div >
                            {/* <a href={`/register`} >
                                <img
                                    alt=""
                                    width="20%"
                                    src={signup}
                                    style={{ paddingTop: "2px", paddingBottom: "2px" }}
                                ></img>
                            </a>
                            <a href={`/login`} >
                                <img
                                    alt=""
                                    width="20%"
                                    src={signin}
                                    style={{ paddingTop: "2px", paddingBottom: "2px" }}
                                ></img>
                            </a> */}
                            {/* 
                            <button >

                                <a href={`/login`} >Sign In</a>

                            </button> */}
                        </div>
                    </div>
                </Row>

                <Row style={{ fontSize: '80px', padding: '5x', fontFamily: 'Amaranth' }}>

                    <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{ paddingBottom: '25px', paddingTop: '10px' }}>
                        <img
                            alt=""
                            src={logo}
                            width="50%"
                            style={{ paddingTop: "2px", paddingBottom: "2px" }}
                        ></img>
                    </Col>

                </Row>

                <Row>

                    <Col xs='3' sm='3' md='3' lg='3' xl='3' >
                        <a href={`/register`} >
                            <img
                                alt=""
                                width="70%"
                                src={signup}
                                style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            ></img>
                        </a>
                    </Col>

                    <Col xs='6' sm='6' md='6' lg='6' xl='6'>
                        <h1>Welcome to Summareasy</h1>
                    </Col>

                    <Col xs='3' sm='3' md='3' lg='3' xl='3' >
                        <a href={`/login`} >
                            <img
                                alt=""
                                width="70%"
                                src={signin}
                                style={{ paddingTop: "2px", paddingBottom: "2px" }}
                            ></img>
                        </a>
                    </Col>

                </Row>


                <Row style={{ fontSize: '24px', padding: '30px', fontFamily: 'Amaranth' }}>
                    <h4>
                        Write something about what Summareasy can do and direct end-user to Register.
                    </h4>
                </Row>

                <Row>

                    <img
                        alt="school bus background"
                        src={schoolBus}
                        width="80%"
                        style={{ paddingTop: "35px", paddingBottom: "40px" }}
                    ></img>

                </Row>


            </Container>
            <Footer />
        </>
    );
};



export default LandingPage;