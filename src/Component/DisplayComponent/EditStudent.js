import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editStudent } from '../SliceComponent/Slice'

function EditStudent() {
  const navigate=useNavigate();
    const dispatch=useDispatch()
    const Index=useParams().id
    const editData=useSelector((state)=>state.student)
    console.log(editData);
    
    const[info,setInfo]=useState({
        name:editData[Index].name,
        age:editData[Index].age,
        course:editData[Index].course,
        batch:editData[Index].batch
    })
    const handleChange=(e)=>{
    setInfo({...info,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
     dispatch(editStudent({info,Index}))
     navigate("/student")
    }
  return (
    <>
    <h1 className='text'>EditStudent</h1>
      <form className='form'>
      <div className='TwoInput'>
      <div className='inputArea'>
      <label htmlFor='name' className='label'>Name</label>
      <input type='text' id='name' name='name' onChange={handleChange} placeholder={editData[Index].name} className='inputField' />
      </div>
      <div className='inputArea'>
      <label htmlFor='age' className='label'>Age</label>
      <input type='number' id='age' name='age' onChange={handleChange} placeholder={editData[Index].age} className='inputField' />
      </div>
      </div>
      <div className='TwoInput'>
      <div className='inputArea'>
      <label htmlFor='course' className='label'>Course</label>
      <input type='text' id='course' name='course' onChange={handleChange} placeholder={editData[Index].course} className='inputField' />
      </div>
      <div className='inputArea'>
      <label htmlFor='batch' className='label'>Batch</label>
      <input type='text' id='batch' name='batch' onChange={handleChange} placeholder={editData[Index].batch} className='inputField' />
      </div>
      </div>
      <div className='BtnArea'>
      <button type='button' onClick={handleSubmit} className='btn1'>Update</button>
      <button type='button' onClick={()=>navigate(-1)} className='btn2'>Cancle</button>
      </div>
      </form>
    </>
  )
}

export default EditStudent
