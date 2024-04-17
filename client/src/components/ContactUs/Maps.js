import React from 'react';
import { Box } from '@mui/material';

const Maps = () => {
    return (
        <Box sx={{ height: {sm:'70vh',xs:'60vh'},padding:{sm:"0 130px",xs:'0 10px'} ,display:"flex", alignItems:"center",marginBottom:"100px"}}
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.272586301468!2d80.08921343854117!3d13.064597496814866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528b17882535a5%3A0xa7bf84d2eaa7a035!2sSri%20Krishna%20Garden!5e0!3m2!1sen!2sin!4v1712334770410!5m2!1sen!2sin"
                title="Google Map"
                allowfullscreen=""
                loading="lazy"
                width={'100%'}
                height={'100%'}
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </Box>
    );
};

export default Maps;


