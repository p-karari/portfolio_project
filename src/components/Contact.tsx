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
  <span className="absolute text-[6rem] text-gray-400 opacity-40 ">Get in-touch with me</span>
  <p className="relative z-10 mt-[1rem]">Contact me</p>
</div>

  <div className="flex flex-row h-[20rem] justify-center items-center">

    {/* <div className="flex items-left justify-left h-screen mx-[10rem]">
  <div className="w-[15rem] h-[25rem] bg-black rounded-[2rem] border-4 border-gray-300 relative overflow-hidden shadow-lg">
    
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black w-[6rem] h-4 rounded-b-lg"></div>

    <div className="absolute inset-0 m-4 bg-white rounded-[1.5rem] overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="text-2xl font-semibold text-white">Hi there</div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
          <div className="w-12 h-12 bg-white bg-opacity-30 rounded-lg"></div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-[4rem] h-1 rounded-full mb-3"></div>
  </div>
</div> */}

<div className="">
<ul className="timeline timeline-vertical">
  <li>
    <div className="timeline-start timeline-box flex"><img src={Email} alt="" width='30px' height='30px'  /><p className='my-[5px]'>Email</p></div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-end timeline-box flex "><img src={LinkedIn} alt="" width='30px' height='30px'  /><p className='my-[5px]'>LinkedIn</p></div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box flex"><img src={Github} alt="" width='30px' height='30px'  /><p className='my-[5px]'>github</p></div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-end timeline-box flex"><img src={Telegram} alt="" width='30px' height='30px'  /><p className='my-[5px]'>telegram</p></div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start timeline-box flex"><img src={Phone} alt="" width='30px' height='30px'  /><p className='my-[5px]'>Phone</p></div>
  </li>
</ul>
</div>

<div>
<div className="mockup-code mx-[6rem]">
  <pre data-prefix="$"><code>Thankyou for visiting</code></pre>
  <pre data-prefix=">" className="text-warning"><code>here's how to contact me...</code></pre>
  <pre data-prefix=">" className="text-success"><code>Looking forward to working together!</code></pre>
</div>
</div>

</div>
        
        
</div>
    </>
  )
}

export default Contact