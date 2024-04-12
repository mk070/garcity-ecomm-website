import React from 'react';
import { Box,Typography } from '@mui/material';

// Separate component for YouTube video
const SingleYoutubeVideo = ({ videoUrl }) => {
  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <div>Error: Invalid YouTube URL</div>;
  }

  return (
    <Box sx={{p:{sm:"0 15px"},width:"100%",mb:{sm:"50px"}}}>
      {/* Render YouTube video using the extracted video ID */}
      <iframe
        style={{ boxShadow:"5px 5px 5px #c7c7c7,-5px -5px 5px #f9f9f9",border:"2px solid #"}}
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export const YoutubeVideo = ({ videoUrls }) => {
  if (!videoUrls || videoUrls.length === 0) {
    return <div>No videos to display</div>;
  }

  return (
    <Box sx={{display:"flex",flexDirection:{sm:"column"},alignItems:"center",justifyContent:"center"}}>
    <Typography fontFamily={"integral-Regular  !important"} sx={{fontSize:{sm:'32px'},mb:{sm:'40px'},textDecorationLine:"overline"}}>Check This Out </Typography>
    <Box sx={{ display: 'flex', flexDirection: { sm: 'row' },width:"98vw" }}>
      {/* Render multiple YouTube videos */}
      {videoUrls.map((videoUrl, index) => (
        <SingleYoutubeVideo key={index} videoUrl={videoUrl} />
      ))}
    </Box>
    </Box>
  );
};

// Sample video URLs



