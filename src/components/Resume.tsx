function Resume() {
  return (
    <>
      <div>
        <div className="relative mx-auto text-4xl font-bold w-[90%] md:w-[50%] my-[2rem] flex items-center justify-center font-general">
          <span className="absolute text-[2.5rem] sm:text-[4rem] md:text-[6rem] opacity-70 font-general text-gold">Mini-Timeline</span>
          <p className="relative z-10 mt-[1rem] text-white">Resume</p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center w-[90%] mx-auto">
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">June 2024 - August 2024</h1>
            <h2 className="text-xl text-gray-700 font-bold">Teach2Give attachee</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">Teach2Give</h3>
            <p>
              Participated in a three-month fullstack development cohort by Teach2Give,
              a non-profit mentoring youth in tech.
            </p>
          </div>
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">June 2023 - August 2023</h1>
            <h2 className="text-xl text-gray-700 font-bold">Power Learn Project attachee</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">Power Learn Project</h3>
            <p>
              Completed a four-month intensive training in software development by Power Learn Project,
              aimed at empowering African youth.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center w-[90%] mx-auto">
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">Jan 2022 - Current</h1>
            <h2 className="text-xl text-gray-700 font-bold">Computer Society of Kirinyaga</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">C.S.K, Kirinyaga University</h3>
            <p>
              Joined the society's web dev mentorship, built and deployed my first website, and later became a mentor.
            </p>
          </div>
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">September 2021 - Current</h1>
            <h2 className="text-xl text-gray-700 font-bold">BSc Software Engineering</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">Kirinyaga University</h3>
            <p>
              Pursuing a Bachelor's in Software Engineering, expected to complete in September 2025.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center w-[90%] mx-auto">
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">Jan 2017 - April 2021</h1>
            <h2 className="text-xl text-gray-700 font-bold">K.C.S.E</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">Kijabe Boys High School</h3>
            <p>
              Completed secondary school with a B plain in KCSE at Kijabe Boys.
            </p>
          </div>
          <div className="border border-black-700 w-full md:w-[45%] m-[1rem] h-auto flex flex-col gap-4 p-4 bg-gray-100 shadow-2xl rounded">
            <h1 className="text-2xl text-blue-500 font-bold capitalize">Jan 2007 - 2016</h1>
            <h2 className="text-xl text-gray-700 font-bold">K.C.P.E</h2>
            <h3 className="text-lg text-gray-700 font-bold capitalize border-l-[3.5px] border-gray-800 pl-2">Serene Academy</h3>
            <p>
              Attended Serene Academy and excelled in KCPE, with an A in mathematics.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
