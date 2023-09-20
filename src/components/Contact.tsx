export function Contact() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-8 rounded-lg shadow-lg mt-8 text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-white border-b-2 border-white pb-2">
        Contact Me
      </h2>

      <div className="mb-4 flex items-center">
        <span className="material-icons text-lg mr-2">email</span>
        <a
          href="mailto:s.premsagar.c@gmail.com"
          className="text-white hover:text-blue-300 transition-all"
        >
          s.premsagar.c@gmail.com
        </a>
      </div>

      <div className="mb-4 flex items-center">
        <span className="material-icons text-lg mr-2">phone</span>
        <a
          href="tel:+918309230128"
          className="text-white hover:text-blue-300 transition-all"
        >
          +918309230128
        </a>
      </div>

      <div className="mb-4 flex items-center">
        <span className="material-icons text-lg mr-2">public</span>
        <a
          href="https://www.linkedin.com/in/prem-sagar-7a838a237/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-all"
        >
          LinkedIn Profile
        </a>
      </div>
    </div>
  );
}
