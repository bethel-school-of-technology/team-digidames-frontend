import React from "react";
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from 'react';
import Footer from "../Footer";
import NavBar from "../NavBar";
import back from '../../images/back2.png'
import update from '../../images/update.png'




const UpdateBookReport = ({ }) => {

    let { id } = useParams();
    const context = useContext(BookReportContext);
   
   

    console.log(id)

    return (
        <>
            <NavBar />


            <form>
                <Container style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(119,148,73)', fontFamily: 'Amaranth' }}>
                    <Row style={{ padding: '15px'}}>
                        <h3>Update this Book Report</h3>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label htmlFor="title" >Update Title:  </label>
                                <input name="title" placeholder="New Title"  onChange={context.handleTitleChange}></input>
                                <br />
                            </Row>
                            <Row>
                                <label htmlFor="author">Update Author:  </label>
                                <input name="author" placeholder="New Author"  onChange={context.handleAuthorChange}></input>
                                <br />
                            </Row>
                            <Row>
                                <label htmlFor="writtenBy">Update Written By:  </label>
                                <input name="writtenBy" placeholder="Your name"  onChange={context.handleWrittenByChange}></input>
                                <br />
                            </Row>
                            
                        </Col>
                        <Col>
                            <label htmlFor="report">Update Book Report</label>
                            <br />
                            <textarea
                                rows="20"
                                cols="70"
                                name="report"
                                onChange={context.handleReportChange}
                            ></textarea>
                            <br />
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
                                        width="300"
                                        style={{ paddingTop: "20px", paddingBottom: "40px" }}
                                    ></img>
                                </button>
                            </Row>
                        </Col>
                    </Row>



                    {/* <button
                            className="btn"
                            type="button"
                            value="Submit"
                            onClick={() => context.updateBookReport(id)}
                            >
                            Update
                                <img
                                    alt="Update Book Reports"
                                    src={update}
                                    width="200"
                                    style={{ paddingTop: "20px", paddingBottom: "40px" }}
                                ></img>
                        </button> */}

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
        </>
    );

}

export default UpdateBookReport;