import React, { useEffect, useState } from 'react';
import { Box,useMediaQuery, Typography, linkClasses } from '@mui/material';
import { Link } from 'react-router-dom';


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
    <Box sx={{ p: { sm: "0 15px" ,xs:"0 40px"}, borderRadius:{xs:'20px'}, width: "100%", mb: { sm: "50px" ,xs:"10px"} }}>
      {/* Render YouTube video using the extracted video ID */}
      <iframe
        style={{ boxShadow: "5px 5px 5px #c7c7c7,-5px -5px 5px #f9f9f9", border: "2px solid #" ,borderRadius:isSmallScreen ? '20px' : '30px'}}
        width="100%"
        height={ isSmallScreen? "200px" :"315" }
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
  const [defaultlinks ,setdefaultlinks] =useState([])
  const defaultVideoUrls = [
    'https://youtu.be/J62tZyoalUw',
    'https://youtu.be/0BhOR91u4O4',
    'https://youtu.be/J62tZyoalUw',
  ];
  
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
        setLinks(defaultVideoUrls);

      }
    };
    fetchLinks();
  }, []);

  if (!links || links.length === 0) {
    return <div>No videos to display</div>;
  }

  return (
    <Box sx={{ display: "flex", flexDirection: { sm: "column",xs:'column' }, alignItems: "center", justifyContent: "center" ,mt:{sm:"60px"} } }>
      <Typography fontFamily={"integral-Regular  !important"} sx={{ fontSize: { sm: '32px',xs:"24px" }, mb: { sm: '40px' ,xs:'30px'}, textDecorationLine: "overline" }}>Check This Out</Typography>
    {links.length < 0 ?
      ( <Box sx={{ display: 'flex', borderRadius:{xs:'20px'}, flexDirection: { sm: 'row' ,xs:"column"}, width: "98vw" }}>
        {/* Render multiple YouTube videos */}
        {links.map((videoUrl, index) => (
          <SingleYoutubeVideo key={index} videoUrl={videoUrl} />
        ))}
      </Box>):(
        ( <Box sx={{ display: 'flex', borderRadius:{xs:'20px'}, flexDirection: { sm: 'row' ,xs:"column"}, width: "98vw" }}>
        {/* Render multiple YouTube videos */}
        {links.map((videoUrl, index) => (
          <SingleYoutubeVideo key={index} videoUrl={videoUrl} />
        ))}
      </Box>)
      )}
      <Typography
        fontFamily="integral-Regular !important"
        sx={{
          fontSize: { sm: '28px', xs: '20px' },
          mb: { sm: '80px', xs: '60px' },
          textDecorationLine: "none"
        }}
      >
        <a href="http://youtube.com/@Garcitystyle" style={{ fontFamily:"inherit",textDecoration: 'none', color: 'inherit' }}>For more ...</a>
      </Typography>

    </Box>
  );
};
