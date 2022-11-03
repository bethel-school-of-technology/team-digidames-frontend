import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
//import BookReportContext from '../../UTILS/BookReportContext';
//import { useContext } from "react";
import axios from 'axios';
import Footer from '../Footer';
import NavBar from '../NavBar';


class APIBookData extends React.Component{
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

    createBook(bookInfo) {
        console.log(bookInfo)

        // if (email !== '' && password !== '') {
        //     const req = {
        //         email,
        //         password
        //     };

            axios.post('http://localhost:3000/books', bookInfo).then(result => {
                // const token = result.data.accessToken;
                // localStorage.setItem('myJWT', token);
                // localStorage.setItem('userId', result.user.id);
                // localStorage.setItem('email', result.user.email);
                console.log(result.data);
                // redirect to book report form

            })
        //}
    
    };



    render() {
        const { books } = this.state;
        return (
            <>
            <NavBar />
            <Container>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(119,148,73)', fontFamily: 'Amaranth' }}>
                <h1>What book would you like to write about?</h1>
                </Row>
                <Row style={{ padding: '25px', textAlign: 'center', backgroundColor: 'rgba(0,0,0)', color: 'white', fontFamily: 'Amaranth', fontSize: '24px' }}>
                <table classname="table table-bordered">
                    <tr style={{ textAlign: 'center', backgroundColor: 'rgba(119,148,73)', color: 'white', fontFamily: 'Amaranth' }}>
                        <th>Book ID</th>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Book Cover</th>

                    </tr>
                    {books && books.map((book) => (
                        <tr>
                            <td>{book.id}</td>
                            <td>{book.volumeInfo.title}</td>
                            <td>{book.volumeInfo.authors}</td>
                            <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>
                            <td><button type='button' onClick={() => this.createBook(book)}>Write report</button></td>

                        </tr>
                    ))}
                </table>
                </Row>
                </Container>
                <Footer />
            </>
        )
    }

}

export default APIBookData;