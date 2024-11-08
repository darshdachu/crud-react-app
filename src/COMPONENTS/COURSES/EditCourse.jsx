import React, { useEffect, useState } from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from "axios";


// console.log(axios.post());

const EditCourse = () => {
let navigate=useNavigate();

let {id}=useParams();

  let [state,setState]=useState({
   
    title:"",
    trainer:"",
    description:"",
    updatedAt:"",
    isLoading:false,
  });

  let {title,trainer,createdAt,description,updatedAt,isLoading}=state


  useEffect(()=>{
    let fetchCourse=async () =>{
        let {data}=await axios.get(`http://localhost:5000/course/${id}`);
        console.log(data);
        setState(data)
      }
      fetchCourse();
  },[id]);
// --------------------------------------------------------------

  let handleChange=(e)=>{

    let {name,value}=e.target;
    setState({...state,[name]:value})

  }


  let handleSubmit= async e=>{
    e.preventDefault()
    try{
      let payload={title,trainer,description,updatedAt};
      // console.log(payload);

      let {data}=await axios.put(`http://localhost:5000/course/${id}`,payload);
      // console.log(data);
      navigate("/");

    }
    catch(err){
      console.log(err);

    }

  }



  return (
  <section className='content'>
      <main className='authBlock'>
    <h1>Create Course</h1>

    <form onSubmit={handleSubmit}>
     <div className='form-group'>

     <label htmlFor="title">TITLE:</label>
     <input type="text" name="title" id="" value={title} onChange={handleChange} required placeholder='ENTER TITLE'/>

     </div>

     <div className='form-group'>

     <label htmlFor="trainer">TRAINER:</label>
     <input type="text" name="trainer" id="" value={trainer} onChange={handleChange} required placeholder='TRAINER NAME'/>

     </div>
     <div className='form-group'>

<label htmlFor="description">DESCRIPTION:</label>
<textarea type="text" name="description" id="" value={description} onChange={handleChange} required placeholder='TRAINER NAME'/>

</div>

<div className='form-group'>

<label htmlFor="createdAt">CourseCreatedAt:</label>
<input type="date" name="createdAt" id="" value={createdAt} onChange={handleChange} required placeholder='TRAINER NAME'/>

</div>

     <div className="form-group">
      <button>{isLoading ? "loading":"Update Course"}</button>
     </div>
    </form>

    </main>
  </section>
  )
}

export default EditCourse