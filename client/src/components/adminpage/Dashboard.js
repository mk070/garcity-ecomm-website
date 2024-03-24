import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Sidebar } from './Sidebar';
import { Appbar } from './Appbar';
import { ManageGallery } from './ManageGallery';

export const Dashboard = () => {
  const [showGallery, setShowGallery] = React.useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar setShowGallery={setShowGallery} />
        
        {/* Main content */}
        <Box sx={{ flexGrow: 1, backgroundColor: '#f0f0f0' }}>
          <Appbar />
          {/* Conditionally render ManageGallery if showGallery is true */}
          {showGallery ? <ManageGallery /> : (
            <Box sx={{ p: 3 ,mt:{sm:'65px'}  }}>
              <Typography variant="h4" gutterBottom>
                Welcome to Admin Dashboard
              </Typography>
              <Typography paragraph>
                Here you can manage your content, users, settings, etc.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
