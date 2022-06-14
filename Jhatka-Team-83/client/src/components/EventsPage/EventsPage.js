// import React from 'react'
import './EventsPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import React, { Component,useState,useEffect } from "react";
import {db} from '../../firebase-config';
import {collection,getDocs,doc} from "firebase/firestore";
const EventsPage = () => {

  const navigate=useNavigate();

  
  const [articles, setArticles] = useState([]);
  const [l,setLength]=useState(0);
  const eventsref=collection(db,"Events");
  const onReadMore=(articleID,articleTitle,articleDesc,articleUrl)=>{
    localStorage.setItem('articleID',articleID);
    localStorage.setItem('articleTitle',articleTitle);
    localStorage.setItem('articleDesc',articleDesc);
    localStorage.setItem('articleUrl',articleUrl);
    navigate('/eventDesc');
  }
  useEffect(()=>{
    const getEvents=async()=>{
      const data=await getDocs(eventsref);
      setArticles(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
    };
    getEvents();
    },[])
  console.log(l);
  return (
    <Container fluid>
    <div className="backg3" >
      <h2 className="text-center font-link p-2">Events</h2>
      <Row>
        {
          articles.map(article => (
            <Col sm={12} md={6} lg={4} className="p-2" key={article.id}>
              <div className="card h-100 m-2 shadow mb-5 bg-light rounded">
              <img src={article.urlToImage} className="card-img-top" alt="..."/>
                <div className="card-header fw-bold">
                  {article.title}
                </div>
                <div className="card-body">
                  {article.Summary}
                </div>
                <div>
                  <button className="btn btn-danger m-2" onClick={()=>onReadMore(article.id,article.title,article.Description,article.urlToImage)}>Read more</button>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
    </Container>
  )
}

export default EventsPage
