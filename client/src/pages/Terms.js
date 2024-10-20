import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ToleranceIcon from '@mui/icons-material/Rule'; // Example icon for tolerance
import PaymentIcon from '@mui/icons-material/AttachMoney'; // Example icon for payment terms
import DeliveryIcon from '@mui/icons-material/LocalShipping'; // Example icon for delivery
import RefundIcon from '@mui/icons-material/AssignmentReturn'; // Example icon for refund and return
import GsmIcon from '@mui/icons-material/Scale'; // Example icon for GSM tolerance
import BankIcon from '@mui/icons-material/AccountBalance'; // Example icon for payment processing

const Terms = () => {
  return (
    <Box sx={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontSize: '18px' }}>
      <Typography variant="h4" gutterBottom sx={{fontSize:'65px', fontWeight: 'bold', fontFamily:'var(--primary-font) !important', textAlign: 'center' }}>
        Terms & <span style={{ color: 'var(--trinary-color)', fontWeight:700, fontFamily:'inherit'}}>Conditions</span>
      </Typography>

      {/* Product Tolerances */}
      <List sx={{ backgroundColor: 'rgba(148, 184, 237, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <ToleranceIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
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
      <Divider />

      {/* Payment Terms */}
      <List sx={{ backgroundColor: 'rgba(9, 29, 61, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <PaymentIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Terms</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Payment Structure:</strong> A 60% advance payment is required to confirm your order. The remaining 40% must be paid before the products are shipped from our facility.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>No Credit:</strong> We do not offer credit facilities. All payments must be made as per the above terms.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      {/* Production & Delivery Timeline */}
      <List sx={{ backgroundColor: 'rgba(214, 168, 93, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <DeliveryIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Production & Delivery Timeline</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Production Time:</strong> Our standard production timeline is between 14 and 30 working days, depending on the complexity of the order.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px', fontSize: '18px' }}>
              <strong>Delivery Time:</strong> After dispatch, delivery typically takes 4-8 days, depending on the destination and shipping method.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      {/* Refund, Return & Exchange Policy */}
      <List sx={{ backgroundColor: 'rgba(148, 184, 237, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <RefundIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Refund, Return & Exchange Policy</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>No Returns, Refunds, or Exchanges:</strong> All sales are final. We do not accept returns, offer refunds, or facilitate exchanges.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      {/* GSM Tolerance */}
      <List sx={{ backgroundColor: 'rgba(9, 29, 61, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <GsmIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GSM Tolerance</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Fabric Weight:</strong> The GSM (grams per square meter) of the fabric may vary by ±5%.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      {/* Payment Processing */}
      <List sx={{ backgroundColor: 'rgba(214, 168, 93, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <ListItem>
          <ListItemIcon>
            <BankIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Processing</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', fontSize: '18px' }}>
              <strong>Accountable Payments Only:</strong> All payments must be made through accountable channels (bank transfer, credit/debit card, etc.). Cash payments are not accepted.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Terms;
