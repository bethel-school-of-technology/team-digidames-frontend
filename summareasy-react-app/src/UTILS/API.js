import axios from 'axios';

const baseURL = "http://localhost:3000/BookReports"

const API = {

    getAll: () => {
        return axios.get(baseURL);
    },

    createBookReport: (newBookReport) => {
        return axios.post(baseURL, newBookReport);
    },

    getBookReportById: (id) => {
        return axios.get(`${baseURL}/${id}`);
    }
    

}

export default API;