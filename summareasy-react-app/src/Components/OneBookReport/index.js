import React, { useEffect, useState } from 'react';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";



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
        <div>
            <div className='header'>
                <div className='signout'>
                    
                </div>
            </div>
            <a href={`/printReport`} alt="">Print</a>
            <h5>View One Book Report Page</h5>
            <h1>{bookReport.title}</h1>
            <h3>Author: {bookReport.author}</h3>
            <h3>Book Report Written By: {bookReport.writtenBy}</h3>
            <p>{bookReport.report}</p>
            <button onClick={() => context.handleDelete(bookReport.id)}>Delete Book Report</button>
            <a href={`/update-bookreport/${bookReport.id}`}>Update Book Report</a>
            <a href={`/all-book-reports`}>Back</a><br></br>
            <a href={`/email/`}>Email</a>
        </div>
    );
}

export default OneBookReport;