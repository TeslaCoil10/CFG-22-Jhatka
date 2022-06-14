import React, { Component,useState,useEffect } from "react";
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import {Container} from 'react-bootstrap'
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import './Addevents.css'

const Addevents = () => {
  // console.log(firebase.firestore.Timestamp.now().toDate().toString())
  const navigate=useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("xyz");
  const [newSummary, setNewSummary] = useState("");
  const [newLocation, setNewLocation]=useState("");
  const [newStars,setNewStars]=useState(0);
  const [newUrl,setNewUrl]=useState("");
  const [newtype,setType]=useState("");
  const eventsref=collection(db,"Events");
  const onFormSubmit = async (campaignDetails) => {
    if(newtype=='Petition')
    {
      var petref=collection(db,"Petitions");
      await addDoc(petref,{date:firebase.firestore.Timestamp.now().toDate(),Description: newDescription,Star:newStars,Summary:newSummary, Users:[],title: newTitle,urlToImage:newUrl})
    }
    else{

      await addDoc(eventsref, { Date:firebase.firestore.Timestamp.now().toDate(),Description: newDescription,Location:newLocation,Star:newStars,Summary:newSummary, Users:[],title: newTitle,urlToImage:newUrl });
    }
    navigate('/events')
  }
  return (
    <Container fluid>
    <div className="backg2" >
    <h2 className="text-center font-link p-2">Add Events</h2>

    <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="post-form-width mx-auto bg-light border border-dark rounded p-3 mb-4"
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            onChange={(event) => {
              setNewTitle(event.target.value);
            }
          }

            className="form-control"
            // {...register("title", { required: true })}
          />
          {/* {errors.title?.type === "required" && (
            <p className="text-danger">*Enter your title</p>
          )} */}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            Description
          </label>
          <textarea type="text"
            id="description"
            rows="10"
            className="form-control"

            onChange={(event) => {
              console.log('we have a change');
              setNewDescription(event.target.value);
              console.log(newDescription);
            }
          }
            // {...register("description", { required: true })}
          />
          {errors.description?.type === "required" && (
            <p className="text-danger">*Enter your description</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="summary" className="form-lable">
            Summary
          </label>
          <textarea type="text"
            id="summary"
            onChange={(event) => {
              setNewSummary(event.target.value);
            }
          }
            rows="5"
            className="form-control"
            
            // {...register("summary", { required: true })}
          />
          {errors.summary?.type === "required" && (
            <p className="text-danger">*Enter your summary</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-lable">
            Location
          </label>
          <textarea type="text"
            id="location"
            onChange={(event) => {
              setNewLocation(event.target.value);
            }
          }

            rows="1"
            className="form-control"
            // {...register("location", { required: true })}
          />
          {errors.summary?.type === "required" && (
            <p className="text-danger">*Enter the event location</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="stars" className="form-lable">
            Stars
          </label>
          <input type="number"
            id="stars"
            rows="1"
            onChange={(event) => {
              setNewStars(event.target.value);
            }
          }
            className="form-control"
            // {...register("stars", { required: true })}
          />
          {errors.summary?.type === "required" && (
            <p className="text-danger">*Enter the stars</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-lable">
            Upload image URL
          </label>
          <textarea type="text"
            id="imgUrl"
            onChange={(event) => {
              setNewUrl(event.target.value);
            }
          }

            rows="1"
            className="form-control"
            // {...register("location", { required: true })}
          />
          {errors.summary?.type === "required" && (
            <p className="text-danger">*Enter url of image</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          
          <input type="date" id="date" className="form-control" />
        </div>


        <div className="mb-3" onChange={(event) => {
              setType(event.target.value);
            }
          }> 
          <div className="mb-2">Type of event</div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="Petition" id="flexRadioDefault1" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Petition
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="fundraiser" id="flexRadioDefault2" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Fund Raiser
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="other events" id="flexRadioDefault3" {...register('eventType', {required: true})} />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Other Event
            </label>
          </div>
        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          Post It!
        </button>
      </form>
      </div>
    </Container>
  )
}

export default Addevents