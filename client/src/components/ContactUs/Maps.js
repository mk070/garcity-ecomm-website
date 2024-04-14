import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Container , Box} from '@mui/material';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Maps = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <>
    
    <Box sx={{ height: '70vh',padding:{sm:"0 130px"} ,display:"flex", alignItems:"center",marginBottom:"100px", padding:{xs:'20px'}}}>
      {/* <Box> */}
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
      {/* </Box> */}
    </Box>
   
    </>
    )
}
