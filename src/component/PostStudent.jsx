import React from 'react'
import { useState } from 'react'
import axios from "axios";

const PostStudent = ({updating}) => {
    const [newStudent, setNewStudent] = useState({
        name:"",
        grade:"",
    })

    function handleSubmite (event) {
        event.preventDefault();
        axios
        .post("http://127.0.0.1:3000/students", {student: newStudent})
        console.log(newStudent);
    }
  return (
    <div>
      <form onSubmit={handleSubmite} >
        <label htmlFor="studentName">Student Name:</label>
        <input onChange={(event)=> {
            setNewStudent({...newStudent, name:event.target.value})
        }} id='studentName' type="text" />
        <label htmlFor="grade">Grade:</label>
        <input onChange={(event)=> {
            setNewStudent({...newStudent, grade:event.target.value})
        }}   id='grade' type="number" />
        <button className='w-20 h-10 bg-[#626262]' type='submit'>Register</button>
      </form>
    </div>
  )
}

export default PostStudent
