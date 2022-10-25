import React from 'react';



const Dashboard = () => {

    return (
        <div className="container header">
           {/* <Dashboard/> */}
            <div>
               
                    <h1>Dashboard Works</h1>
                    <button >
                       <a href={`/Create`} >Create</a>
                    </button>
                    <button >
                       <a href={`/all-book-reports`} >View</a>
                    </button>
                    <button>
                       <a href={`/`} > Sign Out</a>
                    </button>
                    
                        
                    </div>
                
            </div>
      
    );
};



export default Dashboard;