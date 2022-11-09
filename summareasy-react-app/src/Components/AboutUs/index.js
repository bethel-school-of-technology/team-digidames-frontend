import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/Logo.png';
import lori from '../../images/Lori2.jpg';
import jess from '../../images/JessPlaceHolder.jpg';
import back from '../../images/back2.png'
import Footer from '../Footer';

import "../../App.css";


function AboutUs() {

    const team = [
        {
            name: 'Jess Moton',
            role: 'Full Stack Developer',
            about: '',
            image: jess
        },
        {
            name: 'Lori Hutchins',
            role: 'Christ-Follower, Wife, Mother and Full Stack Developer Student',
            about: 'My name is Lori Hutchins. I am a Christ-follower, wife, and mother of two teenagers. I have been a part of the Indiana Wesleyan University community since 1998 when I began my college journey as a traditional student. My college journey was delayed because I was unsure what degree to pursue and was planning a wedding.  After getting married, my husband and I moved to Oregon and began our family. Nineteen years after beginning college, I find myself with the opportunity to pursue my degree again, but this time in a field that I am excited about and was not available back in 1998. I am thankful!',
            image: lori
        }
    ]

    const displayTeam = () => {
        return team.map(({ name, role, image, about }, i) => {
            return (
                <Row key={i} style={{ paddingBottom: '100px', padding: '50px' }}>
                    <Col xs='12' sm='12' md='12' lg='5' xl='5'>
                        <img variant="top" src={image} style={{ padding: '10px' }} width='75%' alt='digidameteammate' />
                        <h4 style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'Teko' }}>{name}</h4>
                    </Col>
                    <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                        <p style={{ fontSize: '28px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Teko' }}>{role}</p>
                        <p style={{ fontSize: '22px', textAlign: 'center', fontFamily: 'Teko' }}>{about}</p>
                    </Col>
                </Row>
            )
        })
    }

    return (
        <div style={{ backgroundColor: 'rgba(121,136,100)' }} >
            <Container  style={{ backgroundColor: 'rgba(174, 152, 219)' }} >
                <Row style={{ paddingTop: '25px', textAlign: 'center' }}>
                    <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{ paddingBottom: '50px', paddingTop: '15px' }}>
                        <img
                            alt=""
                            src={logo}
                            width="40%"
                            style={{ paddingTop: "2px", paddingBottom: "40px" }}
                        ></img>
                    </Col>
                </Row>
                <Row>
                    <h1 style={{ fontSize: '44px', paddingBottom: '10px', fontFamily: 'Teko' }}>About Us</h1>
                </Row>
                <Row>
                    <div className="d-flex justify-content-center">
                        <p style={{ fontSize: '20px', width: '750px', textAlign: 'left', fontFamily: 'Teko' }}>Write a Paragraph about us.  Digital.....Dame is "the title given to a woman equivalent to the rank of knight.".... Knighted by the Lord ???</p>
                    </div>
                </Row>

                <Row>
                    <Col xs='12' sm='12' md='12' lg='12' xl='12'>
                        <h1 style={{ fontSize: '44px', paddingBottom: '30px', paddingTop: '25px', fontFamily: 'Teko' }}>DigiDames</h1>
                        {displayTeam()}
                    </Col>
                </Row>
                <Row>
                    <a href={`/Dashboard`} margin="15px">
                        <img
                            alt="go back to Dashboard"
                            src={back}
                            width="200"
                            style={{ paddingTop: "20px", paddingBottom: "40px" }}
                        ></img>
                    </a>
                </Row>
            </Container>
            <Footer />
        </div>

    )

}


export default AboutUs;