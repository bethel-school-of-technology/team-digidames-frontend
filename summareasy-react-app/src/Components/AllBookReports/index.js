import React from 'react';
import CreateBookReport from '../CreateBookReport';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from 'react';



const AllBookReports = ({ bookReportData }) => {
    const context = useContext(BookReportContext);
    return (
        <div className="container header">
            <CreateBookReport />
            <div>
                {bookReportData.map((bookReport) => (
                    <div key={bookReport.id} className="one-bookReport">
                        <h3>{bookReport.title}</h3>

                        <a className="btn" href={`one-bookreport/${bookReport.id}`}>
                            {" "}
                            View Book Report{" "}
                        </a>

                        <a className="btn" href={`update-bookreport/${bookReport.id}`}>
                            {" "}
                            Update Book Report{" "}
                        </a>

                        <button onClick={() => context.handleDelete(bookReport.id)}>Delete Book Report</button>

                    </div>
                ))}
            </div>
        </div>
    );
};



export default AllBookReports;