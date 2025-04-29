import Ricon from '../images/react icon.jpg';
import nodeicon from '../images/node js icon.jpg';
import npm from '../images/npm icon.jpg';
import debugging from '../images/dubuggingicon.jpg';
import oop from '../images/object oriented.jpg';
import designTools from '../images/design tools icon.jpg';
import analysis from '../images/analysis icon.jpg';
import dbicon from '../images/db1.jpg';
import FastApiPic from '../images/FastApiPic.png';
import DrizzlePic from '../images/DrizzlePic.jpg';
import HonoPic from '../images/HonoPic.png';
import DjangoPic from '../images/download.png';

function Skills() {
  const skills = [
    { title: 'React', img: Ricon, desc: 'Skilled in React for creating dynamic, responsive user interfaces. Proficient with component-based architecture, state management, and hooks to build seamless, high-performance web applications.' },
    { title: 'Node.js', img: nodeicon, desc: 'Experienced in Node.js for backend development, building efficient, scalable server-side applications with RESTful APIs, event-driven architecture, and integrating with various databases and services.' },
    { title: 'Drizzle', img: DrizzlePic, desc: 'Experienced with Drizzle for efficient and type-safe database management. Proficient in schema migrations, query optimization, and integrating Drizzle with modern web frameworks.' },
    { title: 'Hono', img: HonoPic, desc: 'Proficient in Hono for building fast, lightweight web APIs. Skilled in middleware handling, request routing, and optimizing performance for modern web applications.' },
    { title: 'Django', img: DjangoPic, desc: 'Skilled in Django for building robust, scalable web applications. Proficient in the MTV architecture, ORM, and authentication to develop secure, high-performance backends.' },
    { title: 'FastAPI', img: FastApiPic, desc: 'Skilled in FastAPI for creating high-performance APIs with automatic documentation. Experienced in async handling, request validation, and seamless integration with databases.' },
    { title: 'npm', img: npm, desc: 'Proficient in using npm for managing project dependencies, handling packages, and scripts, and ensuring smooth development workflows to enhance project maintainability and collaboration.' },
    { title: 'Debugging', img: debugging, desc: 'Effective problem-solver with a keen eye for detail, utilizing debugging tools and techniques to identify and resolve code issues quickly, ensuring stable and reliable applications.' },
    { title: 'Object Oriented Programming', img: oop, desc: 'Strong understanding of Object-Oriented Programming principles, using encapsulation, inheritance, and polymorphism to write clean, maintainable, and scalable code across various projects.' },
    { title: 'Database', img: dbicon, desc: 'Skilled in database management, including SQL and NoSQL databases, ensuring efficient data storage, retrieval, and integration within applications for optimized performance and scalability.' },
    { title: 'Design Tools', img: designTools, desc: 'Proficient in design tools like Figma and Adobe XD, creating visually engaging layouts, wireframes, and prototypes to enhance user experience and streamline the design-to-development process.' },
    { title: 'Analysis', img: analysis, desc: 'Experienced in using analytics tools to track and interpret user behavior, enabling data-driven decisions to optimize user experience and improve application performance over time.' },
  ];

  return (
    <div className="font-general">
      <div className="relative mx-auto text-4xl font-bold w-[90%] md:w-[70%] lg:w-[50%] flex items-center justify-center">
        <span className="absolute text-[6rem] opacity-70 font-general text-gold">skills repository</span>
        <p className="relative z-10 mt-[1rem] text-white font-general">My Skills</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 my-8 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="card bg-base-100 image-full shadow-xl w-full md:w-[48%] lg:w-[23%] transition-all duration-300"
          >
            <figure>
              <img src={skill.img} alt={`${skill.title} Icon`} className="w-full h-40 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{skill.title}</h2>
              <p>{skill.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
