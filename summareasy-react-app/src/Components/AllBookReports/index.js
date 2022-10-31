import React from 'react';
// import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import SignOut from '../LogOut/Logout';


const AllBookReports = ({ bookReportData }) => {

  const context = useContext(BookReportContext);
    return (
        <div className="container header">
            {/* <CreateBookReport /> */}
            <div className='header'>
            <button onClick={SignOut}>Sign Out</button>
            </div>
            <div>
                <h1>View Book Reports</h1>
                {bookReportData.map((bookReport) => (
                    <div key={bookReport.id} className="one-bookReport">
                        <h3>{bookReport.title}</h3>

                        <a className="btn" href={`one-bookreport/${bookReport.id}`}>
                            {" "}
                            View {" "}
                        </a>

                        <a className="btn" href={`update-bookreport/${bookReport.id}`}>
                            {" "}
                            Update {" "}
                        </a>
                        

                        <button onClick={() => context.handleDelete(bookReport.id)}>Delete</button>
                        <a href={`/Dashboard`} >Back</a>

                    </div>
                ))}
            </div>
        </div>
    );
};



export default AllBookReports;