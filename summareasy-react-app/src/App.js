import React, { useEffect, useState } from 'react';
import './App.css';
import AllBookReports from './Components/AllBookReports';
import API from './UTILS/API';
import OneBookReport from './Components/OneBookReport';
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateBookReport from "./Components/UpdateBookReport";
import BookReportContext from './UTILS/BookReportContext';
import LandingPage from './Components/LandingPage';
import CreateBookReport from './Components/CreateBookReport';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIBookData from './Components/APIBookData';
import SignUp from './Components/SignUp';
import LoggedOut from './Components/LoggedOut';
import AboutUs from './Components/AboutUs';



function App() {
  const [allBookReports, setAllBookReports] = useState([]);
  const [newBookReport, setNewBookReport] = useState({
    title: "",
    author: "",
    writtenBy:"",
    report: ""
  });

  const [refresh, setRefresh] = useState({ count: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    getAllBookReports();
  }, []);

  const getAllBookReports = () => {
    API.getAll().then(res => {
      setAllBookReports(res.data)
    });
  };
  
  useEffect(() => {
    getAllBookReports();
  }, [refresh]);


  const contextObject = {
    handleSubmit: (e) => {
      e.preventDefault();
      API.createBookReport(newBookReport).then((res) => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        document.querySelector(".forms").reset();
      });
    },

    handleTitleChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, title: value });
    },

    handleAuthorChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, author: value });
    },

    handleWrittenByChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, writtenBy: value });
    },

    handleReportChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, report: value });
    },

    updateBookReport: (id) => {
      API.updateBookReport(id, newBookReport).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/all-book-reports") //this navigates (useNavigat) to homepage ("/") after updating Book Report
      });
    },

    handleDelete: (id) => {
      API.deleteBookReport(id).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/all-book-reports") //this navigates (useNavigat) to homepage ("/") after deleting Book Report      
      });
    }


  }

  return (
    <div className="App">
      <BookReportContext.Provider value={contextObject}>
        <Routes>
        <Route
            path="/"
            exact
            element={
              <LandingPage
                bookReportData={allBookReports} />
            }
          />

          <Route
            path="/about"
            exact
            element={
              <AboutUs
                bookReportData={allBookReports} />
            }
          />

        <Route
            path="/login"
            exact
            element={
              <Login
                bookReportData={allBookReports} />
            }
          />

        <Route
            path="/loggedout"
            exact
            element={
              <LoggedOut
                bookReportData={allBookReports} />
            }
          /> 

          <Route
            path="/register"
            exact
            element={
              <SignUp
                bookReportData={allBookReports} />
            }
          /> 
 
          <Route
            path="/Dashboard"
            exact
            element={
              <Dashboard
                bookReportData={allBookReports} />
            }
          />
          <Route
            path="/ApiBookData"
            exact
            element={
              <APIBookData
                bookReportData={allBookReports} />
            }
          />

          <Route
            path="/Create/:bookId"
            exact
            element={
              <CreateBookReport
                bookReportData={allBookReports} />
            }
          />
          <Route
            path="/all-book-reports"
            exact
            element={
              <AllBookReports
                bookReportData={allBookReports} />
            }
          />

          <Route
            path="/one-bookreport/:id"
            element={
              <OneBookReport />
            }
          />

          <Route
            path="/update-bookreport/:id"
            element={
              <UpdateBookReport />
            }
          />

        </Routes>
      </BookReportContext.Provider>
    </div>
  );
}

export default App;