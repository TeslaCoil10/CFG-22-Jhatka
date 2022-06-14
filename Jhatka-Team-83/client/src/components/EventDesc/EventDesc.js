import React from 'react'
import {useState} from 'react'
import {db} from '../../firebase-config';
import {collection,getDoc,doc} from "firebase/firestore";
const EventDesc = () => {
    let articleID="",articleTitle="",articleDesc="",articleUrl="";
    articleID=localStorage.getItem('articleID');
    articleTitle=localStorage.getItem('articleTitle');
    articleDesc=localStorage.getItem('articleDesc');
    articleUrl=localStorage.getItem('articleUrl');
    // console.log(articleDesc);
  return (
    <div className="container">
       <h1>
      {articleTitle}
    </h1>

    <img 
      src={articleUrl}
      alt="avatar_img"
    />

    <p>
     {articleDesc}
    </p>
    </div>
  )
}

export default EventDesc
