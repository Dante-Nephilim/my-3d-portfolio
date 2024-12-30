export function Experience() {
  return (
    <div className="experience-section bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

      <div className="experience-item mb-6">
        <h3 className="text-xl font-semibold">Miles Technologies</h3>
        <p className="text-sm text-gray-500">Full Stack Developer</p>
        <ul className="list-disc list-inside mt-2">
          <li>Single handedly built and deployed Educational Loan Management Web App</li>
          <li>Worked with google maps based app for a trucks and logistics client</li>
          <li>Built dynamic multi-step onboarding form for a university management application</li>
          <li>Developed E-Commerce aﬃliate marketing app</li>
          <li>Worked with multiple tech stacks as full stack developer</li>
          <li>Won Raving Fan Award within 7 months of joining</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="text-xl font-semibold">NeoFrames - Interior Design Company</h3>
        <p className="text-sm text-gray-500">Freelance Frontend Developer</p>
        <ul className="list-disc list-inside mt-2">
          <li>Upgraded the website from Wordpress to NextJS & TailwindCSS with excellent SEO</li>
          <li>Built an Interior Customization web app</li>
          <li>
            <a rel="noopener noreferrer" href="https://github.com/neoframes/site" target="_blank">
              https://github.com/neoframes/site
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
