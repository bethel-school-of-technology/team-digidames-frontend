import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../App.css';
import start from '../../images/start.png';
import view from '../../images/View1.png';
import bye from '../../images/bye.png';

import Footer from '../Footer';
import NavBar from '../NavBar';


const Dashboard = () => {

    return (

        <div style={{backgroundColor:'rgba(144,186,249)'}} >
            <NavBar />
            <Container style={{ backgroundColor: 'rgba(164,210,104)'} }  xs='12' sm='12' md='12' lg='6' xl='6'>


                <Row style={{ fontSize: '80px', padding: '25px', fontFamily: 'Amaranth' }}  xs='12' sm='12' md='12' lg='12' xl='12' >

                    <h1>What would you like to do, {`${localStorage.getItem("firstName")}`}?</h1>

                </Row>
                <Row  >
                    <Col style={{ padding: '25px' }}  xs='12' sm='12' md='12' lg='6' xl='6'>
                        <a href={`/APIBookData`} >  <img src={start} alt='' height={300} /></a>
                    </Col>

                    <Col style={{ padding: '25px' }}  xs='12' sm='12' md='12' lg='6' xl='6'>
                        <a href={`/all-book-reports`} padding='100px' ><img src={view} alt='' height={260} /></a>
                    </Col>
                </Row>
                <Row style={{ padding: '25px' }}  xs='12' sm='12' md='12' lg='12' xl='12'>
                    <a href={`/loggedout`} padding='100px' ><img src={bye} alt='' width={300} /></a>

                </Row>


            </Container>
            <Footer />
        </div>

    );
};



export default Dashboard;