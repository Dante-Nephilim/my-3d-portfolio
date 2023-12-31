export function Certifications(){
    const certifications = [
        {
            name: "HackerRank- SQL (Intermediate) Certificate",
            year: 2023,
            skill: "SQL",
            link: "https://www.hackerrank.com/certificates/8ef1081cfc62",
        },
        {
            name: "HackerRank - JavaScript (Intermediate) Certificate",
            year: 2022,
            skill: "JavaScript",
            link: "https://www.hackerrank.com/certificates/e814e21289a1",
        },
        {
            name: "HackerRank - Node.js (Intermediate) Certificate",
            year: 2022,
            skill: "Node",
            link: "https://www.hackerrank.com/certificates/5a30c7525998",
        },
        {
            name: "HackerRank - C# (Basic) Certificate",
            year: 2022,
            skill: "C#",
            link: "https://www.hackerrank.com/certificates/826a9f0ae3d6",
        },
        {
            name: "HackerRank - JavaScript (Basic) Certificate",
            year: 2022,
            skill: "JavaScript",
            link: "https://www.hackerrank.com/certificates/1fe971d7596a",
        },
        {
            name: "HackerRank - React (Basic) Certificate",
            year: 2022,
            skill: "React",
            link: "https://www.hackerrank.com/certificates/31bc6c8ff984",
        },
        {
            name: "HackerRank - SQL (Basic) Certificate",
            year: 2022,
            skill: "SQL",
            link: "https://www.hackerrank.com/certificates/fb631cc91457",
        },
        {
            name: "HackerRank -Node (Basic) Certificate",
            year: 2022,
            skill: "Node",
            link: "https://www.hackerrank.com/certificates/b69e4dfffffb",
        },
    ];
      return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Certifications</h2>
            <ul>
                {certifications.map((certification, index) => (
                    <li key={index} className="flex justify-between items-center py-1 border-b border-gray-200">
                        <div>
                            <p className="font-medium">{certification.name} {certification.year}</p>
                            <p className="text-sm text-gray-500">{certification.skill}</p>
                        </div>
                        <a href={certification.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200">View Certificate</a>
                    </li>
                ))}
            </ul>
        </div>
      );
}