export function Skills() {
  const skillList = [
    "React",
    "Next JS",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Git",
    "MongoDB",
    "Node JS",
    "Express JS",
    "Prisma",
    "C#",
    "SQL",
    "PostgreSQL",
    ".NET",
    "Angular",
    "Ionic",
    "Firebase",
  ];
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, index) => (
            <span key={index} className="inline-block bg-white p-2 px-4 rounded-full shadow-md text-black">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
