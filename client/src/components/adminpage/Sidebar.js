import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'; // Gallery Icon
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Sidebar = ({ setShowGallery }) => {
  const handleGalleryClick = () => {
    setShowGallery(true); // Set showGallery to true when Gallery is clicked
  };
  const handleDashboardClick = () => {
    setShowGallery(false); // Set showGallery to true when Gallery is clicked
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
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
               <FavoriteIcon /> 
            </ListItemIcon>
            <ListItemText primary="PopularCoollection" />
          </ListItem>
          <ListItem button >
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
