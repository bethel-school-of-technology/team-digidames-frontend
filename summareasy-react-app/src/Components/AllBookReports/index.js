import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import back from '../../images/back2.png'
import SignOut from '../LogOut/Logout';

// import SignOut from '../LogOut/Logout';





const AllBookReports = ({ bookReportData }) => {

    const context = useContext(BookReportContext);
    return (

        // <div className="container header">
        //     {/* <CreateBookReport /> */}
        //     <div className='header'>
        //     <button onClick={SignOut}>Sign Out</button>
        //     </div>
        //     <div>
        //         <h1>View Book Reports</h1>
        //         {bookReportData.map((bookReport) => (
        //             <div key={bookReport.id} className="one-bookReport">
        //                 <h3>{bookReport.title}</h3>

        <div style={{ backgroundColor: 'rgba(174, 152, 219)' }}>
            <NavBar />
            <Container>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(119,148,73)' }}><h1>{localStorage.getItem("firstName")}'s Book Reports</h1></Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(255,182,0)' }}>
                    <div className="container header">
                        {/* <CreateBookReport /> */}
                        <div>


                            {bookReportData.map((bookReport) => (

                                <div key={bookReport.id} className="one-bookReport">
                                    <Row style={{ padding: '15px', margin: "30px", textAlign: 'center', backgroundColor: 'rgba(119,148,73)' }}>
                                        <Col xs='12' sm='12' md='12' lg='4' xl='4'>
                                            <h3>{bookReport.title}</h3>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }}>
                                            <a class="button" href={`one-bookreport/${bookReport.id}`}>{" "}View{" "}</a>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }} >
                                            <a class="button" href={`update-bookreport/${bookReport.id}`}>{" "}Update{" "}</a>
                                        </Col>

                                        <Col xs='12' sm='12' md='12' lg='2' xl='2' style={{ margin: "5px", textAlign: 'center'  }} >
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
                    ></img>
                    </a>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};



export default AllBookReports;