import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex items-center justify-center px-6">
      <div className="text-center text-white max-w-md">
        <h1 className="text-[120px] font-extrabold drop-shadow-lg leading-none">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-2">Page Not Found</h2>

        <p className="text-sm mt-3 text-gray-200">
          The page you are looking for doesn’t exist or may have been removed.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-lg bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-200 transition"
        >
          <FaHome />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
