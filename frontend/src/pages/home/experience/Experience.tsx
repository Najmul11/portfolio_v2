import ans from "../../../assets/others/aniyanetworks_logo.jpeg";

const Experience = () => {
  return (
    <div className="md:w-[80%] lg:w-5/6 xl:w-4/6 mx-auto py-16" id="projects">
      <h2 className="text-4xl font-semibold text-center">Experience</h2>

      <div className="mt-20 max-w-screen-lg mx-auto p-5  flex flex-col gap-16">
        {/* ------------------ Aniya Network Solutions -----------------------*/}
        <div className="flex gap-5 ">
          <div className="flex-shrink-0 md:w-16 w-12 h-12 md:h-16 ">
            <img
              src={ans}
              className="md:w-16 w-12 h-12 md:h-16 rounded-md "
              alt="Aniya Network Solutions Inc. logo"
            />
          </div>
          <div className="flex-grow">
            <p className="text-xl font-semibold">
              Aniya Network Solutions Inc{" "}
              <sup className="w-2 -mt-10 right-0 h-2 inline-block rounded-full bg-highlight "></sup>
            </p>
            <p className="text-second text-sm">MERN Stack Developer</p>
            <p className="text-second text-sm">April 2024 - Present</p>
            <p className="text-second text-sm">Location: Remote</p>
            <p className="text-second text-sm">
              Key Responsibilities:
              <ul className="list-disc text-second/70 list-inside">
                <li>
                  Developing web applications using React, MongoDB, Express and
                  Node.js.
                </li>

                <li>Gained hands-on experience with Vue.js and Nuxt.js.</li>
              </ul>
            </p>
          </div>
        </div>

        {/*--------------------- MJ Academy -----------------------*/}
        <div className="flex gap-5">
          <div>
            <div className="md:w-16 w-12 h-12 md:h-16 rounded-md bg-LightestNavy/50" />
          </div>
          <div>
            <p className="text-xl font-semibold">MJ Academy</p>
            <p className="text-second text-sm">MERN Stack Developer (Intern)</p>
            <p className="text-second text-sm">Dec 2023 - Feb 2024</p>
            <p className="text-second text-sm">Location: Remote</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
