import axios from 'axios';

const baseURL = "http://localhost:3000/BookReports"


const API = {

    getAll: () => {
        return axios.get(baseURL + "?userId=" + localStorage.getItem('userId'));
    },

    createBookReport: (newBookReport) => {
        // load book from local storage
        const myBook = JSON.parse(localStorage.getItem('myBook'));

  
        return axios.post(baseURL, {
            title: myBook.volumeInfo.title,
            author: myBook.volumeInfo.authors,
            cover: localStorage.getItem("myBookCover"), 
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

        const myBook = JSON.parse(localStorage.getItem('myBook'));

        return axios.put(`${baseURL}/${id}`, {
            
            title: myBook.volumeInfo.title,
            author: myBook.volumeInfo.authors,
            cover: localStorage.getItem("myBookCover"), 
            writtenBy: localStorage.getItem('firstName'),
            userId: localStorage.getItem('userId'),
            bookId: myBook.id,
            report: updatedBookReport.report,
            
            
            
            
            });
    },

    deleteBookReport: (id) => {
        return axios.delete(`${baseURL}/${id}`);

    }
   

}

export default API;