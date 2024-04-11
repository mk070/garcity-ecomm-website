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
      
    </>
    
  );
};
