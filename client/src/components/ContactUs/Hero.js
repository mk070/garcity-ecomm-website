import React from 'react'
import {Box, Typography,Button} from '@mui/material'

export const Hero = () => {
  return (
    <Box sx={{height:{sm:"100vh"},}}>

            <Box>
                 <Typography>Hello Let's work Together</Typography>
                 <Typography>We are always happy to help you! Give us a call or Whatsapp App or e-mail us and we’ll have a happy person get back to you right away.</Typography>
                 <a href="https://example.com" style={{ textDecoration: 'none' }}> {/* Replace 'https://example.com' with your actual URL */}
                    <Button
                        sx={{
                        display: { xs: 'none', sm: 'flex' },
                        background: '#DF9573',
                        mt: { xs: '0px', sm: '30px' },
                        borderRadius: '30px',
                        '&:hover': {
                            backgroundColor: '#1E1E1E',
                            color: '', // Add hover effect
                            transition: 'background-color 0.3s ease-in-out',
                        },
                        }}
                        variant="contained"
                    >
                        Know More
                    </Button>
                 </a>
            </Box>
            <Box></Box>
    </Box>    
)
}
