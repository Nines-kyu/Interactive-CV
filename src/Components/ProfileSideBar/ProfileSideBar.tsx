import photo from '../../assets/Navi_Rosca.jpg';
import './ProfileSideBar.css';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub, 
  FaLinkedin,
  FaDatabase
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRubyonrails,
  SiSharp,
  SiAngular,
  SiJavascript,
} from 'react-icons/si';
import { MdEmail, MdLocationOn, MdWork, MdSchool } from 'react-icons/md';

const ProfileSideBar: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4 w-full h-full bg-[#2B2B2B] shadow-xl rounded-2xl">
      <div className="profile-avatar w-32 h-32 sm:w-40 sm:h-40 relative rounded-full overflow-hidden border-4 border-myOrange shadow-lg">
        <img
          src={photo}
          alt="Profile"
          className="profile-image"
        />
      </div>

      {/* Name & Title */}
      <h2 className="mt-2 text-lg sm:text-xl font-bold text-softWhite">Navi Rosca</h2>
      <p className="text-steelGray text-xs sm:text-sm">Full-Stack Developer</p>

      {/* Contact Info */}
      <div className="mt-3 text-xs sm:text-sm space-y-2 w-full text-left text-softWhite">
        <div className="flex items-center gap-2">
          <MdEmail className="text-vividOrange text-lg" />
          <span>icprosca@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-warmAmber text-lg" />
          <span>Philippines</span>
        </div>
      </div>

      <hr className="my-3 w-full border-gray-700/40" />

      {/* Education */}
      <div className="w-full text-left text-xs sm:text-sm text-softWhite">
        <h3 className="uppercase text-[10px] sm:text-xs tracking-wide font-semibold text-steelGray flex items-center gap-2 mb-1">
          <MdSchool className="text-indigo-500" /> Education
        </h3>
        <p className="pl-1">B.S. in Information Technology</p>
        <p className="text-[10px] sm:text-xs pl-1 text-[#7A7A7A]">Graduated 2024</p>
      </div>

      <hr className="my-3 w-full border-gray-700/40" />

      {/* Experience */}
      <div className="w-full text-left text-xs sm:text-sm text-softWhite">
        <h3 className="uppercase text-[10px] sm:text-xs tracking-wide font-semibold text-steelGray flex items-center gap-2 mb-1">
          <MdWork className="text-yellow-500" /> Experience
        </h3>
        <p className="pl-1">IT Staff</p>
        <p className="text-[10px] sm:text-xs pl-1 text-[#7A7A7A]">June 2024 – Aug 2025</p>
      </div>

      <hr className="my-3 w-full border-gray-700/40" />

      {/* Social Links */}
      <div className="w-full text-center text-xs sm:text-sm text-softWhite">
        <h3 className="uppercase text-[10px] sm:text-xs tracking-wide font-semibold text-steelGray mb-3">Connect</h3>
        <div className="flex gap-4 justify-center text-lg sm:text-xl">
          <a href="https://github.com/Nines-kyu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-softWhite hover:text-gray-400" />
          </a>
          <a href="https://www.linkedin.com/in/ivan-christopher-rosca/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-softWhite hover:text-blue-600" />
          </a>
        </div>
      </div>

      <hr className="my-3 w-full border-gray-700/40" />

      {/* Tech Stack */}
      <div className="text-center">
        <h3 className="uppercase text-[10px] sm:text-xs tracking-wide font-semibold text-steelGray mb-3">Tech Stack</h3>
        <div className="flex flex-wrap gap-3 justify-center text-2xl sm:text-3xl text-softWhite">
          <FaReact className="text-blue-500" title="React" />
          <SiAngular className="text-red-600" title="Angular" />
          <SiTypescript className="text-blue-600" title="TypeScript" />
          <SiJavascript className="text-yellow-400" title="JavaScript" />
          <SiTailwindcss className="text-cyan-500" title="Tailwind CSS" />
          <FaNodeJs className="text-green-600" title="Node.js" />
          <FaPython className="text-yellow-500" title="Python" />
          <SiFlask className="text-gray-400" title="Flask" />
          <FaJava className="text-red-500" title="Java" />
          <SiSharp className="text-purple-600" title="C#" />
          <SiRubyonrails className="text-red-700" title="Ruby on Rails" />
          <SiPostgresql className="text-blue-500" title="PostgreSQL" />
          <SiMysql className="text-blue-400" title="MySQL" />
          <SiFirebase className="text-yellow-500" title="Firebase" />
          <FaDatabase className="text-red-500" title="MS SQL Server" />
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;
