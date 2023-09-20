import Slider from "react-slick";
export function ProjectsCarousel() {
    const projectList = [
        {
          name: "counter-application-vanilla-js",
          description: "",
          language: "JavaScript",
          lastUpdated: "Apr 7, 2022",
          svgLink: "https://pixabay.com/get/gff29838f496532dc7b8c7fbaa9c1fbac195ab5c958e9f87ab67faac9e6ea762775f757aefec117da752a289007c3fc75.svg", // JavaScript icon
        },
        {
          name: "clock-widget-using-vanilla-js",
          description: "",
          language: "CSS",
          lastUpdated: "Apr 7, 2022",
          svgLink: "https://pixabay.com/get/gcf113860eeb80235f36355b1aa0ac23c190a740f1437e0e23c0538469915a85851ca80ad77a3a03036c721bbba2e814a581d909fbfc06f21427dfc86cac2ffb8_1280.png", // CSS icon
        },
        {
          name: "tic-tac-toe",
          description: "built with react & typescript",
          language: "TypeScript",
          lastUpdated: "Apr 7, 2022",
          svgLink: "https://pixabay.com/get/ge6cb4fe9b104d337e962746fd10bff25840b17c6e02fecdcacdea00b2a456863ea91dfe1e5be4293e10dfb86ab68395d_1280.png", // TypeScript icon
        },
        {
          name: "todolist",
          description: "Using ReactHooks and TypeScript",
          language: "TypeScript",
          lastUpdated: "Mar 25, 2022",
          svgLink: "https://pixabay.com/get/gfad13d3f9ee8568fac5c2ff7ad914189e625a53d81b09b5ca12b859e6b3bd8a9e95bc708d3504513fe8aca6d6db5c384.svg", // React icon
        },
        {
          name: "react-components",
          description: "using type-script",
          language: "TypeScript",
          lastUpdated: "Mar 25, 2022",
          svgLink: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg", // TypeScript icon
        },
        {
          name: "React-Hooks",
          description: "Using Type-Script",
          language: "TypeScript",
          lastUpdated: "Mar 25, 2022",
          svgLink: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // React icon
        },
        {
          name: "neoframesv4",
          description: "landed",
          language: "JavaScript",
          lastUpdated: "Mar 22, 2022",
          svgLink: "https://pixabay.com/get/g7f10808d603dd6c5748140dfe70716b215c2485eb56be60dd2f9c12f1191f6d4e7eaf0d3fb89c1067c9380f991b59bed.svg", // JavaScript icon
        },
        {
          name: "express-jwt",
          description: "",
          language: "TypeScript",
          lastUpdated: "Nov 9, 2020",
          svgLink: "https://pixabay.com/get/gdb558b7405ce550fc4f7b9391ab0a233e6e9acbb4e05f7564f774d99b289c7878160576d20d8149946ab7a9050c41869.svg", // TypeScript icon
        },
      ];
      

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
              className="w-72 bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">
                {/* Placeholder SVG; replace with your SVGs */}
                <div className="mb-4">
                  <img
                    src={project.svgLink}
                    alt={project.name}
                    className="mx-auto h-20 w-20"
                  />
                </div>
              </div>
              <h3 className="text-2xl mb-2 hover:text-blue-600 transition-colors duration-300">
                {project.name}
              </h3>
              <p className="italic mb-2 text-gray-600">{project.description}</p>
              <span className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm mr-2">
                {project.language}
              </span>
              <span className="text-gray-500 text-sm">
                Updated on {project.lastUpdated}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
