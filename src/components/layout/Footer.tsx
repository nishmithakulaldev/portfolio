import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 px-6 py-4 border-t">
      <div className="flex gap-4">
        <Link
          to="https://www.linkedin.com/in/nishmitha-kulal-40a45bb2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500"
        >
          LinkedIn
        </Link>
        <Link
          to="https://github.com/nishmithakulaldev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500"
        >
          GitHub
        </Link>
      </div>
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nishmitha Kulal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
