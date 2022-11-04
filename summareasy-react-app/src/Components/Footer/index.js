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
            <Row style={{fontFamily:'Amaranth', fontSize:'25px', padding: '19px', color: 'rgba(0,0,0)', backgroundColor: 'rgba(174, 152, 219)' }}>
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
