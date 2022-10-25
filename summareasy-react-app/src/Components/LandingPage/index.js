import React from 'react';



const LandingPage = () => {

    return (
        <div className="container header">
           {/* <LandingPage/> */}
            <div>
               
                    <h1>LandingPage Works</h1>
                    <button>
                        Sign Up
                    </button>
                    <button>
                        <a href={`/Dashboard`} >Sign In</a>
                    </button>
                        
                    </div>
                
            </div>
      
    );
};



export default LandingPage;