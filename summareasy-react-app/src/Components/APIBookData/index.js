import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
//import BookReportContext from '../../UTILS/BookReportContext';
//import { useContext } from "react";
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';


class APIBookData extends React.Component{
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
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=hobbit`)
        // .then(response => {
        //     const books = response.data.items;
        //     console.log(books)
        //     this.setState({ books });
        // });
    }

    createBook(bookInfo) {
        console.log(bookInfo)

        // if (email !== '' && password !== '') {
        //     const req = {
        //         email,
        //         password
        //     };

            axios.post('http://localhost:3000/books', bookInfo).then(result => {
                
                 localStorage.setItem('myBookTitle', result.data.volumeInfo.title);
                 localStorage.setItem('myBookAuthor', result.data.volumeInfo.authors);
                 localStorage.setItem('myBookCover', result.data.volumeInfo.imageLinks.thumbnail);
                
                console.log(result.data);
                // redirect to book report form

            })
        //}
    
    };

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

    handleSearchChange (event) {

        this.setState({ searchQuery: event.target.value})
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
                <h1>What book would you like to write about?</h1>
                </Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(52,52,52)', color: 'white', fontFamily: 'Amaranth', fontSize: '24px' }}>

                <h2>Search for Book</h2>
        <form onSubmit={this.handleSubmit} className="form">
                        
                        <input name="search" onChange={this.handleSearchChange}></input>
                       
                        <button class="button" type="submit" style={{padding: "7px", margin: "5px"}} >
                            Search
                        </button>
                    
                    </form>

                {
                    this.state.books.length > 0
                    ? 
                    <table classname="table table-bordered">
                    <tr style={{ textAlign: 'center', backgroundColor: 'rgba(119,148,73)', color: 'white', fontFamily: 'Amaranth' }}>
                        {/* <th>Book ID</th> */}
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
                            <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>
                            <td><button type='button' onClick={() => this.createBook(book)}>Write report</button></td>

                        </tr>
                    ))}
                </table> : <></>
                }

                
                </Row>
                </Container>
                <Footer />
            </div>
        )
    }

}



export default APIBookData;