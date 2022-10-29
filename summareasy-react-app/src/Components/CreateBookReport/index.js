import React from 'react'
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import axios from 'axios';
import Footer from '../Footer';

const CreateBookReport = () => {

    const context = useContext(BookReportContext);

    return (
        <div>
            <div className='header'>
                
            </div>

            <form onSubmit={context.handleSubmit} className="form">
                <label htmlFor="title">Title of Book</label>
                <br />
                <input name="title" onChange={context.handleTitleChange}></input>
                <br />

                <label htmlFor="author">Author of Book</label>
                <br />
                <input name="author" onChange={context.handleAuthorChange}></input>
                <br />

                <label htmlFor="writtenBy">Written By</label>
                <br />
                <input name="writtenBy" onChange={context.handleWrittenByChange}></input>
                <br />

                <label htmlFor="report">Book Report</label>
                <br />
                <textarea
                    rows="20"
                    cols="50"
                    name="report"
                    onChange={context.handleReportChange}
                ></textarea>
                <br />
                <button className="btn" type="submit">
                    Add Book Report
                </button>
                
                <a href={`/Dashboard`}>Cancel</a>


            </form>



            <Footer />
        </div>
    )
}

// class CreateBookReport extends React.Component{
//     state = {
//         books: []
//     }
//     componentDidMount() {
//         axios.get(`https://www.googleapis.com/books/v1/volumes?q=hobbit`)
//         .then(response => {
//             const books = response.data.items;
//             console.log(books)
//             this.setState({ books });
//         });
//     }

//     render() {
//         const { books } = this.state;
//         return (
//             <>
//                 <h4>Axios GET Request Example in React</h4>
//                 <table classname="table table-bordered">
//                     <tr>
//                         <th>Book Title</th>
//                         <th>Author</th>
//                         <th>Book Cover</th>

//                     </tr>
//                     {books && books.map((book) => (
//                         <tr>
//                             <td>{book.volumeInfo.title}</td>
//                             <td>{book.volumeInfo.authors}</td>
//                             <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>

//                         </tr>
//                     ))}
//                 </table>
//             </>
//         )
//     }

// }
export default CreateBookReport;