import React, { useEffect, useState } from 'react';
import API from '../../UTILS/API';
import { useParams } from 'react-router-dom';



const OneBookReport = () => {

    const [ bookReport, setBookReport ] = useState({});
    const { id } = useParams();


    useEffect (() => {
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

        </div>
    )
}

export default OneBookReport;