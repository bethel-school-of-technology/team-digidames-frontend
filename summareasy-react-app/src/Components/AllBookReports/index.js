import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
// import CreateBookReport from '../CreateBookReport';
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
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgb(46, 90, 151)' }}><h1>{localStorage.getItem("firstName")}'s Book Reports</h1></Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(52,52,52)' }}>
                    <div className="container header">
                        {/* <CreateBookReport /> */}
                        <div>


                            {bookReportData.map((bookReport) => (

                                <div key={bookReport.id} className="one-bookReport">
                                    <Row style={{ padding: '15px', margin: "30px", textAlign: 'center', backgroundColor: 'rgb(255, 255, 255)' }}>
                                        <Col xs='12' sm='12' md='12' lg='4' xl='4'>
                                            <h3>{bookReport.title}</h3>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }}>
                                           <Button variant="primary" className="button" href={`one-bookreport/${bookReport.id}`}>{" "}View{" "}</Button>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }} >
                                            <Button variant="dark" className="button" href={`update-bookreport/${bookReport.id}`}>{" "}Update{" "}</Button>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }} >
                                            <Button variant="danger" onClick={() => context.handleDelete(bookReport.id)} className="button">Delete</Button>
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