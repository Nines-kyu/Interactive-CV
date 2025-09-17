import './Navigation.css';
import Logo from '../../assets/Navi-logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const buttons = [
    { label: 'About', href: '/about' },
    { label: 'Tools & Technologies', href: '/techandtools' },
    { label: 'Projects', href: '/projects' },
    { label: 'Location', href: '/location' },
    { label: 'Contact', href: '/contactme' }
  ];

  return (
    <nav className="flex flex-col sm:flex-row bg-midGray">
      {/* Logo + Brand */}
      <div className="flex flex-row items-center justify-center pr-6 pl-4 sm:px-4 py-2 border-b-2 sm:border-b-0 sm:border-r-2 border-softWhite">
        <div className="w-9 pt-1">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <Link to="/" className="ml-2 text-xl sm:text-2xl font-bold text-myOrange">
          Nines九
        </Link>
      </div>
      {/* Links */}
      <div className="flex flex-col sm:flex-row">
        {buttons.map(({ label, href }) => {
          const isActive = location.pathname === href;
          return (
            <Link
              key={label}
              to={href}
              className={`
                font-poppins text-base sm:text-lg md:text-2xl px-4 py-2 sm:py-3 text-center transition-colors duration-300
                ${isActive 
                  ? 'text-[#FF6B00] font-semibold'
                  : 'text-[#F5F5F5] hover:text-warmAmber'
                }
              `}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;