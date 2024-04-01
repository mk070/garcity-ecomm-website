import styled from '@emotion/styled';
import { Typography, useMediaQuery, Container, Box, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import React, { useRef } from 'react';
import tshirts from '../../assets/images/printing/tshirts.png'; 



const Img = styled.img`
  width:350px;
  height: 350px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

export const AnimatedForm = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const multilineRef = useRef(null);

    const handleRadioChange = (event) => {
        if (event.target.value === 'Other') {
            multilineRef.current.focus();
        }
    };  

    return (
        <>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '900px',
                border: '1px solid',
                marginTop: '100px',
            }}>
                <Img src={tshirts} />
           
                <Typography
                    variant='h3'
                    sx={{
                        fontSize: isSmallScreen ? '10px' : '30px',
                        fontFamily: ['integral-Regular'].join(','),
                        marginBottom: '50px',
                    }}
                >
                    Get in touch
                </Typography>
                
                <Box border={1} sx={{
                    height: '400px',
                    width: '700px',
                    borderRadius: '10px',
                    border: '2px solid',
                }}>
                    <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 900,
                        marginLeft: '30px',
                        marginTop: '10px',
                    }}>
                        Personal Info
                    </Typography>
                    <hr style={{ width: '80%', marginTop: '10px', marginLeft: '30px', borderColor: '#FFF4F1', borderWidth: '2px' }} />

                    <Box my={5} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: '10px',
                    }}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue=""
                            size='medium'
                            color='secondary'
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            size='medium'
                            InputProps={{
                                style: {
                                    borderColor: '#CCC',
                                    '&:focused': { borderColor: '#ff0000' },
                                    '&:active': { borderColor: '#ff0000' },
                                },
                            }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Contact"
                            defaultValue=""
                            size='medium'
                            InputProps={{
                                style: {
                                    borderColor: '#CCC',
                                    '&:focused': { borderColor: 'orange' },
                                    '&:active': { borderColor: 'red' },
                                },
                            }}
                        />
                    </Box>
                    {/* <Typography sx={{
                        fontSize: '20px',
                        fontWeight: 900,
                        marginLeft: '30px',
                        marginTop: '10px',
                    }}>
                        Project Info
                    </Typography>
                    <hr style={{ width: '80%', marginTop: '10px', marginLeft: '30px', borderColor: '#FFF4F1', borderWidth: '2px' }} />
                    
                    <Box  sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        gap: '50px',
                        marginTop:'10px'
                    }}>
                        <Box flexDirection={'row'}>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 900,
                                marginLeft: '0px',
                                marginTop: '10px',
                            }}>
                                Tell us more about your company
                            </Typography>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel value="A Startup" control={<Radio />} label="A Startup" />
                                    <FormControlLabel value="Retailer" control={<Radio />} label="Retailer" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box flexDirection={'row'}>
                            <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 900,
                                marginLeft: '0px',
                                marginTop: '10px',
                            }}>
                                Tell us more about your company
                            </Typography>
                            <FormControl>
                                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="none"
                                    name="radio-buttons-group"
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box >   */}
                    <Typography sx={{
                                fontSize: '18px',
                                fontWeight: 900,
                                marginLeft: '30px',
                                marginTop: '50px',
                            }}>
                                Tell us more about your company
                            </Typography>
                            <TextField
                                fullWidth 
                                id="outlined-multiline-static"
                                label="Others"
                                multiline
                                rows={5}
                                inputRef={multilineRef}
                                sx={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                    marginTop: '10px',
                                    textAlign: 'center',
                                    width: '95%', // Adjust the width here
                                }}
                                />
                                <Button sx={{
              background:'#DF9573',
              mt: isSmallScreen ? '20px' : '60px',
              borderRadius:'30px',
              '&:hover': {
                backgroundColor: '#1E1E1E', 
                color:'',// Add hover effect
                transition: 'background-color 0.3s ease-in-out',
              },
            }} variant="contained">Submit </Button>


                </Box>
            </Container>
        </>
    );
};
