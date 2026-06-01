import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">This page doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:underline font-medium">
        ← Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
