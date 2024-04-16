import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'; // Gallery Icon
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WebStoriesIcon from '@mui/icons-material/WebStories';
import FitbitIcon from '@mui/icons-material/Fitbit';

export const Sidebar = ({}) => {


  return (
    <>
      <Box
        component="nav"
        sx={{ width: 240, flexShrink: 0,height:{sm:'100vh'},backgroundColor:"#FFF4F1",position:"fixed" }}
      >
        <List>
          <ListItem button  component={Link} to="/only-admin/dashboard" > 
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/only-admin/Managegallery" > {/*onClick={handleGalleryClick}*/}
            <ListItemIcon>
              <PhotoLibraryIcon /> {/* Gallery Icon */}
            </ListItemIcon>
            <ListItemText primary="Gallery" />
          </ListItem>
          <ListItem button component={Link} to="/only-admin/ManagePopularWork">
            <ListItemIcon>
               <WebStoriesIcon /> 
            </ListItemIcon>
            <ListItemText primary="PopularWork" />
          </ListItem>
          <ListItem button  component={Link} to="/only-admin/ManageYoutubevideo">
            <ListItemIcon>
               <YouTubeIcon />
            </ListItemIcon>
            <ListItemText primary="Youtube Video " />
          </ListItem>
          <ListItem button component={Link} to="/only-admin/Managelogo">
            <ListItemIcon>
               <FitbitIcon />
            </ListItemIcon>
            <ListItemText primary="Clients Logo " />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
