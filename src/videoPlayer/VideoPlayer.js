
import './VideoPlayer.css';
import Sidebar from '../Sidebar/Sidebar';
import Video from '../video/Video';
import React, { useState } from 'react';

export default function VideoPlayer()
{
    const [currentVideoId,setCurrentVideoId] = useState('bm0OyhwFDuY');
 
 
  const handleVideoClick = (id) => {
    setCurrentVideoId(id);
  };
    return (<>
     <div className="App">
        <div className="flexone">
        <Video presentVideoId={currentVideoId}></Video>
        </div>
        <div className="flextwo">
        <Sidebar videoHandler={handleVideoClick}></Sidebar>
        </div>
      </div>
    </>);
}