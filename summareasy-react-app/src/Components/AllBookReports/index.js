import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';


const AllBookReports = ({ bookReportData }) => {

    const context = useContext(BookReportContext);
    return (
        <>
            <Container>
                <Row><h1>View Book Reports</h1></Row>
                <Row>
                    <div className="container header">
                        {/* <CreateBookReport /> */}
                        <div>


                            {bookReportData.map((bookReport) => (

                                <div key={bookReport.id} className="one-bookReport">
                                    <Row>
                                        <Col>
                                            <h3>{bookReport.title}</h3>
                                        </Col>

                                        <Col>
                                            <a className="btn" href={`one-bookreport/${bookReport.id}`}>
                                                {" "}
                                                View {" "}
                                            </a>
                                        </Col>


                                        <Col>
                                            <a className="btn" href={`update-bookreport/${bookReport.id}`}>
                                                {" "}
                                                Update {" "}
                                            </a>
                                        </Col>

                                        <Col>
                                            <button onClick={() => context.handleDelete(bookReport.id)}>Delete</button>
                                        </Col>

                                    </Row>



                                </div>

                            ))}
                        </div>

                    </div>
                </Row>
                <Row><a href={`/Dashboard`} >Back</a> </Row>
            </Container>
            <Footer />
        </>
    );
};



export default AllBookReports;



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