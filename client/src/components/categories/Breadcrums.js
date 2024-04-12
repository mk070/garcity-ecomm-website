import * as React from 'react';
import {Typography, Box} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';


export default function IconBreadcrumbs({lastBreadcrumb} ) {
  return (
    <Box sx={{paddingLeft: { sm:'110px', xs:'15px' }, mb:{sm:'30px'}, mt:{xs:'30px'}}}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/product"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Product
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {lastBreadcrumb}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
