function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  const sections = ['hero', 'about', 'projects', 'skills', 'resume', 'contact'];

  return (
    <div className="navbar bg-black sticky top-0 z-50 shadow-md text-white px-4">
      <div className="flex w-full items-center">

        <div className="basis-1/4 flex items-center">
          <a className="btn btn-ghost text-xl text-gold font-bold px-0">K.Karari</a>

          <div className="dropdown lg:hidden ml-2">
            <label tabIndex={0} className="btn btn-ghost px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {sections.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="w-full text-left px-4 py-2 font-semibold hover:bg-gold hover:text-white transition-colors"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex basis-3/4 justify-evenly">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-4 py-3 font-bold text-white hover:bg-gold transition-colors duration-300"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
