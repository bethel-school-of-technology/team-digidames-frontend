import React from "react";
import { useParams } from 'react-router-dom'
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";

const UpdateBookReport = () => {

    let { id } = useParams();
    const context = useContext(BookReportContext);

    console.log(id)

    return (
        <div>
            <form>
                <h3>Update this Book Report</h3>
                <label htmlFor="title">Update Title</label>
                <br />
                <input name="title" onChange={context.handleTitleChange}></input>
                <br />

                <label htmlFor="author">Update Author</label>
                <br />
                <input name="author" onChange={context.handleAuthorChange}></input>
                <br />

                <label htmlFor="report">Update Book Report</label>
                <br />
                <textarea
                    rows="20"
                    cols="50"
                    name="report"
                    onChange={context.handleReportChange}
                ></textarea>
                <br />
                <button
                    className="btn"
                    type="button"
                    value="Submit"
                    onClick={() => context.updateBookReport(id)}
                >
                    Update Book Report
                </button>


            </form>

        </div>
    );

}

export default UpdateBookReport;