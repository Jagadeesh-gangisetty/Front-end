import React, { useState } from 'react';
import YouTube from 'react-youtube';
import sections from '../Sidebar/Data.js';
export default function Video({presentVideoId}){
  const [videos, setVideos] = useState([
    'QFaFIcGhPoM',
    '9hb_0TZ_MVI',
    '9VIiLJL0H4Y'
  ]);
  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // const handleVideoEnd = () => {
  //   // Check if there are more videos to play
  //   if (currentVideoIndex < videos.length - 1) {
  //     // Increment the current video index
  //     setCurrentVideoIndex(currentVideoIndex + 1);
  //   } else {
  //     // Reset to the first video if the last one ended
  //     setCurrentVideoIndex(0);
  //   }
  // };
  

  return (
    <>
    <div >
    <iframe width={1147} height={600}   src={`https://www.youtube.com/embed/${presentVideoId}`}  allowFullScreen></iframe>

      
    </div>
    </>
  );
}


