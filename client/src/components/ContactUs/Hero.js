import {React,useState,useEffect} from 'react'
import {Box, Typography,Button} from '@mui/material'
import img1 from "../../assets/images/contactus/contact.png"
import img2 from "../../assets/images/contactus/location.png"
import img3 from "../../assets/images/contactus/clock.png"

export const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay time (in milliseconds) as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{height:{sm:"100vh"},display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{lg:"column", xs:'column'}, padding:{xs:'30px'}}}>

        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:{sm:"column", xs:'column'},mb:{sm:"90px"}}}>
        <Typography
            sx={{
                fontSize: {xs:'34px', sm:'40px'},
                fontFamily: 'integral-Regular !important',
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 1s ease-out' // Adjust timing function and duration as needed
            }}
            >
            Hello Let's work Together
            </Typography>                
             <Typography sx={{fontSize:{sm:"20px"},textAlign: {xs:'left',sm:'center'} ,mt:{xs:'50px',sm:"30px"}}}>We are always happy to help you! 😊<br /> Give us a call or Whatsapp App or e-mail us and we’ll have a happy person get back to you right away.</Typography>
                 <a href="https://cal.com/garcity" style={{ textDecoration: 'none' }}> {/* Replace 'https://example.com' with your actual URL */}
                    <Button
                        sx={{
                        display: { xs: 'block', sm: 'flex' },
                        background: '#DF9573',
                        mt: { xs: '50px', sm: '30px' },
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
        <Box sx={{height:{sm:"30%"},display:"flex",flexDirection:{sm:"row", xs:'column'},mt:{xs:'60px'}}}> 
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, bgcolor:{xs:'#FFF4F1', sm:'none'}, borderRadius:'20px'}}> 
                <img src={img1} className='aboutusicon' alt="" srcset="" />
                <Typography sx={{textAlign: 'center',mt:{sm:"30px"}, ml:{xs:'40px'} }}>1/354 H Asm garden Ksn puram 3rd street,
                            semmipalayam palladam, 
                            Tiruppur - 641662
                </Typography>
            </Box>                        
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, bgcolor:{xs:'#FFF4F1', sm:'none'}, borderRadius:'20px', mt:{xs:'30px'}}}> 
            <img src={img2} className='aboutusicon' alt="" />
                        <Typography sx={{textAlign: 'center',mt:{xs:'-20px',sm:"30px"} }}> +91 9363091528 <br />
                                remindme.garments@gmail.com
                        </Typography>
            </Box>            
            <Box sx={{width:{sm:"100%"},height:{sm:"100%"},borderRight:{xs:'none',sm:" 1px solid black"},display:"flex",flexDirection:{sm:"column"},justifyContent:"center",alignItems:"center", padding:{xs:'30px 10px'}, bgcolor:{xs:'#FFF4F1', sm:'none'}, borderRadius:'20px', mt:{xs:'30px'}}}> 
                        <img src={img3} className='aboutusicon' alt="" srcset="" />
                        <Typography sx={{textAlign: 'center',mt:{sm:"30px"} }}>Monday to Saturday : 9Am to 6Pm <br />
                                Sunday: Holiday
                        </Typography>
            </Box>            
        </Box>
    </Box>    
)
}
