import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'



function Navbar() {
    return (
        <>
            <BrowserRouter>
                <div className='navbar'>
                <NavLink to="/" className="RemoveLine" style={({isActive})=>{return isActive?{color:"red"}:{color:"white"}}}>Home</NavLink>
                <NavLink to="/student" className="RemoveLine" style={({isActive})=>{return isActive?{color:"red"}:{color:"white"}}}>Student</NavLink>
                <NavLink to="/contact" className="RemoveLine" style={({isActive})=>{return isActive?{color:"red"}:{color:"white"}}}>ContactUs</NavLink>
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/student' element={<Student />} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/dynamic/:id' element={<EditStudent/>} />
                    <Route path='/addStu' element={<AddStudent/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar
