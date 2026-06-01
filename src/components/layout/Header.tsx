import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `hover:text-blue-500 transition-colors ${
      location.pathname === path ? "text-blue-500 font-semibold" : ""
    }`;

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link to="/" className="text-xl font-bold">
        Nishmitha Kulal
      </Link>
      <nav className="flex gap-6">
        <Link to="/" className={linkClass("/")}>
          Home
        </Link>
        <Link to="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link to="/projects" className={linkClass("/projects")}>
          Projects
        </Link>
        <Link to="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
