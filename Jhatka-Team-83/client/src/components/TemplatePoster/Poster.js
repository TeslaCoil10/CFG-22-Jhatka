import React, { useState, useEffect } from 'react'
import { getDocs, collection } from "firebase/firestore";
import {db} from '../../firebase-config';
import { Container, Row, Col, NavLink } from 'react-bootstrap'

function Poster() {

  const localdb = collection(db, "Poster");
  const [posters, setPosters] = useState([]);
  

  const getPosterData = async () =>{
    const data = await getDocs(localdb);
    setPosters(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }

  useEffect(() =>{
    getPosterData();
  }, []);

  return (
    <>
    <Container fluid>
    <div className="backg3" >
      <h2 className="text-center font-link p-2">Campaign Posters</h2>
      <Row className='ms-auto'>
      {
          posters.map(poster => (
      <Col sm={12} lg={5} className="container p-3" key={poster.id}>
      <div className='poster-wrapper container mt-5 card' style={{backgroundColor: poster.Color}} id='post'>
        <div className="post">
          <div className='title'>
            <h2>{poster.Title}</h2>
          </div>
          <div className="date">
              <span>{poster.Subheading}</span>
          </div>
          
          <div className='image'>
            <figure>
              <img src={poster.Image} className="image card-img-top" alt="poster-image"/>
            </figure>
          </div>
          <div className='content'>
            <p className='text'>{poster.Content}</p>
          </div>
        </div>
      </div>
      </Col>
      ))
      }
      </Row>

      
    </div>
    </Container>
    </>
  )
}

export default Poster
