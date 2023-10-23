import React from 'react'
import { useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
function Student() {
  const navigate=useNavigate();
  const select = useSelector((state) => state.student)
  console.log(select);
  return (
    <>
      <div className='headSection'>
        <h1>Student Details</h1>
        <button className='headBtn' onClick={()=>navigate("/addStu")}>Add New Student</button>
      </div>
      <div className='tableContainer'>
        <table border="1px" cellSpacing="0" className='table'>
          <thead>
            <tr className='tableTr'>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {select.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>{value.course}</td>
                  <td>{value.batch}</td>
                  <td><Link to={`/dynamic/${index}`} className='RemoveLine'>Edit</Link></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Student
