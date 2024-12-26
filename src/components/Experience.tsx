export function Experience() {
  return (
    <div className="experience-section bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

      <div className="experience-item mb-6">
        <h3 className="text-xl font-semibold">Miles Technologies</h3>
        <p className="text-sm text-gray-500">Full Stack Developer</p>
        <ul className="list-disc list-inside mt-2">
          <li>Trained in React, Node, MongoDB, Express, Angular, C#, .Net, SQL, Firebase, AWS.</li>
          <li>Worked extensively on the company's tech stack, known as "Breck package".</li>
          <li>Developed major projects, including building admin dashboards.</li>
          <li className="text-green-500">Received a raise within 4 months of joining the company.</li>
          <li className="text-blue-500">Awarded the "Raving Fans" recognition.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3 className="text-xl font-semibold">NeoFrames - Interior Design Company</h3>
        <p className="text-sm text-gray-500">Frontend Developer (Freelance)</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed the company's landing page using Next.js.</li>
        </ul>
      </div>
    </div>
  );
}
