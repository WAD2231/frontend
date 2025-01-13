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
    fullname: "",
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await register({
      ...fields,
    });
    if (res.status === 201) {
      setError("");
      navigate(routes.login);
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

            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fields.fullname}
                  onChange={(e) =>
                    setFields({ ...fields, fullname: e.target.value })
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
            </div>

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
