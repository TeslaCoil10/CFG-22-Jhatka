import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { auth } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'

import { signInWithEmailAndPassword } from 'firebase/auth'

import './Login.css'

const Login = () => {

  const [isValid, setIsValid] = useState(false)
  const navigate = useNavigate()

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

  const userLogin = async (data) => {
    await signInWithEmailAndPassword(auth, data.email, data.password)
    .then(
      (response) => {
        localStorage.setItem('userid', response.user.uid)
        localStorage.setItem("isAuth", true)
        (data.type === "user") ? localStorage.setItem('isUser', true) : localStorage.setItem('isUser', false)
        setIsValid(true)
        navigate('/')
      }
    )
    .catch(
      () => {
        setIsValid(false)
      }
    )
  }

  const onFormSubmit = (loginData) => {
    userLogin(loginData)
    console.log(loginData)
  }

  return (
    <Container fluid> 
      <div className="backg" >
      <h3 className="text-center font-link p-4">Login</h3>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="login-form-width bg-light mx-auto border border-dark rounded p-3"
      >
        {
          (isValid) && 
          <div className="alert alert-danger text-center">
            Username/ Password is invalid
          </div>
        }

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <div className="d-flex align-items-center gap-2">
              <div>
              </div>
              <div>Email</div>
            </div>
          </label>

          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Enter your username</p>
          )}
        </div>

        <div className="mb-3">
          
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
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p className="text-danger">*Enter your password</p>
          )}
        </div>

        <button className="d-block mx-auto btn btn-primary" type="submit">
          Login
        </button>
      </form>

      </div>
    </Container>
  )
}

export default Login