import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { getDocs, addDoc, collection } from "firebase/firestore";
import {db,auth} from '../../firebase-config';
// import { onAuthStateChanged} from "firebase/auth";
import { NavLink } from 'react-router-dom';

import {createUserWithEmailAndPassword} from 'firebase/auth'

import './Signin.css'

const Signin = () => {
  const [user, setUser] = useState("");
  const [isPassword, setIsPassword] = useState(false)
  const navigate = useNavigate()

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const userData=collection(db,"Users");

  

  // const onCreate = async (user) =>{
  //   await addDoc(userData, {
  //        name: ,
  //        email:user.email,
  //        password:user.password,
  //        stars:"2",

  //      });
  // }

  useEffect(
    () => {
      if(localStorage.getItem("isAuth")){
        navigate("/")
      }
    }
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userRegister = async (data) => {

    await createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(
      (response) => {
        console.log(response)
        localStorage.setItem("isAuth", true)
        setIsPassword(false)
      }
    )
    .catch(
      err => {
        console.log(err.message)
        setIsPassword(true)
      }
    )
    await addDoc(userData, {Uuid: localStorage.getItem('user'), Education: [], History: [], Skillset: [], PhoneNumber: data.number, PreferredLocation: '', StarsEarned: 0, User: (data.type === "user") ? true : false})
    .then(
      (response) => {
        console.log(response)
      }
    )
    .catch(err => console.log(err.message))
    navigate('/')
  }

  const onFormSubmit = (userData) => {

    (userData.type === "user") ? localStorage.setItem('isUser', true) : localStorage.setItem('isUser', false)
    console.log(typeof userData.type)

    if(userData.password === userData.confirmpassword){
      setIsPassword(false)
      userRegister(userData)
    }
    else{
      setIsPassword(true)
    }
  }

  return (
    <Container fluid>
    <div className="backg1" >
      <h3 className="text-center p-4 font-link">Signup</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="signin-form-width bg-light mx-auto border border-dark rounded p-3"
      >

        {
          (isPassword) && 
          <div className="alert alert-danger text-center">
            Passwords do not match/ username already exists
          </div>
        }

        {/* <div className="mb-3">
          <label htmlFor="username" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Username</div>
            </div>
          </label>

          <input
            type="text"
            id="username"
            className="form-control"
            {...register("username", { required: true })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Enter your username</p>
          )}
        </div> */}

        <div className="mb-3">
        <label htmlFor="email" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Email</div>
            </div>
          </label>

          <input
            type="text"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*Enter your email</p>
          )}
        </div>

        <div className="mb-3">
        <label htmlFor="number" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Phone number</div>
            </div>
          </label>

          <input
            type="text"
            id="number"
            className="form-control"
            {...register("number", { required: true, minLength: 10 })}
          />
          {errors.number?.type === "required" && (
            <p className="text-danger">*Enter your phone number</p>
          )}
          {
            errors.number?.type === "minLength" && <p className="text-danger">*Phone number should be of 10 digits</p>
          }
        </div>

        <div className="mb-4">
          <div>Which user are you?</div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="user" id="flexRadioDefault1" {...register("type")} />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              User
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" value="ngo" id="flexRadioDefault2" {...register("type")} />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              NGO
            </label>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Password</div>
            </div>
          </label>

          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Enter your password</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">*Password should be a minimum of 8 characters</p>
          )}
        </div>

        <div className="mb-3">
        <label htmlFor="password" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Re-enter Password</div>
            </div>
          </label>

          <input
            type="password"
            id="confirmpassword"
            className="form-control"
            {...register("confirmpassword", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Re-enter your password</p>
          )}

        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          Signup
        </button>
      </form>
    
      </div>
    </Container>
  )
}

export default Signin