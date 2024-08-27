// import Bg2 from '../images/bg4.jpg'
import Genesis from '../images/Genesis001.png'
import Travellog from '../images/travellog.png'
import Estores from '../images/Estores.png'
import SocialAnalyzer from '../images/SocialMediaTracker.png'
import Jobs from '../images/JobListings.png'
import Countries from '../images/CountriesSearch.png'

function Projects() {
  return (
    <>
    <div className='my-[2rem]'>
    <div className="relative mx-auto text-4xl font-bold w-[50%] flex items-center justify-center">
  <span className="absolute text-[6rem] text-gray-400 opacity-30 ">Projects</span>
  <p className="relative z-10 mt-[1rem]">My Projects</p>
</div>
    <div className='flex flex-row mx-auto w-[80%] my-[1rem]'>
      <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
          <div className="w-[100%] rounded-md h-[55%] "><img className="h-full w-full object-cover object-left-top rounded-md" src={Genesis} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Genesis Real Estate</h1>
            <p>A real estate website for a fictional company where you can view listings, find houses for sale or to rent.
               You can also get value estimations and price quotations along with morgage plans.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari/Real_Estate_Responsive_web"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://p-karari.github.io/Real_Estate_Responsive_web/"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>            </div>
          </div>
        </div>

        <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
          <div className="w-[100%] rounded-md h-[55%] "><img className="h-full w-full object-cover object-centre rounded-md" src={Estores} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Estore</h1>
            <p>An online store developed with Django where users browse products for sale, while admins can add new products. Also includes various filters.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>
            </div>
          </div>
        </div> 

        <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
          <div className="w-[100%] h-[55%]"><img className="h-full w-full object-cover object-left-top rounded-md" src={Jobs} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Jobs Listings</h1>
            <p>A job listings UI built with React that displays available job postings, allows users to search and filter jobs, and provides detailed job descriptions.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari/Job_Listings"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://p-karari.github.io/Job_Listings/"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>
            </div>
          </div>
        </div>


    </div>
    <div className='flex flex-row mx-auto w-[80%] my-[1rem]'>
    <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
      <div className="w-[100%] rounded-md h-[55%] "><img className="h-full w-full object-cover rounded-md" src={SocialAnalyzer} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Social Media Tracker</h1>
            <p>An interface built with HTML, CSS, and JS that tracks and displays various social media statistics in a user-friendly dashboard.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari/Social_media_tracker_App"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://p-karari.github.io/Social_media_tracker_App/"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>
            </div>
          </div>
        </div>

        <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
          <div className="w-[100%] rounded-md h-[55%] "><img className="h-full w-full object-cover rounded-md" src={Travellog} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Travellog</h1>
            <p>A tours and travel website ui for a fictional company that organises trips to various destinations in the world.Utilizes HTML, CSS and JS.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari/tours_and_travel_responsive"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://p-karari.github.io/tours_and_travel_responsive/"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>
            </div>
          </div>
        </div> 

        <div className='rounded-md w-[20rem] h-[32rem] m-auto bg-gray-100 border border-solid border-gray-300 p-4'>
          <div className="w-[100%] rounded-md h-[55%] "><img className="h-full w-full object-cover object-left-top rounded-md" src={Countries} alt="" /></div>
          <div className="h-[40%] m-[5px]">
            <h1 className="text-2xl font-bold m-auto w-[auto] text-[#FF8C00]">Countries Search App</h1>
            <p>A web app using HTML, CSS, JS, and JSON data to search and retrieve information about countries worldwide.
            </p>
            <div className="flex flex-row my-[5px]">
            <a href="https://github.com/p-karari/COUNTRIES_SEARCH_APP"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Github</a>
            <a href="https://p-karari.github.io/COUNTRIES_SEARCH_APP/"
             target="_blank" 
             rel="noopener noreferrer"
             className="w-[45%] p-[8px] rounded-lg m-auto bg-[#008080] text-center flex justify-center">Visit</a>
            </div>
          </div>
        </div>
    </div>

    </div>
    </>
  )
}

export default Projects

