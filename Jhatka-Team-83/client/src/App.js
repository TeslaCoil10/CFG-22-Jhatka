import React from 'react'
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap'

import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
import Home from "./components/Home";
import Profile from "./components/Profile/Profile";
import EventsPage from "./components/EventsPage/EventsPage";
import Addevents from "./components/AddEvents/Addevents";
import Errorpage from './components/Error404';
import AddSkills from './components/AddSkills/AddSkills';
import AddEducation from './components/AddEducation/AddEducation';
import PosterForm from './components/PosterForm/PosterForm';
import Poster from './components/TemplatePoster/Poster';
import EventDesc from './components/EventDesc/EventDesc';
import lg from './components/images/logo.png';
import './index.css';


const App = () => {

  const navigate = useNavigate()


  const logUserOut = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <NavLink className="navbar-brand" to="/">
        <img src={lg} style={{height:'25px', width:'100%'}} alt="logo" classname="logoc" />
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {
          localStorage.getItem('isAuth') && 
          (
            <>
              <Nav className="me-auto">
                <NavLink className="nav-link" to='/profile'>Profile</NavLink>
                <NavLink className="nav-link" to="/events">Events</NavLink>
                {
                  (localStorage.getItem('isUser') === "false") && 
                  <>
                    <NavLink className="nav-link" to="/addevents">Add Events</NavLink>
                    <NavLink className="nav-link" to="/addposter">Add Poster</NavLink>
                  </>
                }
                
              </Nav>
              <div className="ms-auto">
                <button className="btn btn-primary" onClick={logUserOut}>Logout</button>
              </div>
            </>
          )
        }
        {
          !localStorage.getItem('isAuth') && 
          (
            <Nav className="ms-auto">
              <NavLink className="nav-link" to='/login'>Login</NavLink>
              <NavLink className="nav-link" to='/signin'>Signup</NavLink>
            </Nav>
          )
        }
      </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
        <Route path= "/" element= {<Home/>}></Route>     
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/signin" element = {<Signin/>}></Route>
        <Route path = "/addskills" element = {<AddSkills/>}></Route>
        <Route path = "/addeducation" element = {<AddEducation/>}></Route>
        <Route path= "/profile" element={<Profile /> } />
        <Route path ="/events" element={<EventsPage />} />
        <Route path="/addevents" element={<Addevents />} />
        <Route path="/eventDesc" element={<EventDesc />} />
        <Route path="/addposter" element={<PosterForm/>}></Route>
        <Route path="/postertemplate" element={<Poster/>}></Route>
        <Route path = "*" element = {<Errorpage/>}></Route>
        
      </Routes>
    </>
  )
}

export default App