import React, { useState, useEffect } from 'react';
import HeroSectionPitcture from '/src/assets/homepage/headerpic.png';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Software Engineer", "Backend Engineer", "Frontend Engineer", "Full Stack Engineer"];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause after typing the full word
        setTypingSpeed(50); // Speed up when deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(50); // Reset speed for typing
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <div>
      <div className='bg-gradient-to-r from-blue-300 to-[#FF9F5F] md:grid md:grid-cols-2 xsm:grid xsm:grid-cols-2 '>
        <div>
          <img 
            src={HeroSectionPitcture} 
            alt="Header" 
            width="70%" 
            className='md:ml-[500px] md:mt-[100px]  xsm:ml-[190px] xsm:mt-[230px]' 
          />
        </div>
        <div className='md:flex md:flex-col md:items-start md:ml-10 xsm:flex xsm:flex-col xsm:items-center xsm:ml-[200px]'>
          <h1 className='text-white md:text-[50px] md:font-semibold md:ml-[-480px] mt-[100px] xsm:text-[25px] xsm:ml-[-480px] '>
            HI, I am
          </h1>
          <p className='bg-gradient-to-r from-blue-300 to-[#FF9F5F] text-white md:text-[40px] font-semibold rounded-md md:shadow-md md:ml-[-500px] md:px-5 xsm:text-[25px] xsm:ml-[-480px]'>
            ANISUL ISLAM
          </p>
          <span className=' text-[#faece3] md:text-[30px] font-semibold mt-4 md:ml-[-470px] xsm:text-[20px]' >
             {text} <span className=' md:ml-[2px] text-orange-300 xsm:ml-[600px] '>|</span>
          </span>
          <div className='grid grid-cols-4 gap-4 mt-10 ml-[-400px] text-white xsm:mr-[100px] xsm:ml-[-380px] xsm:mt-16'  >
          <h1 className='md:shadow-2xl'> <a href="mailto:anis.inbox10@gmail.com"> <AlternateEmailIcon className="text-white hover:text-orange-400 transition-all duration-300 ease-in-out shadow-xl bg-blue-500 rounded-md px-1"  /> </a> </h1>
          <h1><a href="https://www.github.com/anisulislam10"> <GitHubIcon className="md:text-white md:hover:text-orange-400 md:transition-all md:duration-300 md:ease-in-out shadow-xl bg-blue-500 md:rounded-md px-1" /></a> </h1>
          <h1> <a href="https://linkedin.com/in/ianisulislam"><LinkedInIcon  className="md:text-white md:hover:text-orange-400 md:transition-all md:duration-300 md:ease-in-out md:shadow-xl bg-blue-500 md:rounded-md px-1" /> </a></h1>
          <h1><a href="https://facebook.com/ianisulislam"><FacebookIcon  className="md:text-white md:hover:md:text-orange-400 md:transition-all md:duration-300 md:ease-in-out md:shadow-xl bg-blue-500 md:rounded-md px-1" /></a></h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
