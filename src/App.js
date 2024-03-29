import React, { useState } from 'react';
import './App.css';

import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Subjects from './Subjects/Subjects';
import Courses from './courses/Courses';
import VideoPlayer from './videoPlayer/VideoPlayer';
import HomePage from './HomePage/HomePage';
import CourseList from './courselist/CourseList';
import AfterSubmit from './AfterSubmit';



function App() {
  
   return (
    <div >
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path = "/HomePage" element = {<HomePage/>}></Route>
            <Route path = "/Subjects" element = {<Subjects/>}></Route>
            <Route path = "/Courses" element = {<Courses/>}></Route>
            <Route path = "/CourseList" element = {<CourseList/>}></Route>
            <Route path = "/VideoPlayer" element = {<VideoPlayer/>}></Route>
          </Routes>
      </BrowserRouter>

      {/* <HomePage></HomePage> */}
      {/* <VideoPlayer></VideoPlayer> */}
       {/* <Subjects></Subjects> */}
       {/* <Courses></Courses> */}

       {/* <CourseList></CourseList> */}

       {/* <AfterSubmit></AfterSubmit> */}
       
       
       <Footer></Footer>
       
    </div> 

    
  );
}

export default App;
