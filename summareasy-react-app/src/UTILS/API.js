import axios from 'axios'
import axious from 'axios'

const baseURL = "http://localhost:3000/BookReports"

const API = {

    getAll: () => {
        return axios.get(baseURL);
    },

    createBookReport: (newBookReport) => {
        return axios.post(baseURL, newBookReport);
    }
    

}

export default API;