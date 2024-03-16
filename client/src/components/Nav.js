import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography, Box, CssBaseline, Button, Toolbar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link component
import Logo from '../assets/images/logo.png'; // Import your logo

const drawerWidth = 240;
const navItems = ['Home', 'Product', 'Gallery', 'About', 'Contact'];

export const Nav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', backgroundColor: '', color: 'black' }}>
      <Box sx={{ my: 2 }}>
        <img src={Logo} alt="Logo" style={{ width: '100px' }} />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            {/* Use Link component for routing */}
            <ListItemButton
              component={Link}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Define routes
              sx={{
                textAlign: 'center',
                fontFamily: ['Satoshi-Regular', 'sans-serif'].join(','),
                '&:hover': {
                  backgroundColor: '#FFF4F1', // Add hover effect
                },
              }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' , marginBottom:'64px'}}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#FFF4F1', color: '#372B29' }} position="fixed">
        <Toolbar>
          <Box sx={{ mr: 2 , flexGrow:1,display: { sm: 'block' } }}>
            <img src={Logo} alt="Logo" style={{ width: '110px' }} />
          </Box>
          {/* Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ ml: 'auto', color: '#372B29', display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Define routes
                sx={{
                  color: '#372B29',
                  '&:hover': {
                    backgroundColor: '#FFF4F1', // Add hover effect
                  },
                  fontFamily: ['Satoshi-Regular', 'sans-serif'].join(','),          
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Nav.propTypes = {
  window: PropTypes.func,
};
