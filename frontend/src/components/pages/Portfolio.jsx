import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import img1 from './../../assets/projects/mobileapp/unnamed_2.png'
import tc from './../../assets/projects/mobileapp/tc.png'
import pe from './../../assets/projects/mobileapp/pureease.png'
import jh from './../../assets/projects/mobileapp/jobhunt.png'
import pf from './../../assets/projects/mobileapp/pf.png'




import Footer from '../shared/Footer'; // Uncomment when using Footer

// Dummy project data
const projects = [
  {
    id: 1,
    title: 'Allsomsis - Mobile App',
    category: 'Mobile App',
    image: img1 , // Replace with actual image path
    link: 'https://play.google.com/store/apps/details?id=com.byteorg.allsmosis&pcampaignid=web_share' ,// Replace with the actual project link
  },
  {
    id: 2,
    title: 'Techchaps website',
    category: 'Web App',
    image: tc, // Replace with actual image path
    link: 'techchaps.com', // Replace with the actual project link
    imageWidth: '20px'
  },
  {
    id: 3,
    title: 'PureEase - ECommerce ',
    category: 'Web App',
    image: pe, // Replace with actual image path
    link: 'https://pure-ease.vercel.app/', // Replace with the actual project link
    imageWidth: '20px'
  },
  {
    id: 4,
    title: 'JobHunt ',
    category: 'Web App',
    image: jh, // Replace with actual image path
    link: 'https://jobhuntwebapp.vercel.app/', // Replace with the actual project link
    imageWidth: '20px'
  }, {
    id: 5,
    title: 'Portfolio  ',
    category: 'Web App',
    image: pf, // Replace with actual image path
    link: '', // Replace with the actual project link
    imageWidth: '20px'
  },


  // Add more projects as needed
];

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter projects by category
  const filterProjects = () => {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='bg-orange-50 min-h-screen'>
        <div className='text-orange-400 text-[30px] font-bold py-4 text-center'>
          <h1>PORTFOLIO</h1>
        </div>

        {/* Category Filter */}
        <div className='flex justify-center gap-4 mb-6'>
          <button
            className={`px-4 py-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button
            className={`px-4 py-2 ${selectedCategory === 'Mobile App' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory('Mobile App')}
          >
            Mobile Apps
          </button>
          <button
            className={`px-4 py-2 ${selectedCategory === 'Web App' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setSelectedCategory('Web App')}
          >
            Web Apps
          </button>
        </div>

        {/* Projects Display */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8'>
          {filterProjects().map(project => (
            <div key={project.id} className='bg-white p-6 rounded-lg shadow-md'>
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className=' object-cover rounded-md mb-4 mx-[100px] ' width='50%'
              />
              
              {/* Project Title */}
              <h3 className='text-lg font-semibold'>{project.title}</h3>

              {/* Project Category */}
              <p className='text-gray-500 mb-4'>{project.category}</p>

              {/* Project Link */}
              <a 
                href={project.link} 
                className='text-blue-500 hover:text-blue-700 underline' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Uncomment when using Footer */}
      <Footer />
    </>
  );
}

export default Portfolio;