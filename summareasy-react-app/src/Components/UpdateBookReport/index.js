import React from "react";
import { useParams } from 'react-router-dom'

const UpdateBookReport = ({ handleTitleChange, handleAuthorChange, handleReportChange, updateBookReport }) => {

    let { id } = useParams();

    console.log(id)

    return (
        <div>
            <form>
                <h3>Update this Book Report</h3>
                <label htmlFor="title">Update Title</label>
                <br />
                <input name="title" onChange={handleTitleChange}></input>
                <br />

                <label htmlFor="author">Update Author</label>
                <br />
                <input name="author" onChange={handleAuthorChange}></input>
                <br />

                <label htmlFor="report">Update Book Report</label>
                <br />
                <textarea
                    rows="20"
                    cols="50"
                    name="report"
                    onChange={handleReportChange}
                ></textarea>
                <br />
                <button
                    className="btn"
                    type="button"
                    value="Submit"
                    onClick={() => updateBookReport(id)}
                >
                    Update Book Report
                </button>


            </form>

        </div>
    );

}

export default UpdateBookReport;