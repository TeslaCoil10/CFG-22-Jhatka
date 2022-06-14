import React, { useState, useEffect } from 'react'
import { getDocs, addDoc, collection } from "firebase/firestore";
import {db,auth} from '../../firebase-config';
import { onAuthStateChanged} from "firebase/auth";
import { NavLink } from 'react-router-dom';
import History from '../UserHistory/History';
import './Profile.css';

function Profile() {
  const [details, setUserDetails] = useState([]);
  const [user, setUser] = useState("");
   const userData=collection(db,"Users");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const UserDetails = async()=>{
    const udata = await getDocs(userData);
    setUserDetails(udata.docs.map((doc)=>({...doc.data(),email:user?.email})));
  }
  
  return (
    <>
    <div className="backg5">
     <div className='profile-wrapper'>
       
     <div className='profile card '>
       <div className='card-wrapper'>
          <div className='card-body'>
            <div className='profile-content '>
                <h4 className='card-title'>Name: {user?.name}</h4>
                <h6 className='card-text'>Gmail: {user?.email}</h6>
                <h6 className='card-text'>Phone: {user?.phone}</h6>
            </div>
          </div>
            <div className='sidebar'>
              <p className='stars'>Stars: {user?.stars}/5</p>
              <NavLink to="/addeducation" className="button-skills btn btn-dark">Add Education</NavLink>
              <NavLink to="/addskills" className="button-skills btn btn-dark">Add Skills</NavLink>
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