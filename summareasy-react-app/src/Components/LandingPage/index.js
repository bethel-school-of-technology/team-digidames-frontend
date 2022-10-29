import React from 'react';
import '../../App.css';
import Footer from '../Footer';

const LandingPage = () => {

    return (
        <div className='background'>
            <div className='header'>

                <div className='buttons'>
                    <button >
                        <a href={`/register`} >Sign Up</a>
                    </button>
                    <button >

                        <a href={`/login`} >Sign In</a>

                    </button>
                </div>
            </div>

            <div className="App">
            </div>
            <div>

                <h1>LandingPage Works</h1>


            </div>
            <Footer />
        </div>

    );
};



export default LandingPage;