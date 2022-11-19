import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import back from '../../images/back2.png'


const AllBookReports = ({ bookReportData }) => {

    const context = useContext(BookReportContext);
    return (

        <div style={{ backgroundColor: 'rgb(253, 162, 22)' }}>
            <NavBar />
            <Container>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgb(46, 90, 151)', color: 'white' }}><h1>{localStorage.getItem("firstName")}'s Book Reports</h1></Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(52,52,52)' }}>
                    <div className="container header">
                       
                        <div>

                            {bookReportData.map((bookReport) => (

                                <div key={bookReport.id} className="one-bookReport">
                                    <Row style={{ width: 'auto', backgroundColor: 'rgb(255, 255, 255)' }}>

                                        <Col xs='12' sm='6' md='6' lg='6' xl='6' style={{ margin: '10px' }}>

                                            <Row xs='12' sm='12' md='12' lg='12' xl='12' style={{}} > <h3>{bookReport.title}</h3></Row>
                                
                                {/* <buttons> */}
                                            <Row xs='12' sm='12' md='12' lg='12' xl='12' style={{ display: 'flex' }}>
                                                <Col xs='4' sm='4' md='4' lg='4' xl='4' >
                                                    <Button variant="primary" className="button" href={`one-bookreport/${bookReport.id}`}>{" "}View{" "}</Button>
                                                </Col>

                                                <Col xs='4' sm='4' md='4' lg='4' xl='4' style={{ textAlign: 'center' }} >
                                                    <Button variant="dark" className="button" href={`update-bookreport/${bookReport.id}`}>{" "}Update{" "}</Button>
                                                </Col>

                                                <Col xs='4' sm='4' md='4' lg='4' xl='4' style={{ textAlign: 'center' }} >
                                                    <Button variant="danger" className="button" onClick={() => context.handleDelete(bookReport.id)}>Delete</Button>
                                                </Col>
                                            </Row>

                                        </Col>

                                        <Col xs='11' sm='5' md='5' lg='5' xl='5' style={{ margin: '10px' }}>
                                            <Row xs='2' sm='1' md='8' lg='8' xl='8' style={{}} className='reportPreview'><p>{bookReport.report}</p> </Row>
                                        </Col>

                                        <hr></hr>

                                    </Row>
                                </div>

                            ))}
                        </div>

                    </div>
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
        </div>
    );
};


export default AllBookReports;