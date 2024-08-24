// import ModeScwithcherIcon from '../assets/dark-mode-svgrepo-com.svg'
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div className="navbar bg-base-100">
//   <div className="navbar-start">
//     <a className="btn btn-ghost text-xl">K.Karari</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><Link to="/" className='hover:text-yellow-500'>About</Link></li>
//       <li><Link to="/projects" className='hover:text-yellow-500'>Projects</Link></li>
//       <li><Link to="/skills" className='hover:text-yellow-500'>Skills</Link> </li>
//       <li><Link to="/resume" className='hover:text-yellow-500'>Resume</Link> </li>
//       <li><Link to="/community" className='hover:text-yellow-500'>Community</Link> </li>
//       <li><Link to="/contact" className='hover:text-yellow-500'>Contact Me</Link> </li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn flex"><img src={ModeScwithcherIcon} alt="" width='30px' height='30px' /><p>Dark Theme</p></a>
//   </div>
// </div>
//   )
// }

// export default Navbar

import ModeSwitcherIcon from '../assets/dark-mode-svgrepo-com.svg';

function Navbar() {
  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl ">K.Karari</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><button onClick={() => scrollToSection("hero")} className="hover:text-[#FF8C00] text-[#008080] font-bold">Home</button></li>
          <li><button onClick={() => scrollToSection("about")} className="hover:text-[#FF8C00] text-[#008080] font-bold">About</button></li>
          <li><button onClick={() => scrollToSection("projects")} className="hover:text-[#FF8C00] text-[#008080] font-bold">Projects</button></li>
          <li><button onClick={() => scrollToSection("skills")} className="hover:text-[#FF8C00] text-[#008080] font-bold">Skills</button></li>
          <li><button onClick={() => scrollToSection("resume")} className="hover:text-[#FF8C00] text-[#008080] font-bold">Resume</button></li>
          <li><button onClick={() => scrollToSection("contact")} className="hover:text-text-[#FF8C00] text-[#008080] font-bold">Contact Me</button></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn flex">
          <img src={ModeSwitcherIcon} alt="Dark Mode" width="30px" height="30px" />
          <p>Dark Theme</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
