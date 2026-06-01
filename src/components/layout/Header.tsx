import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link to="/" className="text-xl font-bold">
        Nishmitha Kulal
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-500">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-500">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-blue-500">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
