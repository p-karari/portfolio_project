import curious from '../images/curious.jpg';
import { Tilt } from 'react-tilt';

function About() {
  return (
    <div className="min-h-screen px-4 py-12 flex flex-col items-center bg-transparent">
      <div className="relative mx-auto text-4xl font-bold w-[90%] md:w-[70%] lg:w-[50%] flex items-center justify-center my-[2rem]">
        <span className="absolute text-[6rem] opacity-70 font-general text-gold">About</span>
        <p className="relative z-10 mt-[1rem] text-white font-general">About</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">
        <div className="w-[85%] sm:w-[65%] md:w-[45%] lg:w-[36rem]">
          <Tilt options={{ max: 25, scale: 1.05 }}>
            <img
              className="rounded-lg shadow-2xl w-full h-auto object-contain"
              src={curious}
              alt="Curious Icon"
            />
          </Tilt>
        </div>

        <div className="text-white font-general text-[4.5vw] sm:text-base md:text-lg leading-relaxed max-w-2xl text-center lg:text-left">
          <p>
            I'm <strong>Kelvin Karari</strong>—a passionate and skilled software engineer with a Bachelor's degree in Software Engineering from Kirinyaga University and a certified full-stack developer through Power Learn Project (PLP).
          </p>
          <p>
            My technical expertise spans both frontend and backend technologies. I specialize in building robust, scalable systems using <strong>TypeScript</strong>, <strong>Drizzle ORM</strong>, <strong>Hono</strong>, and <strong>PostgreSQL</strong> for backend development. On the frontend, I'm fluent in <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>Material UI</strong>, <strong>HTML</strong>, and <strong>CSS</strong>.
          </p>
          <p>
            I’ve successfully built and deployed full-featured applications using these technologies, demonstrating not just technical capability but also strong product thinking and a user-centered mindset.
          </p>
          <p>
            I take pride in clean, maintainable code and love collaborating in teams where creative problem-solving and communication are valued. I'm detail-oriented, proactive, and always eager to learn and grow. Whether I'm leading a project or supporting a team, I strive to make an impact through innovation and quality.
          </p>
          <p>
            Feel free to explore the rest of this portfolio to learn more about my work, projects, and passion for technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
