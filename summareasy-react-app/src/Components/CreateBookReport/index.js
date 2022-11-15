import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';
import dinosaur from '../../images/dinosaur.png';
import back from '../../images/back2.png';
import AllBookReports from '../AllBookReports';

const CreateBookReport = () => {

    const context = useContext(BookReportContext);

    return (
        <>
            <NavBar />

            <Container style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(39,208,241)', fontFamily: 'Amaranth' }}>
                <Row style={{ padding: '15px' }}>
                    <h1>What was the book {localStorage.getItem("myBookTitle")} about?</h1>
                </Row>
                
                <Row  xs='12' sm='12' md='12' lg='12' xl='12' style={{ display:'flex', alignItems: 'center', justifyContent: 'center',width: 'auto', height: 'fit-content' }} >
                    
                    <h4>Book Title: {localStorage.getItem("myBookTitle")}</h4>
                </Row>
                    <Row>
                    <h4>Book Author: {localStorage.getItem("myBookAuthor")}</h4>
                    </Row>
                    
                    <Col  xs='12' sm='12' md='12' lg='12' xl='12' style={{ display:'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Row>
                    <h4 ><img className='cover'src={localStorage.getItem("myBookCover")}></img></h4>
                    </Row>
                </Col>

                <Row style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Col xs='12' sm='12' md='12' lg='6' xl='6' style={{ display:'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <form onSubmit={context.handleSubmit} className="form">

                            <h5>Book Report</h5>
                            <br />
                            <textarea
                                className='report'
                                rows="20"
                                cols="50"
                                name="report"
                                onChange={context.handleReportChange}
                            ></textarea>
                            <br />
                            <Button variant='primary' className="button" type="submit">
                                Create
                            </Button>

                        </form>
                    </Col>
                <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                        <img
                            alt=""
                            src={dinosaur}
                            width="75%"
                            style={{ paddingTop: "160px" }}
                        ></img>
                    </Col>
                </Row>
                <Row><a href={`/Dashboard`} margin="15px">
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

        </>
    )
}

export default CreateBookReport;