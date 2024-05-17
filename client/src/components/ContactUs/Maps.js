import React from 'react';
import { Box } from '@mui/material';

const Maps = () => {
    return (
        <Box sx={{ height: {sm:'78vh', xs:'60vh'}, padding:{sm:"0 130px", xs:'0 10px'}, display:"flex", alignItems:"center", marginBottom:"100px"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20801.11726558087!2d77.215651281353!3d11.014696552684017!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ab59dc85d5b3%3A0x1ddba5a8da46fdc0!2sGARCITY!5e0!3m2!1sen!2sin!4v1713620971481!5m2!1sen!2sin"        width="100%" 
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</Box>

    
    );
};

export default Maps;


