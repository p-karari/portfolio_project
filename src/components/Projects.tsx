import Genesis from '../images/Genesis001.png';
import Travellog from '../images/travellog.png';
import Estores from '../images/Estores.png';
import SocialAnalyzer from '../images/SocialMediaTracker.png';
import Jobs from '../images/JobListings.png';
import Countries from '../images/CountriesSearch.png';
import { Tilt } from 'react-tilt';

function Projects() {
  const projects = [
    {
      title: 'Genesis Real Estate',
      description: 'Genesis Real Estate is an intuitive and dynamic platform designed for individuals looking to buy, sell, or rent properties. The website allows users to browse property listings, get value estimates, and explore mortgage plans, ensuring a seamless real estate experience for both first-time buyers and seasoned investors.',
      image: Genesis,
      github: 'https://github.com/p-karari/Real_Estate_Responsive_web',
      live: 'https://p-karari.github.io/Real_Estate_Responsive_web/',
    },
    {
      title: 'Estore',
      description: 'Estore is an online store built with Django that allows customers to browse a wide range of products, apply filters, and complete purchases. It also empowers administrators to manage inventories, add new products, and promote sales, all while ensuring an intuitive experience for both users and store managers.',
      image: Estores,
      github: 'https://github.com/p-karari/E-stores',
      live: 'https://github.com/p-karari/E-stores',
    },
    {
      title: 'Jobs Listings',
      description: 'Jobs Listings is a React-based job board that enables users to filter and browse job roles based on various criteria such as category, location, and salary range. It provides detailed job descriptions, allowing users to make informed decisions about job applications.',
      image: Jobs,
      github: 'https://github.com/p-karari/Job_Listings',
      live: 'https://p-karari.github.io/Job_Listings/',
    },
    {
      title: 'Social Media Tracker',
      description: 'Social Media Tracker is a dashboard that monitors various social media metrics, such as follower count and post engagement. Built using HTML, CSS, and JavaScript, it provides valuable insights for individuals and businesses looking to optimize their social media strategies.',
      image: SocialAnalyzer,
      github: 'https://github.com/p-karari/Social_media_tracker_App',
      live: 'https://p-karari.github.io/Social_media_tracker_App/',
    },
    {
      title: 'Travellog',
      description: 'Travellog is a travel website UI designed to showcase destinations and tour packages. The responsive design allows users to explore detailed itineraries, user-friendly navigation, and booking systems to plan their trips more easily.',
      image: Travellog,
      github: 'https://github.com/p-karari/tours_and_travel_responsive',
      live: 'https://p-karari.github.io/tours_and_travel_responsive/',
    },
    {
      title: 'Countries Search App',
      description: 'Countries Search App allows users to search for countries and retrieve detailed information like population, area, languages, and more. Using a JSON API, the app ensures up-to-date and accurate data for a user-friendly experience.',
      image: Countries,
      github: 'https://github.com/p-karari/COUNTRIES_SEARCH_APP',
      live: 'https://p-karari.github.io/COUNTRIES_SEARCH_APP/',
    },
  ];

  return (
    <div className="my-10 px-4 font-general">
      <div className="relative mx-auto text-4xl font-bold w-[90%] md:w-[70%] lg:w-[50%] flex items-center justify-center">
        <span className="absolute text-[6rem] opacity-70 font-general text-gold">Projects Array</span>
        <p className="relative z-10 mt-[1rem] text-white font-general">Projects</p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 mt-10">
        {projects.map((proj, idx) => (
          <Tilt key={idx} className="w-[90%] sm:w-[18rem] h-[32rem]">
            <div className="rounded-xl bg-black/50 text-white border border-gold shadow-lg h-full p-4 flex flex-col justify-between">
              <div className="h-[45%] rounded-md overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="flex flex-col justify-between h-[55%] mt-4">
                <div className="flex flex-col">
                  <h3 className="text-gold text-lg font-bold mb-1">{proj.title}</h3>
                  <p className="text-sm leading-snug overflow-hidden text-ellipsis">{proj.description}</p>
                </div>
                <div className="flex justify-between mt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md text-white text-xs font-semibold w-[48%] text-center"
                  >
                    Github
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-md text-white text-xs font-semibold w-[48%] text-center"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
