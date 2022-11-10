import axios from 'axios';

const baseURL = "http://localhost:3000/BookReports"


const API = {

    getAll: () => {
        return axios.get(baseURL);
    },

    createBookReport: (newBookReport) => {
        // load book from local storage
        const myBook = JSON.parse(localStorage.getItem('myBook'));

        // TODO check if the book exist in database

        // TODO if not, create the book

        // create the book report
        return axios.post(baseURL, {
            title: myBook.volumeInfo.title,
            author: myBook.volumeInfo.authors,
            cover: localStorage.getItem("myBookCover"), //TODO- do we need to handle this differently since it is an image
            writtenBy: localStorage.getItem('firstName'),
            userId: localStorage.getItem('userId'),
            bookId: myBook.id,
            report: newBookReport.report,
        });
    },

    getBookReportById: (id) => {
        return axios.get(`${baseURL}/${id}`);
    },

    updateBookReport: (id, updatedBookReport) => {
        return axios.put(`${baseURL}/${id}`, updatedBookReport);
    },

    deleteBookReport: (id) => {
        return axios.delete(`${baseURL}/${id}`);

    }
   

}

export default API;