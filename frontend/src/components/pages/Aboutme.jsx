import React from 'react'
import Navbar from '../shared/Navbar'
import frontend from './../../assets/skills/front-end-programming.png'
import backend from './../../assets/skills/backend.png'
import programmer from './../../assets/skills/programmer.png'



function Aboutme() {
  return (
    <div className='grid grid-cols-3 gap-6 my-4 mx-6 xsm:grid xsm:grid-cols-1'>
      <div className='shadow-2xl text-start mx-7 border-2 border-orange-500 px-5'>
        <img src={frontend} alt="" width="30%" className=' ml-[100px] m  pb-1 text-blue-50 font-medium'/>
        <h1 className='text-center bg-blue-50 font-bold'>Anisul Islam</h1>
        <p className='text-left bg-blue-50 ' >is a skilled software engineer with hands on experience 
          in developing mobile applications using React Native and 
           web platforms with React.js and Vue.js.
        </p>
      </div>

      <div className='shadow-2xl text-start mx-7 border-2 border-orange-500 px-5'>
        <img src={backend} alt=""  width="30%" className=' ml-[100px] m  pb-1 text-blue-50 font-medium'/>
        <p className='text-left bg-blue-50 '>He has a strong command of backend technologies,
          including MongoDB, Node.js, and Express.js,
          enabling him to build robust and scalable web applications</p>
        </div>
        <div className='shadow-2xl text-start mx-7 border-2 border-orange-500 px-5'>
          <img src={programmer} alt=""  width="30%" className=' ml-[100px] m  pb-1 text-blue-50 font-medium mt-3'  />
        <p className='text-left bg-blue-50 '> His expertise spans the full development cycle,
          from frontend design to backend integration, ensuring efficient,
          high-performance solutions.
        </p> </div>
 </div>
 
  )
}

export default Aboutme