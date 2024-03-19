import { Box, Grid, useMediaQuery, Typography } from '@mui/material'
import React from 'react'
import {styled} from '@mui/system'

export const Card = ({number, type,bgImage}) => {

const StyledCard = styled('div')({
    width: '65px',
    height:"400px",
    borderRadius: '1.75rem',
    backgroundSize: 'cover',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '2rem',
    margin: '0 10px',
    marginTop:"60px",
    display: 'flex',
    alignItems: 'flex-end',
    transition: 'width 0.5s ease, opacity 0.3s ease',
    boxShadow: '0px 10px 30px -5px rgba(0,0,0,0.8)',
    '&:hover': {
      width: '400px',
    },
    backgroundImage:`url(${bgImage })`
  });
  
  const StyledIcon = styled('div')({
    background: '#223',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '15px',
    
  });
  
  const StyledDescription = styled('div')({
    display: 'flex',
    marginTop:"15px",
    justifyContent: 'left',
    flexDirection: 'row',
    color:"black",
    height: '0',
    width: '520px',
    opacity: '1',
    transitionDelay: '.3s',
    transition: 'all .3s ease',
    textTransform:"uppercase",
  });
  
  const StyledCourse = styled('div')({
    color: 'white',
    display: 'flex',
    flexWrap: 'nowrap',
  });
  
  
  
  return (
    <>
     {/* <Box marginTop={10}  bgcolor={"whitesmoke"} mx={3} height={380} width={70} borderRadius={7} sx={{
            transition: "width 0.3s ease-in-out",
            '&:hover':{
              width:"400px",
            }
          }}>
          <Box bgcolor={"black"} color={"white"} height={40} width={40} borderRadius={4} marginTop={40} mx={2} display={"flex"}
          ><Typography fontSize={25} mx={1.8}>
            1
            </Typography>

            </Box>
          </Box> */}

        <StyledCard >
            <StyledCourse>
                <StyledIcon>{number}</StyledIcon>
                    <StyledDescription>
                          <Typography borderRadius={3} height={38} bgcolor={"white"} fontSize={24} fontWeight={300} paddingLeft={2} paddingRight={2}>{type}</Typography>
                   </StyledDescription>
                </StyledCourse>
              </StyledCard>    
    </>
  );
};
