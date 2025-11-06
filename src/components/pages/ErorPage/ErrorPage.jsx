import { FaHome } from "react-icons/fa";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-[120px]  font-extrabold text-amber-500">404</h1>

        <h2 className="text-3xl font-bold mt-2 text-blue-300">
          Page Not Found
        </h2>

        <p className="text-lg mt-3 text-emerald-600">
          The page you are looking for doesn't exist or may have been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-lg text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-purple-200"
        >
          <FaHome />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
