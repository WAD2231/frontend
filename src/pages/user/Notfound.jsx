import { useDarkMode } from "@/components/DarkModeContext";

const Notfound = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Breadcrumb */}
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex items-center gap-2 text-sm'>
          <a 
            href='/' 
            className={`hover:${darkMode ? 'text-gray-300' : 'text-gray-900'} ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Home
          </a>
          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>/</span>
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>
            404 Error
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-6 py-20 text-center'>
        <h1 className={`text-5xl font-medium mb-6 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          404 Not Found
        </h1>
        <p className={`mb-8 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Your visited page not found. You may go home page.
        </p>
        <a
          href='/'
          className='inline-block px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200'
        >
          Back to home page
        </a>
      </div>
    </div>
  );
};

export default Notfound;