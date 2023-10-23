import React from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../SliceComponent/Slice'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const dispatch=useDispatch()
  const navigate=useNavigate();
  const tempObj={
    name:"",
    age:"",
    course:"",
    batch:""

  }
  const handleChange=(e)=>{
    tempObj[e.target.name]=e.target.value;

  }
  const handleSubmit=()=>{
    dispatch(addStudent({tempObj}))
    navigate(-1)

  }
  return (
    <>
      <h1 className='text'>Add Student</h1>
      <form className='form'>
      <div className='TwoInput'>
      <div className='inputArea'>
      <label htmlFor='name' className='label'>Name</label>
      <input type='text' id='name' name='name' onChange={handleChange} placeholder='Enter Name' className='inputField' />
      </div>
      <div className='inputArea'>
      <label htmlFor='age' className='label'>Age</label>
      <input type='number' id='age' name='age' onChange={handleChange} placeholder='Enter Age' className='inputField' />
      </div>
      </div>
      <div className='TwoInput'>
      <div className='inputArea'>
      <label htmlFor='course' className='label'>Course</label>
      <input type='text' id='course' name='course' onChange={handleChange} placeholder='Enter Course' className='inputField' />
      </div>
      <div className='inputArea'>
      <label htmlFor='batch' className='label'>Batch</label>
      <input type='text' id='batch' name='batch' onChange={handleChange} placeholder='Enter Batch' className='inputField' />
      </div>
      </div>
      <div className='BtnArea'>
      <button type='button' onClick={handleSubmit} className='btn1'>Submit</button>
      <button type='button' onClick={()=>navigate(-1)} className='btn2'>Cancle</button>
      </div>
      </form>
    </>
  )
}

export default AddStudent
