import React, { useEffect, useState } from 'react';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";


const OneBookReport = () => {

    const [bookReport, setBookReport] = useState({});
    const { id } = useParams();
    const context = useContext(BookReportContext);


    useEffect(() => {
        const getBookReport = () => {
            API.getBookReportById(id).then(res => {
                console.log(res)
                setBookReport(res.data)
                console.log(bookReport)
            })
        }

        getBookReport();

    }, [])



    return (
        <div>
            <h5>View One Book Report Page</h5>
            <h1>{bookReport.title}</h1>
            <h3>Author: {bookReport.author}</h3>
            <h3>Book Report Written By: {bookReport.writtenBy}</h3>
            <p>{bookReport.report}</p>
            <button onClick={() => context.handleDelete(bookReport.id)}>Delete </button>
            <a href={`/update-bookreport/${bookReport.id}`}>Update </a>
            {/* <a href={`/`}>Back</a> */}
        </div>
    );
}

export default OneBookReport;