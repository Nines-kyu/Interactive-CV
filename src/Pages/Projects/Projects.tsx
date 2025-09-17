
const Projects: React.FC = () => {
    return (
        <div className="p-8 text-softWhite font-poppins h-full flex flex-col border-r-2 border-b-2 rounded-br-2xl border-gray-50">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-myOrange mb-2">
          My Projects
        </h1>
        <p className="text-steelGray max-w-2xl text-center text-sm sm:text-base">
          This section will showcase my projects in the near future. 
          Please check back later for updates!
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="border-2 border-dashed border-warmAmber rounded-xl p-10 text-center">
          <p className="text-softWhite text-base sm:text-lg">
            🚧 Projects coming soon... Stay tuned! 🚧
          </p>
        </div>
      </div>
    </div>
    );
};

export default Projects;