import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function Footer() {
   
    const [isHoveredIndex,setIsHoveredIndex] = React.useState();
    const arr1 = ['Home','About Us','Contact Us','Get Started'];
    const arr2 = ['App design','Web design','Logo design','Banner design'];
    const arr3 = ['Profile','My Account','Preferences','Purchase'];
    const arr4 = ['HTMl & CSS','JavaScript','SpringBoot','Angular'];

    const handleMouseEnter = (index) => {
       
        setIsHoveredIndex(index);
      };
    
    const  handleMouseLeave = () => {
        
      };


  return (
    <>
  <div style={{marginTop:'100px'}}>
    <div className='one'>
    <div className='two'>
        <div className='three'>RKR IT</div>
        <div className='fb'><FacebookIcon size={32}/></div>
        <div className='tw'><TwitterIcon size={32}/></div>
        <div className='In'><FaInstagram size={25} /></div>
        <div className='Li'><FaLinkedin size = {25}/></div>
    </div>
    <div className = 'four'></div>
    <div className='flex'>
    <div>
        <div className='com'>Company</div>
            {arr1.map((ele, index) => (
                <div 
                 key={index}
                 className={`Gs ${isHoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                 >{ele}</div>
            ))}
    </div>
    <div>
        <div className='ser'>Services</div>
        {arr2.map((ele, index) => (
                <div 
                key={index}
                className={`Ad ${isHoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                >{ele}</div>
            ))}
    </div>
    <div>
         <div className='Acc'>Account</div>
         {arr3.map((ele, index) => (
                <div 
                 key={index}
                 className={`Pu ${isHoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                 >{ele}</div>
            ))}
    </div>
    <div>
        <div className='Cou'>Courses</div>
        {arr4.map((ele, index) => (
                <div 
                 key={index}
                 className={`Ps ${isHoveredIndex === index ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                 >{ele}</div>
            ))}
    </div>
    <div>
        <div className='Sub'>Subscribe</div>
        <div><input type = "text" className='tf' placeholder = "Enter your email"></input></div>
        <div><button className='btn'>Subscribe</button></div>
    </div>
    </div>
    </div>
    <div className='bottom'>
        <div className='bottomone'>Copyright 2024 CodingStella</div>
        <div className='bottomtwo'>All rights reserved</div>
        <div className='bottomthree'>Privacy Policy</div>
        <div className='bottomfour'>Terms & Conditions</div>
    </div>
    </div>
    </>
  )
}

export default Footer