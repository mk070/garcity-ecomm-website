import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Sidebar } from './Sidebar';
import { Appbar } from './Appbar';


 const Dashboard = () => {
  
  return (
    
    <>
      <Appbar />
      <Sidebar />
      <Box sx={{m:{sm:'100px 0 0 300px'},height:{sm:'80vh'}}}>
        <Typography variant='h4'> Hi ,Welcome to Garcity Admin panel</Typography>
        <Typography variant='h6' sx={{mt:{sm:'30px'}}}> Make sure to upload images lessthan '400kb' <span style={{color:'green',fontWeight:'bolder',fontSize:'26px'}}>Minimum size Maximum speed</span></Typography>
        <Typography variant='h6'sx={{mt:{sm:'30px'}}}><a href="https://ezgif.com/jpg-to-avif">Use this tool to compress your images and then upload</a></Typography>
        
      </Box>
    </>
    
  );
};

export default Dashboard;