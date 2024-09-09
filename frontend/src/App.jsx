import { useState } from 'react'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Homepage from './components/pages/Homepage'
import Aboutme from './components/pages/Aboutme';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import BlogsHome from './blogs/BlogsHome';
import Contactme from './components/pages/Contactme';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Homepage/>
  },
  {
  path: '/about',
  element: <Homepage/>
  },
  {
    path: '/skills',
    element: <Skills/>
  },
  {
    path: '/portfolio',
    element:<Portfolio/>
  },
  {
    path:'/blogs',
    element:<BlogsHome/>
  },
  {
    path: '/contact',
    element: <Contactme/>
  }
])
function App() {

  return (
   
<RouterProvider router={appRouter} />
      
  )
}

export default App
