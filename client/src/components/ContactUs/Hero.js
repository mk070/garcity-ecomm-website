import {React,useState,useEffect} from 'react'
import {Box, Typography,Button} from '@mui/material'
import img1 from "../../assets/images/contactus/contact.avif"
import img2 from "../../assets/images/contactus/location.avif"
import img3 from "../../assets/images/contactus/clock.avif"

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{height:{sm:"100vh"}, display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{lg:"column", xs:'column'}, padding:{xs:'30px',sm:'0'}}}>

        <Box sx={{display:"flex",justifyContent:{sm:"center",xs:"flex-start"},height:{xs:'75vh',sm:"40vh"},alignItems:"center",flexDirection:{sm:"column", xs:'column'},mb:{sm:"20px"}}}>
        <Typography
            sx={{textAlign:"center",
                fontSize: {xs:'34px', sm:'40px'},
                lineHeight:{xs:"44px",sm:'100px'},
                mt:{sm:'0',xs:'50px'},
                fontFamily: 'integral-Regular !important',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-out' // Adjust timing function and duration as needed
            }}
            >
            Hello Let's work <span style={{ color: '#DF9573', fontWeight:700, fontFamily:'inherit'}}> Together</span> 
            </Typography>                
             <Typography sx={{fontSize:{sm:"20px"},textAlign: {xs:'center',sm:'center'} ,mt:{xs:'40px',sm:"30px"}}}>We are always happy to help you! 😊<br /> Give us a call or Whatsapp App or e-mail us and we’ll have a happy person get back to you right away.</Typography>
                 <a href="https://cal.com/garcity" style={{ textDecoration: 'none' }}> {/* Replace 'https://example.com' with your actual URL */}
                    <Button
                        sx={{
                        display: { xs: 'block', sm: 'flex' },
                        background: '#DF9573',
                        mt: { xs: '80px', sm: '30px' },
                        borderRadius: '30px',
                        '&:hover': {
                            backgroundColor: '#1E1E1E',
                            color: '', // Add hover effect
                            transition: 'background-color 0.3s ease-in-out',
                        },
                        }}
                        variant="contained"
                    >
                        Schedule Your Meeting
                    </Button>
                 </a>
        </Box>
        <Box sx={{height:{sm:"30%"},display:"flex",flexDirection:{sm:"row", xs:'column'},mt:{sm:'10px',xs:'0px'}}}> 
        
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"}, borderBottom:{sm:'none',xs:" 1px solid black"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column",xs:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, mt:{xs:'10px'}}}> 
                <img src={img2} className='aboutusicon' alt="" srcset="" />
                <Typography sx={{textAlign: 'center',mt:{sm:"30px",xs:'30px'}}}>1/354 H Asm garden Ksn puram 3rd street,
                            semmipalayam palladam, 
                            Tiruppur - 641662
                </Typography>
            </Box>                        
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"}, borderBottom:{sm:'none',xs:" 1px solid black"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column",xs:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, mt:{xs:'10px'}}}> 
            <img src={img1} className='aboutusicon' alt="" />
                        <Typography sx={{textAlign: 'center',mt:{xs:'30px',sm:"30px"} }}> +91 9363091528 <br />
                        garcitystyle@gmail.com
                        </Typography>
            </Box>            
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column",xs:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, mt:{xs:'10px'}}}> 
                        <img src={img3} className='aboutusicon' alt="" srcset="" />
                        <Typography sx={{textAlign: 'center',mt:{sm:"30px",xs:'30px'} }}>Monday to Saturday : 9Am to 6Pm <br />
                                Sunday: Holiday
                        </Typography>
            </Box>            
        </Box>
    </Box>    
)
}


