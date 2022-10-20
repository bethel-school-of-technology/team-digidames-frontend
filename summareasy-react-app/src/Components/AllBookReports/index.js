import React from 'react'

const AllBookReports = ({ bookReportData }) => {

console.log(bookReportData)

return(
<div>
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