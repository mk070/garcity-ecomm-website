import React, { useEffect, useState } from 'react';
import { Box,useMediaQuery, Typography } from '@mui/material';


// Separate component for YouTube video
const SingleYoutubeVideo = ({ videoUrl }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  // Function to extract video ID from YouTube URL
  const getVideoId = (url) => {
    if (typeof url !== 'string') {
      return null; // If the url is not a string, return null
    }

    const videoIdRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(videoIdRegex);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);

  if (!videoId) {
    return <div>Error: Invalid YouTube URL</div>;
  } 

  return (
    <Box sx={{ p: { sm: "0 15px" ,xs:"0 20px"}, borderRadius:{xs:'20px'}, width: "100%", mb: { sm: "50px" ,xs:"30px"} }}>
      {/* Render YouTube video using the extracted video ID */}
      <iframe
        style={{ boxShadow: "5px 5px 5px #c7c7c7,-5px -5px 5px #f9f9f9", border: "2px solid #" ,borderRadius:isSmallScreen ? '20px' : '30px'}}
        width="100%"
        height={ isSmallScreen? "230px" :"315" }
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export const YoutubeVideo = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await fetch('/api/YoutubeLink/link');
        if (!response.ok) throw new Error('Could not get links');
        const linksData = await response.json();
        // Extracting video URLs from the fetched data
        const videoUrls = linksData.map(linkData => linkData.link);
        setLinks(videoUrls);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLinks();
  }, []);

  if (!links || links.length === 0) {
    return <div>No videos to display</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: { sm: "column",xs:'column' }, alignItems: "center", justifyContent: "center" }}>
      <Typography fontFamily={"integral-Regular  !important"} sx={{ fontSize: { sm: '32px' }, mb: { sm: '40px' ,xs:'30px'}, textDecorationLine: "overline" }}>Check This Out</Typography>
      <Box sx={{ display: 'flex', borderRadius:{xs:'20px'}, flexDirection: { sm: 'row' ,xs:"column"}, width: "98vw" }}>
        {/* Render multiple YouTube videos */}
        {links.map((videoUrl, index) => (
          <SingleYoutubeVideo key={index} videoUrl={videoUrl} />
        ))}
      </Box>
    </Box>
  );
};
