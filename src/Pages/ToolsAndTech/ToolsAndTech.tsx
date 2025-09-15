
const toolsAndTechnologies = {
  "Frontend Development": ["React (TypeScript)", "Angular", "Tailwind CSS", "HTML5 & CSS3"],
  "Backend Development": ["Python (Flask, FastAPI)", "Ruby on Rails", "Node.js (basic)"],
  "Databases": ["PostgreSQL", "Informix", "SQLite", "MSSQL", "MySQL", "Firebase"],
  "Programming Languages": ["Python", "C++", "Java", "C#", "JavaScript / TypeScript"],
  "Version Control": ["Git", "GitHub"],
  "Other Skills": [
    "Agile Project Management",
    "Rapid Application Development (RAD)",
    "Technical Troubleshooting",
  ],
};

const TechAndTools: React.FC = () => {
    return (
        <section className="w-full h-full py-8 px-4 sm:px-6 border-r-0 lg:border-r-2 border-b-2 rounded-br-2xl border-gray-50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
                ⚙️ Tools & Technologies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(toolsAndTechnologies).map(([category, items]) => (
                <div
                    key={category}
                    className="bg-midGray border border-gray-700 shadow-lg rounded-2xl p-6"
                >
                    <h3 className="text-xl font-semibold text-orange-400 mb-4">{category}</h3>
                    <ul className="space-y-2 text-white">
                    {items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                        {item}
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    );
};

export default TechAndTools;