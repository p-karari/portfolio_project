import critical from "../images/critical thinking icon.jpg"
import DownloadIcon from '../assets/down-arrow-circle-svgrepo-com.svg'
import Github from '../assets/github-142-svgrepo-com.svg'
import LinkedInIcon from '../assets/linkedin-svgrepo-com (1).svg'
import Bg from '../images/bg2.jpg'

function Hero() {
  return (
    <div className="h-[35rem] hero bg-cover bg-top bg-no-repeat"
    style={{ backgroundImage: `url(${Bg})` }}>
    {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={critical}
      className="rounded-lg shadow-2xl w-[50%]"
    />
    <div>
      <h1 className="text-5xl font-bold text-grey">Hello! welcome to my portfolio</h1>
      <p className="py-6 text-2xl text-grey">
        I am Kelvin Karari, an experienced software engineer. Here's a little about me.
      </p>
      <div className="flex flex-row">
        <button className="btn btn-primary mx-[0.5rem] flex">
          <img className="my-[5px]" src={DownloadIcon} width="30px" height="30px" alt="" />
          <p>Download Resume</p>
        </button>
        <button className="btn btn-primary mx-[0.5rem] flex">
          <img className="my-[5px]" src={Github} width="30px" height="30px" alt="" />
          <p>Github</p>
        </button>
        <button className="btn btn-primary mx-[0.5rem] flex">
          <img className="my-[5px]" src={LinkedInIcon} width="30px" height="30px" alt="" />
          <p>Linked In</p>
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero