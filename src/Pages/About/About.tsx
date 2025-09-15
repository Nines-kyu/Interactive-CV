
const About: React.FC = () => {
  return (
    <div className="p-4 sm:p-8 text-softWhite font-poppins h-full flex flex-col border-r-0 lg:border-r-2 border-b-2 rounded-br-2xl border-gray-50">
      <div className="flex flex-col mb-6 items-center text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-myOrange mb-2">Hi, I'm Navi</h1>
        <p className="text-steelGray max-w-2xl text-sm sm:text-base">
          A passionate developer exploring web and software projects. I enjoy
          building full-stack applications and continuously learning new
          technologies to improve my craft.
        </p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-warmAmber mb-4">My Work Experience</h2>
          <div className="space-y-4">
            <div className="relative pl-4 sm:pl-6 border-l-2 border-myOrange">
              <h3 className="font-bold">Bachelor in Science in Information Technology</h3>
              <p className="text-steelGray text-xs sm:text-sm">Graduated May 2024</p>
              <ul className="list-disc list-inside text-softWhite text-xs sm:text-sm space-y-1">
                <li>I completed a four-year degree program with a focus on software development and IT systems.</li>
                <li>Focused on full-stack development including frontend and backend technologies.</li>
                <li>Gained hands-on experience in Agile development, system design, and project-based implementation.</li>
                <li>Coursework included Web Technologies, Desktop Application Development, and Database Management.</li>
              </ul>
            </div>

            <div className="relative pl-4 sm:pl-6 border-l-2 border-myOrange">
              <h3 className="font-bold">IT Staff</h3>
              <p className="text-steelGray text-xs sm:text-sm">June 2024 – Aug 2025</p>
              <ul className="list-disc list-inside text-softWhite text-xs sm:text-sm space-y-1">
                <li>Assisted in managing and maintaining internal IT infrastructure and software systems</li>
                <li>Contributed to internal tech documentation and process optimization</li>
                <li>Provided technical support and implemented improvements to system workflows</li>
                <li>Lead Developer of in-house Analytical tool using Angular and Core Web API with MSSQL</li>
              </ul>
            </div>

            <div className="relative pl-4 sm:pl-6 border-l-2 border-myOrange">
              <h3 className="font-bold">Associate Full-Stack/Web/Backend Developer</h3>
              <p className="text-steelGray text-xs sm:text-sm">Future</p>
              <p className="text-softWhite text-xs sm:text-sm">
                Building full-stack web applications and exploring cutting-edge technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-warmAmber mb-4">My Vision</h2>
            <p className="text-softWhite text-xs sm:text-sm leading-relaxed">
              My goal is to transition fully into software development, focusing on creating 
              efficient, scalable, and user-friendly applications. I want to contribute to impactful 
              projects that solve real-world problems.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-warmAmber mb-4">Core Values</h2>
            <ul className="list-disc list-inside text-softWhite text-xs sm:text-sm space-y-1">
              <li>Continuous Learning</li>
              <li>Building Efficient Solutions</li>
              <li>Team Collaboration</li>
              <li>User-Centered Design</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-warmAmber mb-4">My Hobbies</h2>
            <ul className="list-disc list-inside text-softWhite text-xs sm:text-sm space-y-1">
              <li>Learn new concepts and reinvent my approach to development</li>
              <li>Reading about tech trends and software engineering</li>
              <li>Writing small projects to test new tools</li>
              <li>Listening to music while coding</li>
              <li>Restoring and repairing vintage gaming consoles</li>
              <li>Diagnosing and fixing issues in phones, laptops, and PCs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;