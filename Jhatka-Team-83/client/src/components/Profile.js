import React from 'react'
import { NavLink } from 'react-router-dom';
import History from './UserHistory/History';
import './Profile.css';

function Profile() {

  const UserDetails = async () =>{

  }
  
  return (
    <>
    <div className="backg5" >
     <div className='profile-wrapper'>
       
     <div className='profile card '>
       <div className='card-body'>
        <div className='profile-content '>
            <h4 className='card-title'>Name Name</h4>
            <h6 className='card-text'>Gmail</h6>
            <h6 className='card-text'>Phone</h6>
        </div>
          <div className='sidebar'>
            <p className='stars'>Stars: 4/5</p>
            <NavLink to="/skills" className="button-skills btn btn-dark">Add your Skills</NavLink>
          </div>
        </div>

        
     </div>
     
     </div>
     <History/>
     </div>
    </>
  )
}

export default Profile