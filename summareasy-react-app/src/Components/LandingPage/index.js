import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import Footer from '../Footer';
import NavBar from '../NavBar';
import schoolBus from '../../images/schoolbus.png';


const LandingPage = () => {

    return (
        <>
            <NavBar />
            <Container>
                <Row>

                    <div className='header'>

                        <div className='buttons'>
                            <button >
                                <a href={`/register`} >Sign Up</a>
                            </button>
                            <button >

                                <a href={`/login`} >Sign In</a>

                            </button>
                        </div>
                    </div>
                </Row>

                <Row style={{ fontSize: '80px', padding: '60px', fontFamily: 'Amaranth' }}>

                    <h1>Welcome to Summareasy</h1>

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
                        width="1300"
                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                    ></img>

                </Row>


            </Container>
            <Footer />
        </>
    );
};



export default LandingPage;