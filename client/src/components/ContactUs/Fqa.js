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
            content: <p>Garcity offers a comprehensive range of garment manufacturing services,
            including design consultation, pattern making, sample development, bulk
            production, and quality control</p>
        },
        {
            title: " What types of clothing can Garcity manufacture?",
            content: <p> Garcity manufactures a diverse range of clothing for men, women, kids, and
            sportswear enthusiasts. Our offerings include t-shirts, hoodies, shorts, joggers,
            pyjama sets, dresses, frocks, and sports apparel such as tanks, leggings, and
            jerseys</p>
        },
        {
            title: "What is Garcity's minimum order quantity (MOQ)?",
            content: <p> Garcity's minimum order quantity depends on the complexity of the design and
            the type of garment. They strive to accommodate orders of all sizes, from small
            scale productions to large bulk orders.</p>
        },
        {
            title: "Does Garcity offer customization options?",
            content: <p>Yes, Garcity offers customization options to meet your specific requirements.
            Whether it's fabric selection, colour choices, sizing, or branding, they can tailor
            their services to suit your needs.
            </p>,
        },
        {
            title: "What is Garcity's turnaround time for production?",
            content: <p>Garcity's turnaround time varies depending on the scope and scale of the
            project. They work closely with their clients to establish realistic timelines and
            ensure timely delivery of high quality products.
            </p>,
        },
        {
            title: "Can Garcity help with design development and prototyping? ",
            content: <p> Yes, Garcity provides design development and prototyping services to bring your
            ideas to life. Their experienced team can assist you in refining your designs,
            creating patterns, and producing samples for testing and approval.
            </p>,
        },
        {
            title: "What quality control measures does Garcity have in place? ",
            content: <p>Garcity has stringent quality control measures in place throughout the production
            process to maintain the highest standards of quality and consistency. Their team
            conducts thorough inspections at every stage, from fabric sourcing to final
            packaging. </p>,
        },
        {
            title: "Does Garcity offer sustainable and ethical manufacturing practices? ",
            content: <p> Yes, Garcity is committed to sustainability and ethical manufacturing practices.
            They prioritise eco-friendly materials, responsible sourcing, and fair labour
            practices to minimise their environmental impact and promote social responsibility.
            </p>,
        },
        {
            title: " How can I get started with my garment manufacturing project with  Garcity?",
            content: <p>Getting started is easy! Simply reach out to Garcity through their contact form or
            email, and one of their representatives will be in touch to discuss your project
            requirements and provide personalised assistance
            </p>,
        },
        {
            title: " Can I schedule a factory tour or consultation with Garcity?",
            content: <p>Yes, Garcity welcomes factory tours and consultations for clients who want to
            learn more about their facilities, processes, and capabilities. Contact Garcity to
            schedule a visit or arrange a virtual consultation with their team
            </p>,
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
