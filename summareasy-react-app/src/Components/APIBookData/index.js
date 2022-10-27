import React from 'react'
//import BookReportContext from '../../UTILS/BookReportContext';
//import { useContext } from "react";
import axios from 'axios';

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

                    </tr>
                    {books && books.map((book) => (
                        <tr>
                            <td>{book.volumeInfo.title}</td>
                            <td>{book.volumeInfo.authors}</td>
                            <td><img src={book.volumeInfo.imageLinks.thumbnail}/></td>

                        </tr>
                    ))}
                </table>
            </>
        )
    }

}

export default APIBookData;