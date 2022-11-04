import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import back from '../../images/back2.png';


// import EmailContactForm from '../Email';




const OneBookReport = () => {

    const [bookReport, setBookReport] = useState({});
    const { id } = useParams();
    const context = useContext(BookReportContext);

    // const [firstName, getFirstName] = useState(""); 
    // const [userId, getUserId] = useState("");
    // const [email, getEmail] = useState("");
    // const navigate = useNavigate();
    // const [extractBookReport, getBookReportById] =  useState("");

    useEffect(() => {
        const getBookReport = () => {
            API.getBookReportById(id).then(res => {
                console.log(res)
                setBookReport(res.data)
                
            })
        }

        getBookReport();

    }, [bookReport, id])



    return (
        <>
            <NavBar />

            <Container style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(255,255,255)' }}>
                <Row style={{ margin:'10px', padding: '25px', textAlign: 'center', backgroundColor: 'rgba(255,182,0)' }}>
                    <h1>{bookReport.title}</h1>
                </Row>
                <Row>
                    <h3>Author: {bookReport.author}</h3>
                </Row>
                <Row style={{ padding: '25px'}}>
                    <h3>Book Report Written By: {bookReport.writtenBy}</h3>
                </Row>
                <Row style={{ padding: '25px'}}>
                    <p>{bookReport.report}</p>
                </Row>
                <Row style={{ padding: '25px'}}>

                    <Col>
                        <a href={`/update-bookreport/${bookReport.id}`} class="button">Update Book Report</a>
                    </Col>

                    <Col>
                        <button onClick={() => context.handleDelete(bookReport.id)} class="button">Delete Book Report</button>
                    </Col>
                </Row>

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


            </Container>
            <Footer />
        </>
    );
}

export default OneBookReport;