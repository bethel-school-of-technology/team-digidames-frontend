import React, { useEffect, useState } from 'react';
import './App.css';
import AllBookReports from './Components/AllBookReports';
import API from './UTILS/API';
import OneBookReport from './Components/OneBookReport';
import { Routes, Route, useNavigate } from "react-router-dom";
import UpdateBookReport from "./Components/UpdateBookReport";
import BookReportContext from './UTILS/BookReportContext';

function App() {
  const [allBookReports, setAllBookReports] = useState([]);
  const [newBookReport, setNewBookReport] = useState({
    title: "",
    author: "",
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

  //Will Remove once I know the it works with out
  // const handleTitleChange = (e) => {
  //   const { value } = e.target;
  //   setNewBookReport({ ...newBookReport, title: value });
  // };

  // const handleAuthorChange = (e) => {
  //   const { value } = e.target;
  //   setNewBookReport({ ...newBookReport, author: value })
  // };

  // const handleReportChange = (e) => {
  //   const { value } = e.target;
  //   setNewBookReport({ ...newBookReport, report: value })
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   API.createBookReport(newBookReport).then(res => {
  //     console.log(res);
  //   });
  // }



  // const updateBookReport = (id) => {

  //   API.updateBookReport(id, newBookReport).then(res => {
  //     console.log(res);
  //     setRefresh({ ...refresh, count: refresh.count + 1 });
  //     navigate("/") //this navigates (useNavigat) to homepage ("/") after updating Book Report
  //   });
  // }

  // const handleDelete = (id) => {
  //   API.deleteBookReport(id).then(res => {
  //     console.log(res);
  //     setRefresh({ ...refresh, count: refresh.count + 1 });
  //     navigate("/") //this navigates (useNavigat) to homepage ("/") after deleting Book Report      
  //   });
  // };

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

    handleReportChange: (e) => {
      const { value } = e.target;
      setNewBookReport({ ...newBookReport, report: value });
    },

    updateBookReport: (id) => {
      API.updateBookReport(id, newBookReport).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/") //this navigates (useNavigat) to homepage ("/") after updating Book Report
      });
    },

    handleDelete: (id) => {
      API.deleteBookReport(id).then(res => {
        console.log(res);
        setRefresh({ ...refresh, count: refresh.count + 1 });
        navigate("/") //this navigates (useNavigat) to homepage ("/") after deleting Book Report      
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
