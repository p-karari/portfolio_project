import React from 'react';
import critical from "../images/critical thinking icon.jpg";
import DownloadIcon from '../assets/down-arrow-circle-svgrepo-com.svg';
import Github from '../assets/github-142-svgrepo-com.svg';
import LinkedInIcon from '../assets/linkedin-svgrepo-com (1).svg';
import { Tilt } from 'react-tilt';

function Hero() {
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Apply tilt effect to the image */}
        <Tilt className="rounded-lg shadow-2xl w-[50%]" options={{ max: 25, scale: 1.05 }}>
          <img
            src={critical}
            alt="Critical Thinking Icon"
            className="w-full" // Ensures the image is responsive and fits the container
          />
        </Tilt>

        <div>
          <h1 className="text-5xl font-bold text-white font-general">Hello! <span className="text-gold">welcome to my portfolio!</span> </h1>
          <p className="py-6 text-2xl text-white font-general">
            I am Kelvin Karari, an experienced software engineer. Here's a little about me.
          </p>
          <div className="flex flex-row">

            <a 
                href="/CV - KARARI - 2025_APRIL.pdf"  // Replace with your actual file name
                download="Kelvin_Karari_CV.pdf"   // Optional: rename the file when downloaded
                className="btn btn-primary mx-[0.5rem] flex font-general"
              >
                <img 
                  className="my-[5px]" 
                  src={DownloadIcon} 
                  width="30px" 
                  height="30px" 
                  alt="Download" 
                />
                <p>Download Resume</p>
              </a>


            <a 
              href="https://github.com/p-karari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary mx-[0.5rem] flex font-general"
            >
              <img className="my-[5px]" src={Github} width="30px" height="30px" alt="GitHub" />
              <p>Github</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/kelvin-karari-120867245" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary mx-[0.5rem] flex font-general"
            >
              <img className="my-[5px]" src={LinkedInIcon} width="30px" height="30px" alt="LinkedIn" />
              <p>LinkedIn</p>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
