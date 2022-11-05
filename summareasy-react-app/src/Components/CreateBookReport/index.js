import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BookReportContext from '../../UTILS/BookReportContext';
import { useContext } from "react";
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';
import dinosaur from '../../images/dinosaur.png';
import back from '../../images/back2.png';

const CreateBookReport = () => {

    const context = useContext(BookReportContext);

    return (
        <>
            <NavBar />

            <Container style={{ padding: '15px', textAlign: 'center', backgroundColor: 'rgba(39,208,241)', fontFamily: 'Amaranth' }}>
                <Row style={{ padding: '15px'}}>
                    <h1> What was the book about?</h1>
                </Row>

                <Row>
                    <Col>
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
                            <button class="button" type="submit">
                                Add Book Report
                            </button>
                        
                        </form>
                    </Col>
                    <Col>
                        <img
                            alt=""
                            src={dinosaur}
                            width="550"
                            style={{ paddingTop: "160px" }}
                        ></img>
                    </Col>
                </Row>
                <Row><a href={`/Dashboard`} margin="15px">
                    <img
                        alt="go back to Dashboard"
                        src={back}
                        width="200"
                        style={{ paddingTop: "20px", paddingBottom: "40px" }}
                    ></img>
                    </a>
                </Row>
            </Container>

            <Footer />

        </>
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
export default CreateBookReport ;