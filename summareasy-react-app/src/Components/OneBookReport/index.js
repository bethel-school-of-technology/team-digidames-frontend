import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button  } from 'react-bootstrap';

import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';
import NavBar from '../NavBar';
import back from '../../images/back2.png';



const OneBookReport = () => {

    const [bookReport, setBookReport] = useState({});
    const { id } = useParams();
    const context = useContext(BookReportContext);
   

 

    useEffect(() => {
        const getBookReport = () => {
            API.getBookReportById(id).then(res => {
                console.log(res)
                setBookReport(res.data)
                
            })
        }

        getBookReport();

    }, [id])


    return (
        <>
            <NavBar />

            <Container  style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(255,255,255)' }}>
                <Row style={{ margin:'10px', padding: '25px',width:'auto', textAlign: 'center', backgroundColor: 'rgb(253, 162, 22)' }}>
                    <h1>{bookReport.title}</h1>
                </Row>
                <Row>
                    <h3>Author: {bookReport.author}</h3>
                </Row>
                <Row style={{ padding: '25px'}}>
                    <h3>Book Report Written By: {bookReport.writtenBy}</h3>
                </Row>
               
                {/* cover */}
               <Col xs='12' sm='12' md='12' lg='12' xl='12' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
               <Row className="cover" xs='12' sm='12' md='12' lg='12' xl='12' >
                    <p><img src={bookReport.cover} alt='Book Cover'></img></p>
                </Row>
               </Col>
                {/* book report */}
            <Row className='report'  >
                    <p >{bookReport.report}</p>
                </Row>
                <Row style={{ padding: '25px'}} className= 'pageNav'>
                    <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                    
                      <Button variant="success" href={`/update-bookreport/${bookReport.id}`} className="button">Update</Button>
                   
                    </Col>
                    

                     
                    <Col xs='12' sm='12' md='12' lg='6' xl='6'>
                    
                        <Button variant="danger"  className="button">Delete</Button>
                   
                    </Col>
                    
                    <Col xs='12' sm='12' md='12' lg='12' xl='12'>
                        
                            <Button variant="primary" href={`/email/${bookReport.id}`}  className="button">Email</Button>
                        
                    </Col>
                </Row>
           

                <Col className="back">
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