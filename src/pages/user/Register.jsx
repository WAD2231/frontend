import { Link, useNavigate } from "react-router-dom";
import anh from "@/assets/image-form.png";
import { useDarkMode } from "@/components/DarkModeContext";
import { useState } from "react";

import { register } from "@/services/authServices";
import routes from "@/config/routes";

const Register = () => {
  const { darkMode } = useDarkMode();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await register({
      ...fields,
      permission: 0,
    });
    if (res.status === 201) {
      setError("");
      navigate(routes.home);
    } else {
      setError(res.data.message);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className={`max-w-4xl w-full flex rounded-lg shadow-lg overflow-hidden ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Image Section */}
        <div className="w-1/2 bg-blue-50 hidden md:block">
          <div className="relative h-full flex items-center justify-center">
            <img src={anh} alt="" className="object-cover h-full rounded-lg" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2
              className={`text-2xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Create an account
            </h2>
            <p
              className={`text-sm mb-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Enter your details below
            </p>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  value={fields.username}
                  onChange={(e) =>
                    setFields({ ...fields, username: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg outline-none transition
                    ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  value={fields.email}
                  onChange={(e) =>
                    setFields({ ...fields, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg outline-none transition
                    ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={fields.password}
                  onChange={(e) =>
                    setFields({ ...fields, password: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg outline-none transition
                    ${
                      darkMode
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                        : "border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                />
              </div>

              <button
                type="button"
                onClick={() => handleSubmit()}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Create Account
              </button>

              <button
                type="button"
                className={`w-full py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-200
                  ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600"
                      : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                <span>Sign up with Google</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Already have an account?
              </span>
              <Link to={routes.login} className="text-blue-500 hover:underline ml-1">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
