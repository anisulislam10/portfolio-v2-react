import { Book, Code, CodeOff, CodeSharp, ContactPage, Email, Face2Outlined, FacebookRounded, Home, Instagram, LinkedIn, LocationCity, WhatsApp, X, YouTube } from '@mui/icons-material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Footer({showNavbar = true}) {
  return (
    <div>
      <div className='grid grid-cols-3 mt-7 content-center text-center bg-blue-400 text-white px-[70px] xsm:grid xsm:grid-cols-2 xsm:pr-[10px] xsm:text-start xsm:items-start'>

        <div>
          <h1 className='font-semibold text-[20px] underline '>Quick Links</h1>
          <ul className='text-start mt-4  ml-[130px] xsm:ml-[10px]'>
            <li> <Home/><Link to={"/"}> Home</Link></li>
            <li> <Code/><Link to={"/skills"}>Skills</Link></li>
            <li><Book/> <Link to={"/blogs"}>Blogs</Link></li>
            <li> <CodeSharp/><Link to={"/portfolio"}>Portfolio</Link></li>
            <li> <ContactPage/><Link to={"/contact"}> Contact</Link></li>

          </ul>
        </div>
        <div>
          <h1 className='font-semibold text-[20px] underline'>Contact</h1>
          <ul className='text-start mt-4 ml-[150px] xsm:ml-[5px]'>
           <p> <Email/><a href="mailto:anis.inbox10@gmail.com">anis.inbox10@gmail.com</a></p>
           <p> <WhatsApp/>+92 343 92 75550</p>
           <p> <LocationCity/>DHA #2 , Islamabad </p>
            <p><LocationCity/><a href="">KPK Chitral</a></p>
          </ul>



        </div>
        <div >
          <h1 className='font-semibold text-[20px] underline xsm:mt-6'>Follow </h1>
          <ul className='text-start mt-4  ml-[150px] xsm:ml-[5px]'>
            <li><FacebookRounded /><a href="https://facebook.com/ianisulislam">Facebook</a></li>
            <li><LinkedIn /> <a href="https://linkedin.com/ianisulislam">LinkedIn</a></li>
            <li><Instagram /><a href="https://instagram.com/ianisulislam">Instagram</a></li>
            <li><X /> <a href="https://twitter.com/ianisulislam">X(Twitter)</a></li>
            <li><YouTube /><a href="">Youtube</a></li>

          </ul>
        </div>



      </div>
      <div className='bg-blue-500 text-center text-white'>
        Designed with ❤ by anis © 2024 
      </div>
    </div>
  )
}

export default Footer