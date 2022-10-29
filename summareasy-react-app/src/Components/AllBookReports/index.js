import React from 'react';
// import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import Footer from '../Footer';


const AllBookReports = ({ bookReportData }) => {

  const context = useContext(BookReportContext);
    return (
        <div className="container header">
            {/* <CreateBookReport /> */}
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
            <Footer />
        </div>
    );
};



export default AllBookReports;