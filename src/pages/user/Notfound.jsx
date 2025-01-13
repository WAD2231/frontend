import routes from "@/config/routes";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
          >
            Home
          </Link>
          <span className="text-gray-600 dark:text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white">404 Error</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-medium mb-6 text-gray-900 dark:text-white">
          404 Not Found
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Your visited page not found. You may go home page.
        </p>
        <Link
          to={routes.home}
          className="inline-block px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default Notfound;
