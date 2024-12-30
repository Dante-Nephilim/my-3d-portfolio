import { ScrollDrivenAnimation } from "./ScrollDrivenAnimation"; // Ensure to import the animation component.
import PluralSightSkillsIqImage from "../assets/Screenshot_Plural_Sight_Skill_IQ.png";

export function Hero() {
  return (
    <section className="text-black body-font">
      <div className="container mx-auto px-5 py-5">
        {/* First Row */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          {/* First Column: Text */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mb-8 md:mb-0">
            <h1 className="title-font tracking-wide text-4xl md:text-8xl xl:text-9xl mb-4 font-bold">
              Hi, I am Prem Sagar
            </h1>
            <p className="mb-8 leading-relaxed opacity-50">
              Driven by passion and innovation, I craft seamless digital experiences using cutting-edge technologies.
              With expertise spanning from frontend to backend, I am well-equipped to transform your visions into
              reality.
            </p>
            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <a
                className="bg-blue-600 text-gray-200 p-2 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                href="https://www.linkedin.com/in/prem-sagar-7a838a237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect with Me
              </a>
              <a
                className="bg-blue-600 text-gray-200 p-2 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                href="https://github.com/Dante-Nephilim"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="bg-blue-600 text-gray-200 p-2 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                href="https://techrez.io/resume/prem-sagar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a
                className="bg-blue-600 text-gray-200 p-2 rounded border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                href="https://app.pluralsight.com/profile/Dante-Nephilim"
                target="_blank"
                rel="noopener noreferrer"
              >
                PluralSight
              </a>
            </div>
          </div>

          {/* Second Column: Animation */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <ScrollDrivenAnimation />
          </div>
        </div>

        {/* Separate Row for Images */}
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://angular.io/assets/images/logos/angular/angular.png"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
          />
          <img
            className="w-32 md:w-40 lg:w-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            alt="hero"
            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png"
          />
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://app.pluralsight.com/profile/Dante-Nephilim" target="_blank" rel="noopener noreferrer">
            <img src={PluralSightSkillsIqImage} alt="PluralSight" />
          </a>
        </div>
      </div>
    </section>
  );
}
