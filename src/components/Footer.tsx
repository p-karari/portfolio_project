import Icons from "./Icons";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Developed by{" "}
            <span className="text-1xl font-bold text-white border border-blue-500 rounded-xl p-[5px] mx-auto bg-blue-500">
              Kelvin Karari
            </span>
          </p>
          <p>Thank you for taking the time to go through my website. I l❤️ve you</p>
          <p className="mt-2">
            <span className="font-semibold">Contact:</span>{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +254111640040
            </a>{" "}
            |{" "}
            <a href="mailto:kelvin@example.com" className="text-blue-500">
              kararikelvin2002@gmail.com
            </a>
          </p>
        </aside>
        <Icons />
      </footer>
    </>
  );
}

export default Footer;
