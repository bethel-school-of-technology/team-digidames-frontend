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
            <div style={{ backgroundColor: 'rgb(39, 208, 241)' }}>
                <NavBar />
                <Container xs='2' sm='6' md='8' lg='12' xl='12'>
                    <Row  style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgb(39, 208, 241)', fontFamily: 'Amaranth' }}>
                        <h1>Hi, {localStorage.getItem("firstName")}! What book would you like to write about?</h1>
                    </Row>


                    <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(52,52,52)', color: 'white', fontFamily: 'Amaranth', fontSize: '24px' }}>

                        <h2>Search for Book</h2>
                        <form  onSubmit={this.handleSubmit} className="form">

                            <input xs='2' sm='2' md='12' lg='6' xl='6' name="search" onChange={this.handleSearchChange} autoComplete="on" autoCorrect="on" autoCapitalize="on" spellCheck="true"></input>

                           
                           <Button xs='2' sm='2' md='12' lg='6' xl='6' variant='secondary' className="button" type="submit" style={{ padding: "7px", margin: "5px" }} >
                                Search
                            </Button>
                           

                        </form>

                        {
                            this.state.books.length > 0
                                ?
                                <table xs='2' sm='2' md='4' lg='12' xl='12' className="table table-bordered">
                                    <tr  >

                                        <th>Book Title</th>
                                        <th>Author</th>
                                        <th>Book Cover</th>
                                        <th></th>

                                    </tr>
                                    {books && books.map((book) => (
                                        <tr  xs='2' sm='2' md='4' lg='12' xl='12' key={book.id} className="table-data">
                                            {/* <td>{book.id}</td> */}
                                            <td>{book.volumeInfo.title}</td>
                                            <td>{book.volumeInfo.authors}</td>


                                            <td className='cover'><img src={book.volumeInfo.imageLinks.thumbnail} alt='Book Cover' /></td>
                                            <Button  xs='2' sm='2' md='4' lg='4' xl='4'  type='button' onClick={() => this.goToReport(book)}><td>Write report</td></Button>


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