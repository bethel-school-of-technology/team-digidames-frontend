import React from "react";
import sun from "../../images/sun.jpg.png"
import { Col, Container, Row } from 'react-bootstrap';
import "../../App.css";

function Footer() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return (
        <footer >
            <Row style={{fontFamily:'Amaranth', fontSize:'25px', padding: '19px', color: 'rgba(0,0,0)'}}>
                <Col>
                    <img
                        alt=""
                        src={sun}
                        width="50"
                        style={{ padding: "10px" }}
                    ></img>
                
                    <span>Summareasy &copy; 2022 </span>
                </Col>
                <Col>
                    <span>Today is {month}/{day}/{year}</span>
                </Col>
                <Col>
                    <span><a href={`/about`} class='aboutUsLink'>About DigiDames</a></span>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer;


{/* <Row key={i} style={{paddingBottom: '100px', paddingRight: '100px'}}>
<Col xs='12' sm='12' md='5' lg='5' xl='6'>
    <img variant="top" src={image} style={{padding: '10px'}} width= '350px' alt='digidameteammate'/>
    <h4 style={{fontSize: '28px', fontWeight: 'bold', fontFamily: 'Teko'}}>{name}</h4>
</Col>
<Col xs='12' sm='12' md='7' lg='7' xl='6'>
    <p style={{fontSize: '28px', textAlign: 'center', fontWeight: 'bold', fontFamily: 'Teko'}}>{role}</p>
    <p style={{fontSize: '22px', textAlign: 'center', fontFamily: 'Teko'}}>{about}</p>
</Col>
</Row> */}