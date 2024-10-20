import React, { useState } from 'react';
import { Box, Typography, Collapse, IconButton } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelineIcon from '@mui/icons-material/Timeline';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import FactoryIcon from '@mui/icons-material/Factory';
import LaunchIcon from '@mui/icons-material/Launch';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the data for the FAQ
const data = {
    rows: [
        { title: 'What services does Garcity offer?', content: 'Garcity offers a comprehensive range of garment manufacturing services...' },
        { title: 'What types of clothing can Garcity manufacture?', content: 'Garcity manufactures a diverse range of clothing for men, women, kids...' },
        { title: "What is Garcity's minimum order quantity (MOQ)?", content: 'Garcity’s minimum order quantity depends on the complexity of the design...' },
        { title: 'Does Garcity offer customization options?', content: 'Yes, Garcity offers customization options to meet your specific requirements...' },
        { title: "What is Garcity's turnaround time for production?", content: 'Garcity’s turnaround time varies depending on the scope and scale...' },
        { title: 'What quality control measures does Garcity have in place?', content: 'Garcity implements stringent quality control measures throughout production...' },
        { title: 'Does Garcity offer sustainable and ethical manufacturing practices?', content: 'Yes, Garcity is committed to sustainable and ethical manufacturing practices...' },
        { title: 'How can I get started with my garment manufacturing project with Garcity?', content: 'Getting started is easy! Reach out to Garcity via their contact form...' },
        { title: 'Can I schedule a factory tour or consultation with Garcity?', content: 'Yes, Garcity welcomes factory tours and consultations for clients...' },
    ],
};

// Mapping icons with questions
const icons = [
    <DesignServicesIcon />,
    <FactoryIcon />,
    <LocalOfferIcon />,
    <BuildIcon />,
    <TimelineIcon />,
    <CheckCircleIcon />,
    <EnergySavingsLeafIcon />,
    <LaunchIcon />,
    <FactoryIcon />,
];

export default function Fqa() {
    const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

    const handleToggle = (index) => {
        // If the clicked item is already open, close it; otherwise, open it
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Box sx={{ margin: { sm: '20px 120px 100px 120px', xs: '10px 10px' }, backgroundColor: 'rgb(25 118 210 / 3%)', borderRadius: '12px', padding: '20px' }}>
            <Typography variant="h4" align="center" sx={{ fontWeight:600,marginBottom: '40px', color: '#091D3D' }}>
                Frequently Asked <span
          style={{
            color: 'var(--trinary-color)',
            fontWeight: 600,
            fontFamily: 'inherit',
          }}
          className="text-animation"
        >
          Questions
        </span>
            </Typography>
            <Box>
                {data.rows.map((row, index) => (
                    <Box
                        key={index}
                        sx={{
                            marginBottom: '1px',
                            backgroundColor: '#ffffff',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                cursor: 'pointer',
                                marginBottom: '10px',
                            }}
                            onClick={() => handleToggle(index)}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ color: '#D6A85D', marginRight: '10px', fontSize: '28px' }}>{icons[index]}</Box>
                                <Typography variant="h6" sx={{ color: '#091D3D', fontWeight: 500 }}>
                                    {row.title}
                                </Typography>
                            </Box>
                            <IconButton sx={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Box>
                        <Collapse in={openIndex === index}>
                            <Typography variant="body1" sx={{ color: '#555555', marginTop: '10px' }}>
                                {row.content}
                            </Typography>
                        </Collapse>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
