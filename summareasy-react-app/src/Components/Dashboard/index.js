import React from 'react';
import '../../App.css';
import start from '../../images/start.jpg'
import edit from '../../images/edit.png'
import bye from '../../images/bye.png'
import SignOut from '../LogOut/Logout';



const Dashboard = () => {

    return (
        <div className= "header">
           <div className='signout' onClick={SignOut} >
                       <a href={`/logout`} > <img src={bye} alt='' height={150} width={150}/></a>
                    </div>
            <div>
               
                    
                    <div className='icon-buttons'>
                    <ul className='list' >
                    <li className='start'>
                    
                        <a href={`/Create`} >  <img src={start} alt=''  width={175} height={150}/></a>
                    </li>
                    
                    <li className='edit'>
                       <a href={`/all-book-reports`} ><img src={edit} alt=''  width={150} height={150}/></a>
                    </li>
                    
                    
                    </ul>
                    </div>
                    
                    
                    
                        
                    </div>
                
            </div>
      
    );
};



export default Dashboard;