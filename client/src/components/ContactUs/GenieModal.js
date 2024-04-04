import React, { useState, useEffect } from 'react';
import { TimelineMax } from 'gsap';

const GenieModal = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const tl = new TimelineMax();

    const animateModal = () => {
      if (isActive) {
        tl.to("#element", 0.3, {
          delay: 0.7,
          y: "-15px",
          scaleY: 0.9
        })
          .to("#element", 0.3, {
            morphSVG: "#step-2"
          })
          .to("#element", 0.3, {
            morphSVG: "#step-3"
          }, "-=0.15")
          .to("#element", 0.3, {
            y: "0",
            scaleY: 1,
            onComplete: () => {
              document.querySelector("#open-modal-ctr").classList.add("active");
            }
          }, "-=0.15");
      } else {
        tl.to("#element", 0.3, {
          delay: 0.45,
          y: "10px",
        })
          .to("#element", 0.3, {
            morphSVG: "#step-2",
          })
          .to("#element", 0.3, {
            morphSVG: "#step-0"
          }, "-=0.15")
          .to("#element", 0.3, {
            y: "0",
            onComplete: () => {
              document.querySelector("#open-modal-ctr").classList.remove("active");
            }
          }, "-=0.3");
      }
    };

    animateModal(); // Initial animation
  }, [isActive]);

  return (
    <div className="main-ctr">
      <svg xmlns="http://www.w3.org/2000/svg" width="540" height="620" viewBox="0 0 540 620">
        <g id="Page-1" fill="none" fillRule="evenodd">
          {/* SVG paths and elements */}
          <g id="modal-with-genie-effect">
        <path id="step-3" stroke="#979797" d="M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z" opacity="1"/>
        <path id="step-2" stroke="#979797" d="M270.136 122h237.356c2.758 0 4.36 2.15 3.577 4.8 0 0-23.333 86.246-92.842 174.822-69.51 88.575-66.458 185.37-66.458 185.37-.033 2.776-2.25 5.008-5.01 5.008H193.51c-2.76 0-4.977-2.232-5.01-5.008 0 0 3.05-96.795-66.458-185.37C52.534 213.046 29.202 126.8 29.202 126.8c-.783-2.65.82-4.8 3.578-4.8h237.356z" opacity=".5"/>
        <path id="step-0" stroke="#979797" d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
        <path id="element" fill="#FFF" d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
        <g id="open-modal-ctr">
          <path id="open-modal-btn" fill="#FFF" d="M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z"/>
          <text id="text" fill="#7E7878" font-family="Roboto" font-size="16" font-weight="260" transform="translate(185 556)">
            <tspan x="41.797" y="27">Open Modal</tspan>
          </text>
        </g>
        <g id="word" font-family="Roboto">
          <text id="title" fill="#434343" font-size="20" transform="translate(20 124)">
            <tspan x="93.713" y="19">Modal Interaction with Genie Effect</tspan>
          </text>
          <text id="paragraf" fill="#7E7878" font-size="16" font-weight="260" transform="translate(20 124)">
            <tspan x="100.457" y="59">Inspired by Mac OS X minimize interaction.</tspan> <tspan x="120.609" y="84">Built with SVG and Greensock Plugin.</tspan>
          </text>
        </g>
        <g id="close" transform="translate(486 36)">
          <circle id="bg" cx="10" cy="10" r="10" fill="#E9413D"/>
          <path id="Shape" stroke="#FFF" d="M6 6.023l7.99 7.945M13.99 6.023L6 13.968" stroke-linecap="round"/>
        </g>
      </g>
          <path id="step-0" stroke="#979797" d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
          <path id="step-2" stroke="#979797" d="M270.136 122h237.356c2.758 0 4.36 2.15 3.577 4.8 0 0-23.333 86.246-92.842 174.822-69.51 88.575-66.458 185.37-66.458 185.37-.033 2.776-2.25 5.008-5.01 5.008H193.51c-2.76 0-4.977-2.232-5.01-5.008 0 0 3.05-96.795-66.458-185.37C52.534 213.046 29.202 126.8 29.202 126.8c-.783-2.65.82-4.8 3.578-4.8h237.356z" opacity=".5"/>
          <path id="step-3" stroke="#979797" d="M186 561.005c0-2.764 2.234-5.005 4.998-5.005h157.004c2.76 0 4.998 2.242 4.998 5.005v33.99c0 2.764-2.234 5.005-4.998 5.005H190.998c-2.76 0-4.998-2.242-4.998-5.005v-33.99z" opacity=".504"/>
          <path id="element" fill="#FFF" d="M20 26.003C20 23.24 22.23 21 25.01 21h489.98c2.767 0 5.01 2.242 5.01 5.003v289.994c0 2.763-2.23 5.003-5.01 5.003H25.01c-2.767 0-5.01-2.242-5.01-5.003V26.003z"/>
        </g>
      </svg>
      <div className="open-modal-ctr" id="open-modal-ctr" onClick={handleClick}>
        <button className={`modal-btn ${isActive ? 'active' : ''}`}>Toggle Modal</button>
      </div>
    </div>
  );
};

export default GenieModal;
