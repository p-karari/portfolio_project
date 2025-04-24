import LinkedIn from '../assets/linkedin-svgrepo-com (1).svg'
import Email from '../assets/email-svgrepo-com.svg'
import Phone from '../assets/phone-svgrepo-com.svg'
import Github from '../assets/github-142-svgrepo-com.svg'
import Telegram from '../assets/telegram-svgrepo-com.svg'

function Contact() {
  return (
    <>
<div className="my-[4rem]">
  

    <div className="relative mx-auto text-4xl font-bold w-[80%] my-[2rem] flex items-center justify-center">
  <span className="absolute text-[6rem] opacity-70 font-general text-gold">Get in-touch with me</span>
  <p className="relative z-10 mt-[1rem] text-white">Contact me</p>
</div>

  <div className="flex flex-row h-[20rem] justify-center items-center">

<div className="">
<ul className="timeline timeline-vertical">
  {/* Email - Opens default email app */}
  <li>
    <hr />
    <a 
      href="mailto:kararikelvin2002@gmail.com" 
      className="timeline-start timeline-box flex cursor-pointer"
    >
      <img src={Email} alt="Email Icon" width="30px" height="30px" />
      <p className="my-[5px]">Email</p>
    </a>
  </li>

  {/* LinkedIn - Opens in a new tab */}
  <li>
    <hr />
    <a 
      href="www.linkedin.com/in/kelvin-karari-120867245" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="timeline-end timeline-box flex"
    >
      <img src={LinkedIn} alt="LinkedIn Icon" width="30px" height="30px" />
      <p className="my-[5px]">LinkedIn</p>
    </a>
    <hr />
  </li>

  {/* GitHub - Opens in a new tab */}
  <li>
    <hr />
    <a 
      href="https://github.com/p-karari" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="timeline-start timeline-box flex"
    >
      <img src={Github} alt="GitHub Icon" width="30px" height="30px" />
      <p className="my-[5px]">GitHub</p>
    </a>
    <hr />
  </li>

  {/* Telegram - Opens in a new tab */}
  <li>
    <hr />
    <a 
      href="https://t.me/grizzlygremlin" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="timeline-end timeline-box flex"
    >
      <img src={Telegram} alt="Telegram Icon" width="30px" height="30px" />
      <p className="my-[5px]">Telegram</p>
    </a>
    <hr />
  </li>

  {/* Phone - Clicking will copy number to clipboard */}
  <li>
    <hr />
    <div 
      className="timeline-start timeline-box flex cursor-pointer"
      onClick={() => navigator.clipboard.writeText("+254111640040")}
    >
      <img src={Phone} alt="Phone Icon" width="30px" height="30px" />
      <p className="my-[5px]">Phone</p>
    </div>
  </li>
</ul>
</div>

<div>
<div className="mockup-code mx-[6rem]">
  <pre data-prefix="$"><code>Thankyou for visiting</code></pre>
  <pre data-prefix=">" className="text-warning"><code>Email: kararikelvin2002@gmail.com</code></pre>
  <pre data-prefix=">" className="text-warning"><code>Phone: +254111640040</code></pre>
  <pre data-prefix=">" className="text-success"><code>Looking forward to working together!</code></pre>
</div>
</div>

</div>
        
        
</div>
    </>
  )
}

export default Contact