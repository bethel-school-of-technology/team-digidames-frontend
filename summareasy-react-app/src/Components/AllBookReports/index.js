import React from 'react';
import CreateBookReport from '../CreateBookReport';


const AllBookReports = ({ bookReportData, handleSubmit, handleTitleChange, handleAuthorChange, handleReportChange }) => {


return(
<div>
    <CreateBookReport handleSubmit={handleSubmit} handleTitleChange={handleTitleChange} handleAuthorChange={handleAuthorChange} handleReportChange={handleReportChange}  />
    {bookReportData.map(bookReport => (
        <div key={bookReport.id}>
            <h3>{bookReport.title}</h3>
        </div>
    ) )}
  
    <h1>AllBookReports Works!</h1>

</div>
)
}



export default AllBookReports;