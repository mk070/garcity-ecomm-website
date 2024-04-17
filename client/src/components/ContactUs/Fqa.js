import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Box } from "@mui/material";
import CatalogueIcon from '../../assets/images/fqa/catalogue.svg'
import q from '@mui/icons-material/QuestionMark'; 
const data = {
    title: "Frequently asked question ",
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
 
const styles = {
    
    titleTextColor: "#372b29",
    rowTitleColor: "rgb(223, 149, 115)",
    bgcolor:'red'
 
};
 
const config = {
};
 
export default function Fqa (){
   // Custom CSS to add icon to each FAQ item
   const customCss = `
   .faq-title h2{
    font-size:24px;
   }
   .row-title-text:before {
     content: url(${q}); // Add icon before each FAQ item
     margin-right: 1px;
     width:5%;
     display:flex; // Adjust margin as needed
   }

   .row-title-text{
    display: flex;
    flex-direction: row;
    font-size:16px;
    width:100%  
 }

    .faq-row-wrapper{
        background-color:#FFF4F1; 
        padding:60px;
        border-radius:30px;
    }

    .row-content-text{
        margin: 20px 0;
    }

    @media(max-width:700px){
        .faq-row-wrapper{
            padding:30px;
        }
        .row-title-text:before {
            margin-right:50px;
        }
    }
 `;
    return (
        <Box sx={{margin:{sm:'20px 120px',xs:'10px 10px'}}}>
               <style>{customCss}</style> {/* Inject custom CSS */}

            <Faq 
                icon
                data={data}
                styles={styles}
                config={config}
            />
        </Box>
    );
}


// this is a commit changein this file