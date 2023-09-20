export function Hero() {
  return (
    <>
      <section className="text-black body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font tracking-wide sm:text-3xl md:text-6xl xl:text-7xl mb-4 font-bold">
              Hi, I am Prem Sagar
            </h1>
            <p className="mb-8 leading-relaxed opacity-50">
              Driven by passion and innovation, I craft seamless digital
              experiences using cutting-edge technologies. With expertise
              spanning from frontend to backend, I am well-equipped to transform
              your visions into reality.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 py-2 px-4 focus:outline-none hover:bg-opacity-80 rounded text-sm">
                Connect with Me
              </button>
            </div>
          </div>
          <div
            id="pattern"
            className="w-32 sm:w-40 lg:max-w-xl lg:w-full md:w-32 xl:w-5/6 bg-contain bg-no-repeat md:ml-40 xl:mr-16"
          >
            <div className="w-full flex gap-3 justify-center ">
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
              />
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
              />
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
              />
            </div>
            <div className="w-full flex gap-3 justify-center my-2">
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://expressjs.com/images/express-facebook-share.png"
              />
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png"
              />
            </div>
            <div className="w-full flex gap-3 justify-center ">
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"
              />
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://angular.io/assets/images/logos/angular/angular.png"
              />
              <img
                className="w-full h-32 md:h-40 lg:h-48 object-contain rounded-xl shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                alt="hero"
                src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
