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
    <Box sx={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Terms & Conditions
      </Typography>

      {/* Product Tolerances */}
      <List>
        <ListItem>
          <ListItemIcon>
            <ToleranceIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Product Tolerances</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Quantity Variation:</strong> The final delivered quantity may vary by ±5% to 10%.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px' }}>
              <strong>Color Variation:</strong> Colors may vary by ±5% to 10% due to fabric and dyeing processes.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px' }}>
              <strong>Measurement Variation:</strong> There may be a size tolerance of ±0.5 inch.
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* Payment Terms */}
        <ListItem>
          <ListItemIcon>
            <PaymentIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Terms</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Payment Structure:</strong> A 60% advance payment is required to confirm your order. The remaining 40% must be paid before the products are shipped from our facility.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px' }}>
              <strong>No Credit:</strong> We do not offer credit facilities. All payments must be made as per the above terms.
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* Production & Delivery Timeline */}
        <ListItem>
          <ListItemIcon>
            <DeliveryIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Production & Delivery Timeline</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Production Time:</strong> Our standard production timeline is between 14 and 30 working days, depending on the complexity of the order.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '5px' }}>
              <strong>Delivery Time:</strong> After dispatch, delivery typically takes 4-8 days, depending on the destination and shipping method.
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* Refund, Return & Exchange Policy */}
        <ListItem>
          <ListItemIcon>
            <RefundIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Refund, Return & Exchange Policy</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>No Returns, Refunds, or Exchanges:</strong> All sales are final. We do not accept returns, offer refunds, or facilitate exchanges.
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* GSM Tolerance */}
        <ListItem>
          <ListItemIcon>
            <GsmIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GSM Tolerance</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Fabric Weight:</strong> The GSM (grams per square meter) of the fabric may vary by ±5%.
            </Typography>
          </ListItemText>
        </ListItem>
        <Divider />

        {/* Payment Processing */}
        <ListItem>
          <ListItemIcon>
            <BankIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Payment Processing</Typography>
            <Typography variant="body1" sx={{ marginTop: '10px' }}>
              <strong>Accountable Payments Only:</strong> All payments must be made through accountable channels (bank transfer, credit/debit card, etc.). Cash payments are not accepted.
            </Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default Terms;
