import React from 'react'
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
                <h4>Axios GET Request Example in React</h4>
                <table classname="table table-bordered">
                    <tr>
                        <th>Book Title</th>
                        <th>Author</th>
                        <th>Book Cover</th>

                    </tr>
                    {books && books.map((book) => (
                        <tr>
                            <td>{book.volumeInfo.title}</td>
                            <td>{book.volumeInfo.authors}</td>
                            <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>
                            <td><button type='button' onClick={() => this.createBook(book)}>Write report</button></td>

                        </tr>
                    ))}
                </table>
                <Footer />
            </>
        )
    }

}

export default APIBookData;