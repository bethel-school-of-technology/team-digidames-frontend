import React from "react";
import sun from "../../images/sun.jpg.png"
import { Col, Row } from 'react-bootstrap';
import "../../App.css";

function Footer() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return (
        <footer >
            <Row style={{fontFamily:'Amaranth', fontSize:'25px', padding: '19px', color: 'rgba(0,0,0)', backgroundColor: 'rgba(174, 152, 219)' }}>
                <Col xs='12' sm='12' md='12' lg='4' xl='4' style={{ marginBottom: '5px'}}>
                    <img
                        alt=""
                        src={sun}
                        width="50"
                        style={{ padding: "10px" }}
                    ></img>
                
                    <span>Summareasy &copy; 2022 </span>
                </Col>
                <Col xs='12' sm='12' md='12' lg='4' xl='4' style={{ marginBottom: '5px'}} >
                    <span>Today is {month}/{day}/{year}</span>
                </Col>
                <Col xs='12' sm='12' md='12' lg='4' xl='4' style={{ marginBottom: '5px'}}>
                    <span><a href={`/about`} className='aboutUsLink'>About DigiDames</a></span>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer ;
