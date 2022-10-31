import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import start from '../../images/start.jpg';
import edit from '../../images/edit.png';
import bye from '../../images/bye.png';

import Footer from '../Footer';
import NavBar from '../NavBar';


const Dashboard = () => {

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

                <Row style={{ fontSize: '80px', padding: '100px', fontFamily: 'Amaranth' }}>

                    <h1>What would you like to do?</h1>

                </Row>
                <Row>
                    <Col style={{ padding: '50px' }}>
                        <a href={`/Create`} >  <img src={start} alt='' height={200} /></a>
                    </Col>

                    <Col style={{ padding: '50px' }}>
                        <a href={`/all-book-reports`} padding='100px' ><img src={edit} alt='' height={200} /></a>
                    </Col>
                </Row>
                <Row style={{ padding: '50px' }}>
                    <a href={`/loggedout`} padding='100px' ><img src={bye} alt='' width={400} /></a>

                </Row>


            </Container>
            <Footer />
        </>

    );
};



export default Dashboard;