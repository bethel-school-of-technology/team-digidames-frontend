import React, { useEffect, useState } from 'react';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from 'react';
import Footer from "../Footer";
import NavBar from "../NavBar";
import back from '../../images/back2.png'
import update from '../../images/update.png'





const UpdateBookReport = ({ }) => {

    const [bookReport, setBookReport] = useState({});
    let { id } = useParams();
    const context = useContext(BookReportContext);
    const [value, setValue] =useState();


    
   
   

    useEffect(() => {
        const getBookReport = () => {
            API.getBookReportById(id).then(res => {
                console.log(res)
                setBookReport(res.data)
                
            })
        }

        getBookReport();

    }, [])


    console.log(id)

    return (
        <div style={{ backgroundColor: 'rgba(225,174,53)', fontFamily: 'Amaranth' }} >
            <NavBar />


            <form>
                <Container xs='12' sm='12' md='12' lg='12' xl='12' style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgb(46, 90, 151)', fontFamily: 'Amaranth' }}>
                    <Row xs='12' sm='12' md='12' lg='12' xl='12' style={{ padding: '15px' }}>
                        <h3>Update this Book Report</h3>
                    </Row>
                    <Row>
                        <Col xs='12' sm='12' md='12' lg='6' xl='6' >
                            

                            <Row style={{ padding: '15px' }}>

                                <h4>Book Title: {bookReport.title}</h4>
                                <h4>Book Author: {bookReport.author}</h4>
                                <h4>Written By: {bookReport.writtenBy}</h4>
                                
                            </Row>
                            


                            <Row>
                                <button
                                    className="btn"
                                    type="button"
                                    value="Submit"
                                    onClick={() => context.updateBookReport(id)}
                                >
                                    <img
                                        alt="Update Book Reports"
                                        src={update}
                                        width="40%"
                                        style={{ paddingTop: "40px", paddingBottom: "40px" }}
                                    ></img>
                                </button>
                            </Row>
                        </Col>

                        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                            <label htmlFor="report">Update Book Report</label>
                            <br />
                            <Col xs='12' sm='12' md='12' lg='12' xl='12' >
                            <textarea
                                autocomplete="on" autocorrect="on" autocapitalize="on" spellcheck="true"
                                className='report'
                                rows="30"
                                cols="50"
                                name="report"
                                onChange={context.handleReportChange}
                                defaultValue={bookReport.report}

                            ></textarea>
                            </Col>
                            
                            <br />
                        </Col>

                    </Row>


                    <Row>
                        <Col>
                            <a href={`/all-book-reports`} margin="15px">
                                <img
                                    alt="go back to View All Book Reports"
                                    src={back}
                                    width="200"
                                    style={{ paddingTop: "20px", paddingBottom: "40px" }}
                                ></img>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </form>


            <Footer />
        </div>
    );

}

export default UpdateBookReport;