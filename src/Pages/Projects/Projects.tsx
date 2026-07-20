import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

// Add your projects here. `image` is optional — leave it out and a
// placeholder icon shows instead. Same for liveUrl/githubUrl — only
// the links you provide will render.
const projects: Project[] = [
  {
    title: "Interactive CV",
    description: "A personal portfolio site — the one you're looking at right now — built with React, TypeScript, and Tailwind CSS.",
    githubUrl: "https://github.com/Nines-kyu",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Nines九 Network",
    description: "A personal, self-hosted local AI assistant running on repurposed home-server hardware — Django + Channels on the backend, React/TypeScript on the frontend, with Ollama serving the model.",
    githubUrl: "https://github.com/Nines-kyu",
    tags: ["Django", "React", "TypeScript", "Ollama", "WebSockets"],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 text-softWhite font-poppins min-h-full flex flex-col border-r-0 lg:border-r-2 border-b-2 rounded-br-2xl border-gray-50">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-myOrange mb-2">
          My Projects
        </h1>
        <p className="text-steelGray max-w-2xl text-center text-sm sm:text-base">
          A few things I've built. More on the way!
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-1 items-center justify-center">
          <div className="border-2 border-dashed border-warmAmber rounded-xl p-6 sm:p-10 text-center">
            <p className="text-softWhite text-base sm:text-lg">
              🚧 Projects coming soon... Stay tuned! 🚧
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-midGray border border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col hover:border-myOrange transition-colors duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-video bg-[#1C1C1C] flex items-center justify-center overflow-hidden shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FaCode className="text-5xl text-steelGray" />
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-warmAmber mb-2">{project.title}</h3>
                <p className="text-steelGray text-sm mb-4 flex-1">{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wide bg-[#1C1C1C] text-steelGray px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-auto pt-3 border-t border-gray-700/40">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-softWhite hover:text-myOrange transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-softWhite hover:text-myOrange transition-colors duration-300"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;