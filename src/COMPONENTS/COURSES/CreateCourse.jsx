import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

// console.log(axios.post());

const CreateCourse = () => {
let navigate=useNavigate();

  let [state,setState]=useState({
   
    title:"",
    trainer:"",
    description:"",
    createdAt:"",
    isLoading:false,
  });

  let {title,trainer,createdAt,description,isLoading}=state


  let handleChange=(e)=>{

    let {name,value}=e.target;
    setState({...state,[name]:value})

  }



  let handleSubmit= async e=>{
    e.preventDefault()
    try{
      let payload={title,trainer,description,createdAt};
      // console.log(payload);

      let {data}=await axios.post("http://localhost:5000/course",payload);
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
      <button>{isLoading ? "loading":"Create Course"}</button>
     </div>
    </form>

    </main>
  </section>
  )
}

export default CreateCourse