import React, { useEffect, useState } from 'react';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';



const OneBookReport = ({ handleDelete }) => {

    const [bookReport, setBookReport] = useState({});
    const { id } = useParams();


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
            <button onClick={() => handleDelete(bookReport.id)}>Delete Book Report</button>
            <a href={`/update-bookreport/${bookReport.id}`}>Update Book Report</a>
        </div>
    );
}

export default OneBookReport;