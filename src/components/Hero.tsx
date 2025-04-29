import critical from "../images/critical thinking icon.jpg";
import DownloadIcon from '../assets/down-arrow-circle-svgrepo-com.svg';
import Github from '../assets/github-142-svgrepo-com.svg';
import LinkedInIcon from '../assets/linkedin-svgrepo-com (1).svg';
import { Tilt } from 'react-tilt';

function Hero() {
  return (
    <div className="px-4 py-10 w-full max-w-screen overflow-hidden">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center justify-between gap-4 w-full">
        <Tilt 
          className="rounded-lg shadow-2xl w-[80%] sm:w-[60%] lg:w-[40%] hidden lg:block" 
          options={{ max: 25, scale: 1.05 }}
        >
          <img
            src={critical}
            alt="Critical Thinking Icon"
            className="w-full h-auto object-contain"
          />
        </Tilt>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[60%]">
          <h1 className="text-[7vw] sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white font-general leading-tight">
            🚀 Turning Coffee into Code, One Bug at a Time<br />
            <span className="text-gold">Welcome to my digital playground!</span>
          </h1>
          <p className="mt-4 text-[4.5vw] sm:text-lg md:text-xl text-white font-general leading-relaxed max-w-[90%] sm:max-w-full">
            I'm Kelvin Karari, a passionate software engineer who loves solving real-world problems through code.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start items-center gap-3 mt-6 w-full">
            <a 
              href="/CV - KARARI - 2025_APRIL.pdf"
              download="Kelvin_Karari_CV.pdf"
              className="btn btn-primary flex items-center gap-2 px-4 py-2 text-sm sm:text-base w-[80%] sm:w-auto font-general justify-center"
            >
              <img src={DownloadIcon} width="24" height="24" alt="Download" />
              <p>Download Resume</p>
            </a>

            <a 
              href="https://github.com/p-karari" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary flex items-center gap-2 px-4 py-2 text-sm sm:text-base w-[80%] sm:w-auto font-general justify-center"
            >
              <img src={Github} width="24" height="24" alt="GitHub" />
              <p>GitHub</p>
            </a>

            <a 
              href="https://www.linkedin.com/in/kelvin-karari-120867245" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary flex items-center gap-2 px-4 py-2 text-sm sm:text-base w-[80%] sm:w-auto font-general justify-center"
            >
              <img src={LinkedInIcon} width="24" height="24" alt="LinkedIn" />
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
