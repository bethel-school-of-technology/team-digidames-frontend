import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';

import back from '../../images/back2.png';



class APIBookData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            searchQuery: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    searchQuery = '';
    componentDidMount() {

    }

    goToReport(bookInfo) {
        console.log(bookInfo);
        localStorage.setItem('myBookTitle', bookInfo.volumeInfo.title);
        localStorage.setItem('myBookAuthor', bookInfo.volumeInfo.authors);
        localStorage.setItem('myBookCover', bookInfo.volumeInfo.imageLinks.thumbnail);
        localStorage.setItem('myBook', JSON.stringify(bookInfo));
        localStorage.setItem('myBookId', bookInfo.id);

        window.location = '/Create';

    }


    handleSubmit(e) {
        console.log(this.state.searchQuery);
        e.preventDefault();
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
            .then(response => {
                const books = response.data.items;
                console.log(books)
                this.setState({ books });
            });
    }
 

    handleSearchChange(event) {

        this.setState({ searchQuery: event.target.value })
        console.log(this.state);

    }

    render() {
        const { books } = this.state;
        let searching = false;
        return (
            <div style={{ backgroundColor: 'rgba(144,186,249)' }}>
                <NavBar />
                <Container>
                    <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(144,186,249)', fontFamily: 'Amaranth' }}>
                        <h1>Hi {localStorage.getItem("firstName")}! What book would you like to write about?</h1>
                    </Row>


                    <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(52,52,52)', color: 'white', fontFamily: 'Amaranth', fontSize: '24px' }}>

                        <h2>Search for Book</h2>
                        <form onSubmit={this.handleSubmit} className="form">

                            <input name="search" onChange={this.handleSearchChange}></input>

                           
                           <Button  variant='secondary' className="button" type="submit" style={{ padding: "7px", margin: "5px" }} >
                                Search
                            </Button>
                           

                        </form>

                        {
                            this.state.books.length > 0
                                ?
                                <table classname="table table-bordered">
                                    <tr style={{ textAlign: 'center', backgroundColor: 'rgba(119,148,73)', color: 'white', fontFamily: 'Amaranth' }}>

                                        <th>Book Title</th>
                                        <th>Author</th>
                                        <th>Book Cover</th>
                                        <th></th>

                                    </tr>
                                    {books && books.map((book) => (
                                        <tr>
                                            {/* <td>{book.id}</td> */}
                                            <td>{book.volumeInfo.title}</td>
                                            <td>{book.volumeInfo.authors}</td>


                                            <td><img src={book.volumeInfo.imageLinks.thumbnail} /></td>
                                            <td><Button variant='success' type='button' onClick={() => this.goToReport(book)}>Write report</Button></td>


                                        </tr>
                                    ))}
                                </table> : <></>
                        }


                    </Row>
                    <Row>
                        <Col>
                            <a href={`/Dashboard`} margin="15px">
                                <img
                                    alt="go back to View All Book Reports"
                                    src={back}
                                    width="200"
                                    style={{ paddingTop: "20px", paddingBottom: "40px" }}
                                ></img>
                            </a>

                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>
        )
    }

}

export default APIBookData;