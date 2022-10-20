import React, { useEffect, useState } from 'react';
import './App.css';
import AllBookReports from './Components/AllBookReports';
import API from './UTILS/API';


function App() {


  const [ allBookReports, setAllBookReports ] = useState([]);

useEffect(() => {

getAllBookReports();

}, [])


const getAllBookReports = () => {
  API.getAll().then(res => {
    //console.log(res.data);

    setAllBookReports(res.data)
  })
}



  return (
    <div className="App">
      
      <AllBookReports bookReportData={allBookReports} />
      
    
    
    </div>
  );
}

export default App;
