import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../UTILS/API';
import NavBar from '../NavBar';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from '../Footer';
import back from '../../images/back2.png';


 
const EmailContactForm = () => {
    const [bookReport, setBookReport] = useState({});    
    const form = useRef();
    const { id } = useParams();
    const navigate = useNavigate();

const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
    console.log(form.current.author.value);
   emailjs.sendForm('service_yzd6ykk', 'template_q2ux90h', form.current, 'w2acWniWNw96Kt5do')
     .then((result) => {
         // show the user a success message
         navigate('/emailedconfirm');
     }, (error) => {
         // show the user an error
         console.log("denied")
     });
 };
 useEffect(() => {
    const getBookReport = () => {
        API.getBookReportById(id).then(res => {
            console.log(res)
            setBookReport(res.data)
        })
    }
    getBookReport();
 }, []); //bookReport, id

 
 
 return (
   <>
    <NavBar />
    <Container >
    
   <Row>
   <Col style={{ display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',}}>
   <form ref={form} style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(39,208,241)', fontFamily: 'Amaranth' }} onSubmit={sendEmail}>
     
    
     <label htmlFor= "EmailPreview"></label>
     <h1 style={{color: 'Purple'}}>Email Preview</h1>
    <Row style={{ padding: '15px', width: '250px', textAlign:'center', display:'flex',justifyContent:'center', alignItems:'center' }}>
    <label htmlFor= "title"></label>
    <h5>Title:</h5>
     <input   name="title" defaultValue={bookReport.title} autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" />
     <br></br>
     <label htmlFor= "author"></label>
     <h5>Author:</h5>
     <input defaultValue={bookReport.author} name="author" autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" />
     <br></br>
     <label htmlFor="writtenBy"></label>
     <h5> Written By</h5>
     <input defaultValue={bookReport.writtenBy} name="to_name" autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true" />
     <br></br>
     </Row>
   
     <Row>
        <Col xs='12' sm='12' md='12' lg='6' xl='6'>
        <textarea 
            autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true"
            rows="20"
            cols="50"
            defaultValue={bookReport.report} name="message" 
            read-only='false'
                  />
        </Col>
        
     </Row>
     
     <br></br>
     
     <Button variant='success' href={`/emailedconfirm`} className="button" onClick={sendEmail } alt='email'>Email
     </Button>
     <br></br>
     <a href={`/one-bookreport/${bookReport.id}`} margin="15px">
        <img
            alt="go back to View All Book Reports"
            src={back}
            width="200"
            style={{ paddingTop: "20px", paddingBottom: "40px" }}
        ></img>
    </a>
   </form>
   </Col>
   </Row>
   </Container>
   <Footer/>
   </>
 );
};
 
export default EmailContactForm;