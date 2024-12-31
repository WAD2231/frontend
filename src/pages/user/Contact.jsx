import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { useDarkMode } from "@/components/DarkModeContext";

const Contact = () => {
  const { darkMode } = useDarkMode();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Breadcrumb */}
      <div className='max-w-6xl mx-auto px-6 py-4'>
        <div className='flex items-center gap-2 text-sm'>
          <a 
            href='/' 
            className={`hover:text-gray-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Home
          </a>
          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>/</span>
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>Contact</span>
        </div>
      </div>

      {/* Contact Content */}
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='flex flex-col md:flex-row gap-12'>
          {/* Left - Contact Info */}
          <div className='w-full md:w-1/3 space-y-8'>
            {/* Call Us Section */}
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center'>
                  <Phone className='w-5 h-5 text-white' />
                </div>
                <h2 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Call To Us</h2>
              </div>
              <p className={`mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We are available 24/7, 7 days a week.
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Phone: +8801611112222
              </p>
            </div>

            {/* Divider */}
            <hr className={darkMode ? 'border-gray-700' : 'border-gray-200'} />

            {/* Write To Us Section */}
            <div>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 bg-red-500 rounded-full flex items-center justify-center'>
                  <Mail className='w-5 h-5 text-white' />
                </div>
                <h2 className={`text-xl font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>Write To US</h2>
              </div>
              <p className={`mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className={`mb-1 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Emails: customer@exclusive.com
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                Emails: support@exclusive.com
              </p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className='w-full md:w-2/3'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {['name', 'email', 'phone'].map((field) => (
                  <input
                    key={field}
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                    required
                    className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      darkMode 
                        ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700' 
                        : 'bg-gray-50'
                    }`}
                  />
                ))}
              </div>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Your Message'
                rows='8'
                className={`w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  darkMode 
                    ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700' 
                    : 'bg-gray-50'
                }`}
              />
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200'>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;