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
import Register from './Components/Register';
import EmailContactForm from './Components/Email';
import LoggedOut from './Components/LoggedOut';
import AboutUs from './Components/AboutUs';
import NavBar from './Components/NavBar';
import EmailedConfirm from './Components/EmailedConfirm';
import PrintedConfirm from './Components/PrintedConfirm';
import DeletedConfirm from './Components/DeletedConfirm';
import PrivateRoutes from './UTILS/PrivateRoutes';


function App() {
  const [allBookReports, setAllBookReports] = useState([]);
  const [newBookReport, setNewBookReport] = useState({
    title: "",
    author: "",
    writtenBy: "",
    report: ""
  });

  const [refresh, setRefresh] = useState({ count: 1 });
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
        document.querySelector(".form").reset();
        navigate("/all-book-reports") 
      });
    },

    handleReportChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, report: value });
    },

    updateBookReport: (id) => {
      API.updateBookReport(id, newBookReport).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 0 });
        navigate("/all-book-reports") 
      });
    },

    handleDelete: (id) => {
      API.deleteBookReport(id).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/deletedConfirm") 
      });
    }


  }

  return (
    <div className="App">

      <BookReportContext.Provider value={contextObject}>
        <Routes>

        
          {/* Start Private Routes */}
          <Route element={<PrivateRoutes/>}>
                           

         
          <Route
            path="/emailedconfirm"
            exact
            element={
              <EmailedConfirm
                bookReportData={allBookReports} />
            }
          />
           <Route
            path="/deletedconfirm"
            exact
            element={
              <DeletedConfirm
                bookReportData={allBookReports} />
            }
          />
             <Route
            path="/printedconfirm"
            exact
            element={
              <PrintedConfirm
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
            path="/Create" //will need to use google bookId to create reports ( path="/Create/:id" )
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
            path="/email/:id"
            element={
              <EmailContactForm />
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

          <Route
            path="/NavBar"
            element={
              <NavBar />
            }
          />
          
          </Route>
        
           
          
          {/* End private routes */}
          
          <Route
              path="/"
              exact
              element={
                <LandingPage
                  bookReportData={allBookReports} />
              }
            />
          
          <Route
            path="/register"
            exact
            element={
              <Register
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
          
        

         

       

        </Routes>
      </BookReportContext.Provider>
    </div>
  );
}

export default App;