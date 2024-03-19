import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Box } from "@mui/material";
import CatalogueIcon from '../../assets/images/fqa/catalogue.svg'
 
const data = {
    title: "FAQ (How it works)",
    rows: [
        {   
            title: "Do You Have A Catalogue? ",
            content: <p>No, We Don’t Have A Ready-made Catalogue.</p>
        },
        {
            title: "What Is Your MOQ?",
            content: <p> "For Ready-made Available Fabric, The Moq Is 100 Pieces Per Colour And Design, With 4 Custom Sizes. We Also Accommodate Fabrication For Higher Quantities.</p>
        },
        {
            title: "Do You Do Printing & Embroidery?",
            content: <p> Yes, We Offer Various Printing Options, Including Screen Printing, Puff Printing, Hd Printing, DTF Sticker Printing, Emboss Printing, Embroidery, Etc. </p>
        },
        {
            title: "Do You Provide Samples?",
            content: <p>Yes, We Provide Sample Swatches And Customised Design Samples.
            </p>,
        },
        {
            title: "What Is The Pricing?",
            content: <p>Upon Submission Of Your Specific Requirements, We Will Calculate The Pricing Accordingly.
            </p>,
        },
        {
            title: "Do You Take Corporate Orders? ",
            content: <p> Yes, We Do Accept Corporate Orders. </p>,
        },
        {
            title: "What Is Your Delivery Timeline?  ",
            content: <p>The Delivery Timeline Depends On The Quantity Of The Product. </p>,
        },
        {
            title: "Do You Provide Low MOQ? ",
            content: <p> Yes, We Offer A Low MOQ Of 50 Pieces Per Colour/design, Specifically For Dtf Sticker Printing.
            </p>,
        },
        {
            title: "What Is Your Production Capacity? ",
            content: <p>Our Production Capacity Allows Us To Deliver A Minimum 1000 Pieces Per Day.
            </p>,
        },
        {
            title: "Do You Provide Customization? ",
            content: <p>Yes, We Provide Customization Options For GSM, Colour, Material, And Design.
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
   .row-title-text:before {
     content: url(${CatalogueIcon}); // Add icon before each FAQ item
     margin-right: 1px;
     width:5%;
     display:flex; // Adjust margin as needed
   }
   .row-title-text{
    display: flex;
    flex-direction: row;
    width:100%   }
    .faq-row-wrapper{
        background-color:#cbcbcb; 
        padding:60px;
        border-radius:30px;
    }
 `;
    return (
        <Box sx={{margin:{sm:'20px 120px'}}}>
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
