import React from 'react'

const CreateBookReport = ({ handleSubmit, handleTitleChange, handleAuthorChange, handleReportChange }) => {

return(
<div>
    <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title">Title of Book</label>
        <br />
        <input name="title" onChange={handleTitleChange}></input>
        <br />

        <label htmlFor="author">Author of Book</label>
        <br />
        <input name="author" onChange={handleAuthorChange}></input>
        <br />

        <label htmlFor="report">Book Report</label>
        <br />
        <textarea
        rows="20"
        cols="50"
        name="report"
        onChange={handleReportChange}
        ></textarea>
        <br />
        <button className="btn" type="submit">
        Submit Book Report
        </button>
    

    </form>



    <h1>CreateBookReport Works!</h1>
</div>
)
}

export default CreateBookReport;