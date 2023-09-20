import { RefObject } from "react";

interface MainNavBarProps {
  heroRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  certificationsRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}
export function MainNavBar({
  heroRef,
  projectsRef,
  certificationsRef,
  experienceRef,
  contactRef,
  skillsRef,
}: MainNavBarProps) {
  return (
    <>
      <nav
        id="header"
        className="w-full z-30 top-10 py-1 bg-white shadow-lg border-b border-blue-400 mt-2"
      >
        <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
          <label
            htmlFor="menu-toggle"
            className="cursor-pointer md:hidden block"
          >
            <svg
              className="fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <ul className="hidden md:hidden flex-col space-y-4 mt-4 mobile-nav">
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  heroRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  skillsRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  projectsRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  certificationsRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  experienceRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="text-gray-500 hover:text-blue-600 block no-underline hover:text-black font-medium text-lg py-2 px-4"
                onClick={() => {
                  contactRef?.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                  const toggle = document.getElementById(
                    "menu-toggle"
                  ) as HTMLInputElement;
                  if (toggle) {
                    toggle.checked = false;
                  }
                }}
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
            id="menu"
          >
            <nav>
              <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      heroRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      skillsRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      certificationsRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      projectsRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      experienceRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2"
                    onClick={() =>
                      contactRef?.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div
            className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
            id="nav-content"
          >
            <div className="auth flex items-center w-full md:w-full">
              <a
                className="bg-transparent text-gray-800 p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700"
                href="https://github.com/Dante-Nephilim"
              >
                GitHub
              </a>
              <a
                className="bg-blue-600 text-gray-200 p-2 rounded hover:bg-blue-500 hover:text-gray-100"
                href="https://techrez.io/resume/prem-sagar"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
