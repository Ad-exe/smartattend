import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">SmartAttend</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text mb-4">
              404
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist. This could be a
              placeholder page that hasn't been implemented yet, or the URL might be
              incorrect.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all"
          >
            <Home className="w-5 h-5" />
            Back to Login
          </Link>

          <p className="mt-8 text-sm text-gray-500">
            If you believe this is a feature that should be implemented, please
            continue asking for it in the chat!
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
          <p>© 2026 SmartAttend — Offline-Ready Attendance System</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
