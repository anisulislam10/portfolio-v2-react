import React from 'react'
import HTML from './../../assets/skills/html.png'
import CSS from './../../assets/skills/css.png'
import ReactIMG from './../../assets/skills/react-js.png'
import Tailwind from './../../assets/skills/tailwindcss.png'
import node from './../../assets/skills/node-js.png'
import express from './../../assets/skills/express-js.png'
import mongodb from './../../assets/skills/-mongodb.png'
import mysql from './../../assets/skills/mysql.png'
import reactNative from './../../assets/skills/react-native.png'
import Jest from './../../assets/skills/jest.png'
import Git from './../../assets/skills/git.png'
import Javascrpitprogramming from './../../assets/skills/jsprogram.png'
import TS from './../../assets/skills/typescript.png'
import boot from './../../assets/skills/boot.png'
import firebase from './../../assets/skills/firebase.png'
import CICD from './../../assets/skills/cicd.png'
import Docker from './../../assets/skills/docker.png'
import postgre from './../../assets/skills/postgre.png'
import vuejs from './../../assets/skills/vue-js.png'

import Navbar from '../shared/Navbar'
import Aboutme from './Aboutme'
import Footer from '../shared/Footer'


function Skills({showNavbar = true}) {
  return (
    <>
    {showNavbar && <Navbar />}
    
    
    <div className='items-center text-center bg-orange-50 mt-3'>
        <div className=''>
          <h1 className='text-orange-400 md:text-[30px] md:font-bold md:py-4 md:mr-[60px] xsm:ml-[10px] sm:text-[20px] sm:font-bold'>SKILLS</h1>
        </div>
        <div className='md:grid md:grid-cols-4 md:max-w-[700px] md:items-center md:text-center md:mx-[35px] md:mt-4 md:gap-[10px] xsm:grid xsm:grid-cols-2 xsm:mx-1 sm:grid sm:grid-cols-5 sm:gap-7'>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'> <img src={HTML} alt="" width="50%" className='ml-6 pt-5'/>HTML5</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={CSS} alt="" width="50%" className='ml-6 pt-5'/>CSS3</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={Javascrpitprogramming} alt="" width="50%" className='ml-6 pt-5'/>JavaScript</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={ReactIMG} alt="" width="50%" className='ml-6 pt-5'/>React JS</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-start text-center '><img src={Tailwind} alt="" width="50%" className='ml-6 pt-5 '/>Tailwind CSS</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={node} alt="" width="50%" className='ml-6 pt-5'/>Node JS</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={express} alt="" width="50%" className='ml-6 pt-5'/>Express JS</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={mongodb} alt="" width="50%" className='ml-6 pt-5'/>MongoDB</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={mysql} alt="" width="50%" className='ml-6 pt-5'/>MYSQL</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={reactNative} alt="" width="50%" className='ml-6 pt-5'/>React Native</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={Git} alt="" width="50%" className='ml-6 pt-5'/>Git</h1>

          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={Jest} alt="" width="50%" className='ml-6 pt-5'/>Jest</h1>
        </div>

        
      


      <div className='md:items-center md:text-center md:bg-white mt-3'>
      <h1 className='text-orange-400 md:text-[30px] md:font-bold md:py-1 md:mr-[60px] xsm:ml-[10px] sm:text-[20px] sm:font-bold sm:mt-8'> Learning</h1>

   

    <div className='md:grid md:grid-cols-8 md:items-center md:text-center md:px-[100px]  md:mt-1  md:bg-orange-100 md:py-2 xsm:grid xsm:grid-cols-2 xsm:px-1 xsm:gap-5 sm:grid sm:grid-cols-8 sm:mt-5 sm:mb-5'>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'> <img src={TS} alt="" width="30%" className='ml-10 mt-3  '/>TypeScript</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={firebase} alt="" width="30%" className='ml-10 mt-3 '/>Firebase</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={boot} alt="" width="30%" className='ml-10 mt-3 '/>Bootstrap</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={CICD} alt="" width="30%" className='ml-10 mt-3 '/>CI/CD</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={Docker} alt="" width="30%" className='ml-10 mt-3'/>Docker</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={postgre} alt="" width="30%" className='ml-10 mt-3'/>Postgre</h1>
          <h1 className='text-blue-600 text-[20px] shadow-xl items-center text-center'><img src={vuejs} alt="" width="30%" className='ml-10 mt-3'/>Vue JS</h1>

         

        </div>
        </div>
        </div>
        <div>
          <Aboutme/>
          {showNavbar && <Footer/>}
        </div>
    </>

    
  )
}

export default Skills