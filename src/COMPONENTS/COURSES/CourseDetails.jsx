import React from 'react'

import {Link, useLocation,useNavigate} from "react-router-dom"
import Moment from 'moment';
import axios from 'axios';

console.log(Moment);

const CourseDetails = () => {
  let {state:{id,title,trainer,description,createdAt}}=useLocation();

let navigate=useNavigate()

  let deleteCourse=async(id) =>{
    await axios.delete(`http://localhost:5000/course/${id}`)
    // window.location.assign('/')
    navigate('/')

  }//-----------delete---------------

  return (
    <div className='course_details'>
   <header>
   <Link className='delete btn-help' to="/" onClick={()=>{deleteCourse(id)}}>DELETE</Link>

   <Link className='edit btn-help' to={`/edit/${id}`}>EDIT</Link>

   <Link className='back btn-help' to="/">BACK</Link>
   
    <h2>{title}</h2>
   </header>
   <main>
    <p>
      <span>Trainer:</span>
      <span>{trainer}</span>
    </p>
    <p>{description}</p>
   </main>
   <footer>
    <span className='date_create'>
      Course Created At:
    </span>
    <span>
      <strong>{ Moment(createdAt).fromNow()}</strong>
    </span>
   </footer>
    </div>
  )
}

export default CourseDetails 