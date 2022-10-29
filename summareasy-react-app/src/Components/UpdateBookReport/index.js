import React from "react";
import { useParams } from 'react-router-dom'
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from 'react';
import Footer from "../Footer";


const UpdateBookReport = ({ }) => {

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

                <label htmlFor="writtenBy">Update Written By</label>
                <br />
                <input name="writtenBy" onChange={context.handleWrittenByChange}></input>

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
                    Update
                </button>
                <a href={`/all-book-reports`}>Back</a>


            </form>
            <Footer />
        </div>
    );

}

export default UpdateBookReport;