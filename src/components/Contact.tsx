import LinkedIn from '../assets/linkedin-svgrepo-com (1).svg'
import Email from '../assets/email-svgrepo-com.svg'
import Phone from '../assets/phone-svgrepo-com.svg'
import Github from '../assets/github-142-svgrepo-com.svg'
import Telegram from '../assets/telegram-svgrepo-com.svg'

function Contact() {
  return (
    <div className="my-16 px-4">
      {/* Heading */}
      <div className="relative mx-auto text-3xl sm:text-4xl font-bold w-full sm:w-[80%] text-center my-10 flex items-center justify-center">
        <span className="absolute text-[2.5rem] sm:text-[6rem] opacity-70 font-general text-gold">
          Get in-touch with me
        </span>
        <p className="relative z-10 mt-4 text-white">Contact me</p>
      </div>

      {/* Main content: flex on md+, stack on sm */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Timeline */}
        <div className="w-full md:w-1/2">
          <ul className="timeline timeline-vertical">
            <li>
              <hr />
              <a
                href="mailto:kararikelvin2002@gmail.com"
                className="timeline-start timeline-box flex items-center gap-2"
              >
                <img src={Email} alt="Email Icon" width="30" height="30" />
                <p>Email</p>
              </a>
            </li>
            <li>
              <hr />
              <a
                href="https://www.linkedin.com/in/kelvin-karari-120867245"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-end timeline-box flex items-center gap-2"
              >
                <img src={LinkedIn} alt="LinkedIn Icon" width="30" height="30" />
                <p>LinkedIn</p>
              </a>
              <hr />
            </li>
            <li>
              <hr />
              <a
                href="https://github.com/p-karari"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-start timeline-box flex items-center gap-2"
              >
                <img src={Github} alt="GitHub Icon" width="30" height="30" />
                <p>GitHub</p>
              </a>
              <hr />
            </li>
            <li>
              <hr />
              <a
                href="https://t.me/grizzlygremlin"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-end timeline-box flex items-center gap-2"
              >
                <img src={Telegram} alt="Telegram Icon" width="30" height="30" />
                <p>Telegram</p>
              </a>
              <hr />
            </li>
            <li>
              <hr />
              <div
                className="timeline-start timeline-box flex items-center gap-2 cursor-pointer"
                onClick={() => navigator.clipboard.writeText("+254111640040")}
              >
                <img src={Phone} alt="Phone Icon" width="30" height="30" />
                <p>Phone</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Code box */}
        <div className="w-full px-4 md:px-0">
          <div className="mockup-code">
            <pre data-prefix="$"><code>Thank you for visiting</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Email: kararikelvin2002@gmail.com</code></pre>
            <pre data-prefix=">" className="text-warning"><code>Phone: +254111640040</code></pre>
            <pre data-prefix=">" className="text-success"><code>Looking forward to working together!</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
