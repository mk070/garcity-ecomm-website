import * as React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import { AppBar, Typography, Box, CssBaseline, Button, Toolbar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, redirect } from 'react-router-dom'; // Import Link component
import Logo from '../assets/images/logo.png'; // Import your logo
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import ExpandMoreIcon

const drawerWidth = 240;
const navItems = ['Home', 'Product', 'Gallery', 'About', 'Contact'];

export const Nav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleDrawerclose = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleProductMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProductMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProductMenuItemClick = () => {
    setMobileOpen((prevState) => !prevState);
    setAnchorEl(null);
  };

  const handlelink = () =>{
    console.log("Link clicked");
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', marginBottom: '64px' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#FFF4F1', color: '#372B29' }} position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="Logo" style={{ width: '110px' }} />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ color: '#372B29', display: { sm: 'none' } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <React.Fragment key={item}>
                {item === 'Product' ? (
                  <React.Fragment>
                    <Button
                      component={Link} // Use Link component for routing
                      to="/product" 
                      aria-controls={anchorEl ? 'product-menu' : undefined}
                      aria-haspopup="true"
                    
                      onClick={handlelink}
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
                    <IconButton onMouseEnter={handleProductMenuOpen} >
                      <ExpandMoreIcon />
                    </IconButton>

                    <Menu
                      id="product-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleProductMenuClose}
                    >
                      <MenuItem onClick={handleProductMenuItemClick} component={Link} to="/product/men'swear">Mens wear</MenuItem>
                      <MenuItem onClick={handleProductMenuItemClick} component={Link} to="/product/women'swear">Womens wear</MenuItem>
                      <MenuItem onClick={handleProductMenuItemClick} component={Link} to="/product/kid'swear">Kids wear</MenuItem>
                      <MenuItem onClick={handleProductMenuItemClick} component={Link} to="/product/sportswear">Sports wear</MenuItem>
                    </Menu>
                  </React.Fragment>
                ) : (
                  <Button
                    key={item}
                    component={Link}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
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
                )}
              </React.Fragment>
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
          <Box sx={{ textAlign: 'center', backgroundColor: '', color: 'black' }}>
            <Box sx={{ my: 2 }}>
              <img src={Logo} alt="Logo" style={{ width: '100px' }} />
            </Box>
            <Divider />
            <List>
              {navItems.map((item) => (
                
                <ListItem key={item} disablePadding>
                {item === 'Product' ? (
                  <>
                  <ListItemButton
                  aria-controls={anchorEl ? 'product-menu-mobile' : undefined}
                  aria-haspopup="true"
                  component={Link} // Use Link component for routing
                  to="/product" 
                  onClick={handleDrawerclose}
                  sx={{
                    textAlign: 'start',
                    fontFamily: ['Satoshi-Regular', 'sans-serif'].join(','),
                    '&:hover': {
                      backgroundColor: '#FFF4F1', // Add hover effect
                    },
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
                <IconButton onMouseEnter={handleProductMenuOpen} onMouseLeave={handleProductMenuClose } >
                  <ExpandMoreIcon />
                </IconButton>
                </>
                
                ) : (
                  <ListItemButton
                    component={Link}
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} // Define routes
                    onClick={handleDrawerclose} // Close drawer when any other item is clicked
                    sx={{
                      textAlign: 'start',
                      fontFamily: ['Satoshi-Regular', 'sans-serif'].join(','),
                      '&:hover': {
                        backgroundColor: '#FFF4F1', // Add hover effect
                      },
                    }}
                  >
                    <ListItemText primary={item} />
                  </ListItemButton>
                )}
              </ListItem>
              
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

Nav.propTypes = {
  window: PropTypes.func,
};

