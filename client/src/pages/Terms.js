import {React,useEffect} from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ToleranceIcon from '@mui/icons-material/Rule'; // Placeholder for 3D icon (Replace with 3D version)
import PaymentIcon from '@mui/icons-material/AttachMoney'; // Placeholder for 3D icon
import DeliveryIcon from '@mui/icons-material/LocalShipping'; // Placeholder for 3D icon
import RefundIcon from '@mui/icons-material/AssignmentReturn'; // Placeholder for 3D icon
import GsmIcon from '@mui/icons-material/Scale'; // Placeholder for 3D icon
import BankIcon from '@mui/icons-material/AccountBalance'; // Placeholder for 3D icon

const Terms = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])
  return (
    <Box sx={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontSize: '18px' }}>
      <Typography
        variant="h4"
        gutterBottom
        className="text-animation"
        sx={{
          fontSize: { sm: '65px' },
          fontWeight: '500',
          fontFamily: 'var(--primary-font) !important',
          textAlign: 'center',
          opacity: 0,
        }}
      >
        Terms &{' '}
        <span
          style={{
            color: 'var(--trinary-color)',
            fontWeight: 500,
            fontFamily: 'inherit',
          }}
          className="text-animation"
        >
          Conditions
        </span>
      </Typography>

      {/* Product Tolerances */}
      <List className="card-animation list-bg-1 card-content !important">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>
          <ListItemIcon>
            <ToleranceIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Product Tolerances</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Quantity Variation:</strong> The final delivered quantity may vary by ±5% to 10%.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>Color Variation:</strong> Colors may vary by ±5% to 10% due to fabric and dyeing processes.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>Measurement Variation:</strong> There may be a size tolerance of ±0.5 inch.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      {/* Payment Terms */}
      <List className="card-animation list-bg-2 card-content">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>

          <ListItemIcon>
            <PaymentIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Terms</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Payment Structure:</strong> A 60% advance payment is required to confirm your order.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>No Credit:</strong> We do not offer credit facilities. All payments must be made as per the above terms.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      {/* Production & Delivery Timeline */}
      <List className="card-animation list-bg-1 card-content">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>

          <ListItemIcon>
            <DeliveryIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Production & Delivery Timeline</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Production Time:</strong> Our standard production timeline is between 14 and 30 working days.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>Delivery Time:</strong> After dispatch, delivery typically takes 4-8 days.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      {/* Refund, Return & Exchange Policy */}
      <List className="card-animation list-bg-2 card-content">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>

          <ListItemIcon>
            <RefundIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Refund, Return & Exchange Policy</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>No Returns, Refunds, or Exchanges:</strong> All sales are final. We do not accept returns, offer refunds, or facilitate exchanges.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      {/* GSM Tolerance */}
      <List className="card-animation list-bg-1 card-content">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>

          <ListItemIcon>
            <GsmIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GSM Tolerance</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Fabric Weight:</strong> The GSM (grams per square meter) of the fabric may vary by ±5%.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>

      {/* Payment Processing */}
      <List className="card-animation list-bg-2 card-content">
        <ListItem className='terms-cards' sx={{display:'flex',alignItems:{xs:'flex-start',sm:'center'},flexDirection:{xs:'row',sm:'row'}}}>

          <ListItemIcon>
            <BankIcon sx={{ fontSize: { xs: '40px', sm: '50px' }, color: 'var(--trinary-color)' }} /> {/* Use 3D icon */}
          </ListItemIcon>
          <ListItemText className='card-details'>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Processing</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Accountable Payments Only:</strong> All payments must be made through accountable channels (bank transfer, credit/debit card, etc.).
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Terms;
