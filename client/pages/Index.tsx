import { useState } from "react";
import { Eye, EyeOff, Chrome, QrCode } from "lucide-react";

export default function Index() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    // TODO: Handle actual login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Illustration and Branding */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="mb-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 shadow-lg">
                <QrCode className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">SmartAttend</h1>
              <p className="text-sm text-gray-600">
                Reliable Attendance. Personalized Learning.
              </p>
            </div>
            
            {/* Illustration */}
            <div className="w-full max-w-sm aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fe04584b64b70402b92e609ff1e8218ed%2F8c7eba15199a49129fdae4460358c169?format=webp&width=800&height=1200"
                alt="Person scanning QR code with smartphone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            {/* Welcome Header */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
              <p className="text-gray-600">Sign in to your account to continue</p>
            </div>

            {/* Logo Section for Mobile */}
            <div className="lg:hidden text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 mb-3 shadow-lg">
                <QrCode className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">SmartAttend</h1>
              <p className="text-xs text-gray-600">
                Reliable Attendance. Personalized Learning.
              </p>
            </div>

            {/* Login Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleLogin} className="space-y-5">
                {/* Role Selector */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-left font-medium text-gray-600 hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="capitalize">
                          {role || "Select your role"}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            showRoleDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Dropdown Menu */}
                    {showRoleDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-10">
                        {["student", "faculty", "administrator"].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setRole(option);
                              setShowRoleDropdown(false);
                            }}
                            className="w-full text-left px-4 py-3 font-medium text-gray-700 hover:bg-blue-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                          >
                            {option.charAt(0).toUpperCase() + option.slice(1)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Email/Username Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email or Username
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@institution.edu"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-gray-900 transition-all"
                    required
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-gray-900 transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 rounded border-2 border-gray-300 text-blue-500 focus:ring-2 focus:ring-blue-200 cursor-pointer"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#forgot-password"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot Password?
                  </a>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-3">
                <div className="flex-1 border-t-2 border-gray-200" />
                <span className="text-sm text-gray-500 font-medium">Or</span>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>

              {/* Google Sign In */}
              <button className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all flex items-center justify-center gap-2">
                <Chrome className="w-5 h-5" />
                Sign in with Google
              </button>

              {/* Sign Up Link */}
              <p className="mt-6 text-center text-sm text-gray-600">
                New user?{" "}
                <a
                  href="#register"
                  className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-2 border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-xs text-gray-500">
          <p>© 2026 SmartAttend — Offline-Ready Attendance System</p>
        </div>
      </footer>
    </div>
  );
}
