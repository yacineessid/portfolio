import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-900">
<h1 className="text-white text-lg font-bold">Welcome</h1>
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yassine-essid-8476421b2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/yacineessid/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/yacineessid" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
