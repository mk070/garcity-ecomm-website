import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Sidebar } from './Sidebar';
import { Appbar } from './Appbar';
import { ManageGallery } from './ManageGallery';
import  {ManageYoutubeVideo}  from './ManageYoutubeVideo';
import { ManageClientLogos } from './ManageClientLogos';
import { ManagePopularWork } from './ManagePopularWork';
import {Outlet} from "react-router-dom"

export const Dashboard = () => {
  
  return (
    
    <>
      <Appbar />
      <Sidebar />
      <Box sx={{m:{sm:'100px 0 0 300px'},height:{sm:'80vh'}}}>
        <Typography variant='h4'> Hi ,Welcome to Garcity Admin panel</Typography>
        <Typography variant='h6'> make sure to upload images lessthan '400kb'</Typography>
        Typo
      </Box>
    </>
    
  );
};
