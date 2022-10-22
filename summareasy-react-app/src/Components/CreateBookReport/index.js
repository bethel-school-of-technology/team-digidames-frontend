import React from 'react'
import axios from 'axios';

// const CreateBookReport = ( { handleSubmit, handleTitleChange, handleAuthorChange, handleReportChange }) => {

// return(
// <div>
    
//     <form onSubmit={handleSubmit} className="form">
//         <label htmlFor="title">Title of Book</label>
//         <br />
//         <input name="title" onChange={handleTitleChange}></input>
//         <br />

//         <label htmlFor="author">Author of Book</label>
//         <br />
//         <input name="author" onChange={handleAuthorChange}></input>
//         <br />

//         <label htmlFor="report">Book Report</label>
//         <br />
//         <textarea
//         rows="20"
//         cols="50"
//         name="report"
//         onChange={handleReportChange}
//         ></textarea>
//         <br />
//         <button className="btn" type="submit">
//         Submit Book Report
//         </button>
    

//     </form>



//     <h1>CreateBookReport Works!</h1>
// </div>
// )
// }

class CreateBookReport extends React.Component{
    state = {
        books: []
    }
    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=hobbit`)
        .then(response => {
            const books = response.data.items;
            console.log(books)
            this.setState({ books });
        });
    }

    render() {
        const { books } = this.state;
        return (
            <>
                <h4>Axios GET Request Example in React</h4>
                <table classname="table table-bordered">
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Book Cover</th>
                        <th>Age</th>
                    </tr>
                    {books && books.map((book) => (
                        <tr>
                            <td>{book.volumeInfo.title}</td>
                            <td>{book.volumeInfo.authors}</td>
                            <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>
                            {/* <td>{emp.employee_salary}</td>
                            <td>{emp.employee_age}</td> */}
                        </tr>
                    ))}
                </table>
            </>
        )
    }

}
export default CreateBookReport;