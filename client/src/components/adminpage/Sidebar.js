import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'; // Gallery Icon
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Sidebar = ({ setShowGallery, setshowPopularWork ,setshowYoutube}) => {

  const handleGalleryClick = () => {
    setShowGallery(true); 
    setshowYoutube(false)
    setshowPopularWork(false)

  };
  const handleDashboardClick = () => {
    setShowGallery(true); 
    
   
  };
  const handlePopularWorkClick = () => {
    setshowPopularWork(true)
    setShowGallery(false); 
    setshowYoutube(false)


  };
  const handleYoutubeClick = () => {
    setshowYoutube(true)
    setShowGallery(false); 
    setshowPopularWork(false)


  };

  return (
    <>
      <Box
        component="nav"
        sx={{ width: 240, flexShrink: 0, pt: { sm: '65px' } }}
      >
        <List>
          <ListItem button onClick={handleDashboardClick}>
            {/* Use Link component from react-router-dom for Dashboard */}
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button onClick={handleGalleryClick}>
            <ListItemIcon>
              <PhotoLibraryIcon /> {/* Gallery Icon */}
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem button onClick={handlePopularWorkClick}>
            <ListItemIcon>
               <FavoriteIcon /> 
            </ListItemIcon>
            <ListItemText primary="PopularWork" />
          </ListItem>
          <ListItem button  onClick={handleYoutubeClick}>
            <ListItemIcon>
               <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="Youtube Video " />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
