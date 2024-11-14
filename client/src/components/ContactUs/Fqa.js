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
        {   
            title: "What services does Garcity offer? ",
            content: <p>Garcity provides a full range of garment manufacturing services, including design
            consultation, pattern making, sample development, bulk production, and quality
            control.</p>
        },
        {
            title: "What types of clothing can Garcity manufacture?",
            content: <p>Garcity manufactures a wide variety of clothing, including t-shirts, hoodies, shorts,
            joggers, pyjama sets, dresses, frocks, and sportswear like tanks, leggings, and
            jerseys for men, women, and kids.</p>
        },
        {
            title: "What is Garcity's minimum order quantity (MOQ)?",
            content: <p>The minimum order is 150 pieces per color and design for ready-to-cut fabric. For
            custom fabric colors or GSM, the MOQ is 300 pieces per color.</p>
        },
        {
            title: "Does Garcity offer customization options?",
            content: <p>Yes, Garcity offers customization in fabric, color, sizing, and branding to meet
            specific client needs.</p>
        },
        {
            title: "What is Garcity's typical turnaround time for production?",
            content: <p>Production turnaround is typically 21-25 days, although this can vary based on
            client requirements.</p>
        },
        {
            title: "Can Garcity assist with design development and prototyping?",
            content: <p>Absolutely. Garcity’s experienced team can support design development, pattern
            creation, and sample production for testing and approval.</p>
        },
        {
            title: "What quality control measures does Garcity have in place?",
            content: <p>Garcity enforces stringent quality control throughout the production process,
            ensuring thorough inspections from fabric sourcing to final packaging.</p>
        },
        {
            title: "Does Garcity prioritize sustainable and ethical practices?",
            content: <p>Yes, Garcity is dedicated to sustainability and ethics, using eco-friendly materials,
            responsibly sourced fabrics, and fair labor practices.</p>
        },
        {
            title: "How do I start a garment manufacturing project with Garcity?",
            content: <p>Reach out via Garcity’s contact form or email to discuss your project needs. A
            representative will provide personalized guidance.</p>
        },
        {
            title: "Can I schedule a factory tour or consultation with Garcity?",
            content: <p>Yes, Garcity welcomes factory tours and consultations. Contact them to schedule
            an in-person visit or arrange a virtual consultation.</p>
        },
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
    <DesignServicesIcon />,
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
