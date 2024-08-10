import Ricon from '../images/react icon.jpg'
import nodeicon from '../images/node js icon.jpg'
import npm from '../images/npm icon.jpg'
import debugging from '../images/dubuggingicon.jpg'
import oop from '../images/object oriented.jpg'
import designTools from '../images/design tools icon.jpg'
import analysis from '../images/analysis icon.jpg'
import dbicon from '../images/db1.jpg'

function skills() {
  return (
    <>

<div className="relative mx-auto text-4xl font-bold w-[50%] my-[2rem] flex items-center justify-center">
  <span className="absolute text-[6rem] text-gray-400 opacity-30 ">skills repository</span>
  <p className="relative z-10 mt-[1rem]">My Skills</p>
</div>

    <div className="flex flex-row w-[80%] mx-auto my-[1rem]">

    
        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={Ricon}
                alt="react icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">React</h2>
                <p>Skilled in React for creating dynamic, responsive user interfaces. Proficient with component-based architecture, 
                    state management, and hooks to build seamless, high-performance web applications.</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={nodeicon}
                alt="node js icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Node js</h2>
                <p>Experienced in Node.js for backend development, building efficient, scalable server-side applications with RESTful APIs, 
                    event-driven architecture, and integrating with various databases and services.</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={npm}
                alt="npm icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">npm !</h2>
                <p>Proficient in using npm for managing project dependencies, handling packages, and scripts, and ensuring smooth 
                    development workflows to enhance project maintainability and collaboration.</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={debugging}
                alt="debugging icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Debugging</h2>
                <p>Effective problem-solver with a keen eye for detail, utilizing debugging tools and techniques to identify and resolve code issues quickly,
                     ensuring stable and reliable applications.</p>
            </div>
        </div>

    </div>

    <div className="flex flex-row w-[80%] mx-auto my-[1rem]">

    
    <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={oop}
                alt="oop icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Object Oriented Programming</h2>
                <p>Strong understanding of Object-Oriented Programming principles, using encapsulation, inheritance, 
                    and polymorphism to write clean, maintainable, and scalable code across various projects</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={dbicon}
                alt="database icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Database</h2>
                <p>Skilled in database management, including SQL and NoSQL databases, ensuring efficient data storage,
                     retrieval, and integration within applications for optimized performance and scalability.</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={designTools}
                alt="Design Tools icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Design Tools</h2>
                <p>Proficient in design tools like Figma and Adobe XD, creating visually engaging layouts, wireframes, 
                    and prototypes to enhance user experience and streamline the design-to-development process</p>
            </div>
        </div>

        <div className="card bg-base-100 image-full w-96 shadow-xl mx-[10px]">
            <figure>
                <img
                src={analysis}
                alt="Analysis icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Analysis</h2>
                <p>Experienced in using analytics tools to track and interpret user behavior,
                     enabling data-driven decisions to optimize user experience and improve application performance over time</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default skills