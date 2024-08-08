import ModeScwithcherIcon from '../assets/dark-mode-svgrepo-com.svg'
function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl">K.Karari</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
      <li><a>Projects</a></li>
      <li><a>Skills</a></li>
      <li><a>Resume</a></li>
      <li><a>Community</a></li>
      <li><a>Contact Me</a></li>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn flex"><img src={ModeScwithcherIcon} alt="" width='30px' height='30px' /><p>Dark Theme</p></a>
  </div>
</div>
  )
}

export default Navbar

// july 13th - today
