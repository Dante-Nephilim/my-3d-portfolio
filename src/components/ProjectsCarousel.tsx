import Slider from "react-slick";
import FitSetGoImage from "../assets/ft.jpg";
import ClockImage from "../assets/clock.jpg";
export function ProjectsCarousel() {
  const projectList = [
    {
      name: "clock-widget-using-vanilla-js",
      description: "A clock widget built using vanilla JavaScript and styled using css.",
      language: "JavaScript",
      lastUpdated: "Apr 7, 2022",
      svgLink: ClockImage,
    },
    {
      name: "express-jwt",
      description: "A simple Express.js application that uses JSON Web Tokens (JWT) for authentication.",
      language: "TypeScript",
      lastUpdated: "Nov 9, 2020",
      svgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/220px-Expressjs.png",
    },
    {
      name: "Fit-Set-Go",
      description:
        "An online platform for fitness enthusiasts to track their workouts and achieve their fitness goals.",
      language: "typescript",
      lastUpdated: "Dec 2023",
      svgLink: FitSetGoImage,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <Slider {...settings}>
          {projectList.map((project, index) => (
            <div
              key={index}
              className="w-96 h-full bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {/* Placeholder SVG; replace with your SVGs */}
                <div className="mb-4">
                  <img src={project.svgLink} alt={project.name} className="mx-auto h-32 w-32" />
                </div>
              </div>
              <h3 className="text-2xl mb-2 hover:text-blue-600 transition-colors duration-300">{project.name}</h3>
              <p className="italic mb-2 text-gray-600">{project.description}</p>
              <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm mr-2">
                {project.language}
              </span>
              <span className="text-gray-500 text-sm">Updated on {project.lastUpdated}</span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
