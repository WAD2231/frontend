import React from "react";
import anh from "../assets/image-form.png";
import { useDarkMode } from "../UI/DarkModeContext";

const Login = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-4xl w-full flex rounded-lg shadow-lg overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Image Section */}
        <div className='w-1/2 bg-blue-50 hidden md:block'>
          <div className='relative h-full flex items-center justify-center'>
            <img
              src={anh}
              alt='Shopping cart with smartphone and shopping bags'
              className='object-cover w-full rounded-lg'
            />
          </div>
        </div>

        {/* Form Section */}
        <div className='w-full md:w-1/2 p-8'>
          <div className='max-w-md mx-auto'>
            <h2 className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Log in to Exclusive
            </h2>
            <p className={`text-sm mb-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Enter your details below
            </p>

            <form className='space-y-4'>
              <div>
                <input
                  type='text'
                  placeholder='Email or Phone Number'
                  className={`w-full px-4 py-3 rounded-lg outline-none transition
                    ${darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500' 
                      : 'border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                />
              </div>

              <div>
                <input
                  type='password'
                  placeholder='Password'
                  className={`w-full px-4 py-3 rounded-lg outline-none transition
                    ${darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500' 
                      : 'border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                    }`}
                />
              </div>

              <div className='flex items-center justify-between'>
                <button
                  type='submit'
                  className='bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 transition duration-200'
                >
                  Log in
                </button>

                <a 
                  href='#' 
                  className={`text-sm hover:underline ${
                    darkMode ? 'text-red-400' : 'text-red-500'
                  }`}
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;