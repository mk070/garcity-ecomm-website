import React, { useEffect } from "react";

const VismeEmbed = () => {
  useEffect(() => {
    // Create a new script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<>    
<h1>visme test</h1>
    <div className="visme_d" data-title="Blog Contact Form" data-url="x4zeo69w-blog-contact-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="9748"></div>
    </>

  );
};

export default VismeEmbed;
