import React, { useEffect, useState } from 'react';
import './App.css';
import AllBookReports from './Components/AllBookReports';
import API from './UTILS/API';


function App() {


  const [ allBookReports, setAllBookReports ] = useState([]);

  const [newBookReport, setNewBookReport] = useState({
    title:"",
    author:"",
    report:""


  })


useEffect(() => {

getAllBookReports();

}, [])


const getAllBookReports = () => {
  API.getAll().then(res => {
  

    setAllBookReports(res.data)
  })
};

const handleTitleChange = (e) => {

  const{ value } = e.target;

  setNewBookReport({...newBookReport, title: value})
  
};

const handleAuthorChange = (e) => {

  const{ value } = e.target;

  setNewBookReport({...newBookReport, author: value})
  
};

const handleReportChange = (e) => {

  const{ value } = e.target;

  setNewBookReport({...newBookReport, report: value})
  
};

const handleSubmit = (e) =>  {
  e.preventDefault();

  API.createBookReport(newBookReport).then(res => {
    console.log(res);
  })
}

return (
    <div className="App">
      
      <AllBookReports
      bookReportData={allBookReports}
      handleTitleChange={handleTitleChange}
      handleAuthorChange={handleAuthorChange}
      handleReportChange={handleReportChange}
      handleSubmit={handleSubmit}
      />
      
    
    
    </div>
  );
}

export default App;
