import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";

interface DashboardProps {
  role?: string;
}

export default function Dashboard({ role = "student" }: DashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 capitalize">
              {role}
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to {role.charAt(0).toUpperCase() + role.slice(1)} Dashboard
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            This is a placeholder page. The actual dashboard content for{" "}
            <span className="font-semibold text-blue-600">{role}s</span> will be
            implemented soon.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Attendance
              </h3>
              <p className="text-gray-600">
                Track and manage attendance records efficiently
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-indigo-500">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Learning
              </h3>
              <p className="text-gray-600">
                Access personalized learning materials and activities
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-cyan-500">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Offline Mode
              </h3>
              <p className="text-gray-600">
                Work seamlessly even without internet connection
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-2 border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
          <p>© 2026 SmartAttend — Offline-Ready Attendance System</p>
        </div>
      </footer>
    </div>
  );
}
