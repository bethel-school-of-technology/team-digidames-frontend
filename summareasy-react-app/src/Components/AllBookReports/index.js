import React from 'react';
import CreateBookReport from '../CreateBookReport';


const AllBookReports = ({
    bookReportData,
    handleSubmit,
    handleTitleChange,
    handleAuthorChange,
    handleReportChange
}) => {

    return (
        <div className="container header">
            <CreateBookReport
                handleSubmit={handleSubmit}
                handleTitleChange={handleTitleChange}
                handleAuthorChange={handleAuthorChange}
                handleReportChange={handleReportChange}
            />
            <div>
                {bookReportData.map(bookReport => (
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

                    </div>
                ))}
            </div>
        </div>
    );
};



export default AllBookReports;