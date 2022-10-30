import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import back from '../../images/back2.png'


const AllBookReports = ({ bookReportData }) => {

    const context = useContext(BookReportContext);
    return (
        <>
            <NavBar />
            <Container>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(119,148,73)' }}><h1>Your Book Reports</h1></Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(255,182,0)' }}>
                    <div className="container header">
                        {/* <CreateBookReport /> */}
                        <div>

                            {bookReportData.map((bookReport) => (

                                <div key={bookReport.id} className="one-bookReport">
                                    <Row style={{ padding: '25px', margin: "30px", textAlign: 'center', backgroundColor: 'rgba(119,148,73)' }}>
                                        <Col>
                                            <h3>{bookReport.title}</h3>
                                        </Col>

                                        <Col>
                                            <a class="button" href={`one-bookreport/${bookReport.id}`}>{" "}View{" "}</a>
                                        </Col>

                                        <Col>
                                            <a class="button" href={`update-bookreport/${bookReport.id}`}>{" "}Update{" "}</a>
                                        </Col>

                                        <Col>
                                            <button onClick={() => context.handleDelete(bookReport.id)} class="button">Delete</button>
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
            ></img></a> </Row>
            </Container>
            <Footer />
        </>
    );
};



export default AllBookReports;