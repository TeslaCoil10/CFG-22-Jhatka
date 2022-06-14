import React, { useState, useEffect } from 'react'
import { getDocs, addDoc, collection } from "firebase/firestore";
import {db,auth} from '../../firebase-config';
import { onAuthStateChanged} from "firebase/auth";
import HistoryItems from './HistoryItems';


function History() {
  const [menuItem, setMenuItems] = useState([]);
  const [user, setUser] = useState("");
  const [event, setEventId] = useState([]);

  const eventData=collection(db,"Events");
  const userData=collection(db,"Users");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const getEventids = async()=>{
    const udata = await getDocs(userData);
    setEventId(udata.docs.map((doc)=>({...doc.History,email:user?.email})));
  }

  const getHistory= async()=>{
    const edata = await getDocs(eventData);
    setMenuItems(edata.docs.map((doc)=>({...doc.data(),event:doc.id})))

  }

  useEffect(()=>{
    getEventids();
    getHistory();
  },[])

  return (
    
    <HistoryItems items={menuItem} />
  )
}

export default History