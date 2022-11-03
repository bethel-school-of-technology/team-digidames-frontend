import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../../UTILS/API';

 
const EmailContactForm = () => {
    const [bookReport, setBookReport] = useState({});    
    const form = useRef();
    const { id } = useParams();

const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
   emailjs.sendForm('service_yzd6ykk', 'template_q2ux90h', form.current, 'w2acWniWNw96Kt5do')
     .then((result) => {
         // show the user a success message
         console.log("Success");
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
 }, [bookReport, id])
 return (
    
   <form ref={form} onSubmit={sendEmail}>
    
     <label>Email Preview</label>
    
     <div className='emailTemp'>
     <input value ={`${bookReport.title }`} name="title" />
     <br></br>
     <input value ={`${bookReport.author}`} name="author" />
     <br></br>
     <input value ={`${bookReport.writtenBy}`} name="to_name" />
     <br></br>
     <textarea value ={`${bookReport.report}`} name="message" />
     
     </div>
     <br></br>
     <input type="submit" value="Send" />
   </form>
 );
};
 
export default EmailContactForm;