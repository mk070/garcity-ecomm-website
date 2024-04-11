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

export const Sidebar = ({ setShowGallery, setshowPopularWork ,setshowYoutube,setshowClientLogo}) => {

  const handleGalleryClick = () => {
    setShowGallery(true); 
    setshowYoutube(false)
    setshowPopularWork(false)
    setshowClientLogo(false)

  };
  const handleDashboardClick = () => {
    setShowGallery(true); 
    
   
  };
  const handlePopularWorkClick = () => {
    setshowPopularWork(true)
    setShowGallery(false); 
    setshowYoutube(false)
    setshowClientLogo(false)


  };
  const handleYoutubeClick = () => {
    setshowYoutube(true)
    setShowGallery(false); 
    setshowPopularWork(false)
    setshowClientLogo(false)

  };
  const handleClientsLogoClick = () => {
    setshowClientLogo(true)
    setshowYoutube(false)
    setShowGallery(false); 
    setshowPopularWork(false)

  };

  return (
    <>
      <Box
        component="nav"
        sx={{ width: 240, flexShrink: 0, pt: { sm: '65px' },height:{sm:'100vh'},backgroundColor:"#FFF4F1" }}
      >
        <List>
          {/* <ListItem button  component={Link} to="/gallery" > onClick={handleDashboardClick} 
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem> */}
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
