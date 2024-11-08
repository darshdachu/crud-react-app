import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import Spinner from '../../SPINNER/Spinner';
import Course from './Course';

const AllCourses = () => {
  let [state,setState]=useState(null);


  let fetchCourse=async ()=>{
    let {data}=await axios.get("http://localhost:5000/course");
    setState(data);
  }

  useEffect(()=>{ 
    fetchCourse();
  },[])

  return (
   <Fragment>
    <h1>ALL COURSES</h1>
    <div className='courses'>
      {
        state === null ? (<Spinner></Spinner>) : (state.map(course => <Course key={course.id} {...course}></Course>))
      }
    </div>
   </Fragment>
  )
}

export default AllCourses