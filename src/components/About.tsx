import curious from '../images/curious.jpg'
import { Tilt } from 'react-tilt'
function About() {
  return (
    <>
    <div className="h-[35rem] hero flex flex-col">

      <div className="relative mx-auto text-4xl font-bold w-[50%] my-[2rem] flex items-center justify-center">
          <span className="absolute text-[6rem] text-gray-600 opacity-70 font-general text-gold">About</span>
          <p className="relative z-10 mt-[1rem] font-general text-white">About Me</p>
      </div>   
       <div className="flex flex-row mx-auto w-[80%]">
          <div className="w-[30rem] h-[15rem] mx-auto my-[1rem]"> <Tilt options={{ max: 25, scale: 1.05 }}> <img className='rounded-lg shadow-2xl' src={curious} alt="curious icon.jpg" /> </Tilt></div>
          <div className="w-[25rem] h-[22rem] mx-auto my-[1rem] text-1.3xl text-white font-general">
            My name is Kelvin Karari or you can call me dev Karari. I am a kirinyaga university graduate with a bachelor's degree in software engineering.
            I am a plp certified fullstack developer, my technical skills include proficiency in typescript, drizzle orm, hono and postgresql for backend, React js, tailwind,material ui, html and css are my preffered frontend languages.
            I've built and deployed complex applications with these technologies. I take pride in what i do, i am a team player and thrive in collaborative environments. I pay attention to details in any solution i'm working on and find creative ways to solve problems.
            More information about me is on this website
          </div>
      </div>
    </div>

    </>
    )
}

export default About