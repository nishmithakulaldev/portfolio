import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
}

const Button = ({ label, onClick, variant = "primary", href }: ButtonProps) => {
  const classes = `
    px-4 py-2 rounded transition-colors duration-300
    ${
      variant === "primary"
        ? "bg-blue-500 text-white hover:bg-blue-600"
        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
    }
  `;

  if (href) {
    return (
      <Link
        to={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
