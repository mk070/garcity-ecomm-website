import React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call'; // Import the Call icon

export const ContactButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the actual phone number with country code
    window.open('https://wa.me/9363091528', '_blank');
  };

  const handleEmailClick = () => {
    // Replace 'recipient@example.com' with the actual email address
    window.location.href = 'mailto:garcitystyle@gmail.com';
  };

  const actions = [
    { icon: <WhatsAppIcon />, name: 'WhatsApp', onClick: handleWhatsAppClick },
    { icon: <EmailIcon />, name: 'Email', onClick: handleEmailClick },
  ];

  return (
    <SpeedDial
      ariaLabel="Contact"
      sx={{ position: 'fixed', bottom: 12, right: 20 }}
      icon={<CallIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction='left'
     // Change background color here
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  );
};
