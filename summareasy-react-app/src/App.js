import React, { useEffect, useState } from 'react';
import './App.css';
import AllBookReports from './Components/AllBookReports';
import API from './UTILS/API';


function App() {


useEffect(() => {

getAllBookReports();

}, [])


const getAllBookReports = () => {
  API.getAll().then(res => {
    console.log(res.data);
  })
}



  return (
    <div className="App">
      
      <AllBookReports />
      
    
    
    </div>
  );
}

export default App;
