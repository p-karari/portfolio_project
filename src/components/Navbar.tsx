import ModeSwitcherIcon from '../assets/dark-mode-svgrepo-com.svg';

function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView(); // No animation
    }
  };

  const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];

  return (
    <div className="navbar bg-black sticky top-0 z-50 shadow-md text-white">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-gold font-bold px-4 h-full">K.Karari</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-0">
          {sections.map((id) => (
            <li key={id} className="h-full">
              <button
                onClick={() => scrollToSection(id)}
                className="h-full px-4 py-3 font-bold border-none rounded-none bg-black text-white hover:bg-gold hover:text-white transition-colors duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <button className="btn flex bg-gold text-black border-none px-4 h-full rounded-none">
          <img src={ModeSwitcherIcon} alt="Dark Mode" width="30px" height="30px" />
          <p className="ml-2">Dark Theme</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
