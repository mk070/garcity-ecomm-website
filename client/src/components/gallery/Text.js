import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useMediaQuery } from '@mui/material';

const Text = () => {
    const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const textRef = useRef(null);
    const tweens = useRef([]);

    useEffect(() => {
        const timeout = setTimeout(() => {

            // GSAP animation
            const text = textRef.current;
            const chars = text.textContent.split('');
            text.textContent = ''; // Clear the text content

            chars.forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                span.style.position = 'relative';
                span.style.fontSize = isSmallScreen?'50px':'100px';
                span.style.fontFamily = 'integral-Regular';
                span.style.top = '100%'; // Initially move the character below the container
                text.appendChild(span);

                const tween = gsap.to(span, {
                    top: 0,
                    delay: 0.1 * index, // Delay each character's animation
                    duration: 0.7
                });

                tweens.current.push(tween);
            });}
        , 100); 

        // Cleanup function
        return () => {
            tweens.current.forEach(tween => {
                tween.kill(); // Stop the GSAP animations
            });
            tweens.current = []; // Clear the tweens array
        };
    }, []);

    return (
        <>        
            <header style={{
                display: 'grid',
                placeContent: 'center',
                height: isSmallScreen? '30vh':'100vh',
                position:'absolute',
                left:isSmallScreen?"15%":"35%",
                top:'10%'
                // backgroundColor:'#fbe0db'
            }}>
                
                <h1 ref={textRef}>Gallery</h1>
                
            </header>
            

        </>

    );
}

export default Text;
