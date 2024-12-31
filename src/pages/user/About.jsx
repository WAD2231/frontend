import React from "react";
import { useDarkMode } from "@/components/DarkModeContext";
import banner from "@/assets/about/Side Image.png";
import c1 from "@/assets/about/Frame 874.png";
import c2 from "@/assets/about/Frame 875.png";
import c3 from "@/assets/about/Frame 876.png";

import { ShoppingBag, Headphones, Shield } from "lucide-react";

const StatsCard = ({ count, text, isHighlighted }) => {
  const { darkMode } = useDarkMode();
  return (
    <div
      className={`text-center p-6 rounded-lg ${
        isHighlighted
          ? "bg-red-500 text-white"
          : darkMode
          ? "bg-gray-800 text-gray-300"
          : "bg-white text-gray-600"
      }`}>
      <div className='text-3xl font-bold mb-2'>{count}</div>
      <div>{text}</div>
    </div>
  );
};

const TeamMember = ({ name, role, image }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className='text-center'>
      <img src={image} alt={name} className='w-full mb-4' />
      <h3 className={`text-xl font-medium mb-2 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>{name}</h3>
      <p className={`mb-4 ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>{role}</p>
      <div className='flex justify-center gap-4'>
        {["twitter", "instagram", "linkedin"].map((social) => (
          <a 
            key={social} 
            href='#' 
            className={`${
              darkMode 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}>
            <div className='w-6 h-6' />
          </a>
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => {
  const { darkMode } = useDarkMode();
  return (
    <div className='flex flex-col items-center text-center p-6'>
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
        darkMode ? 'bg-gray-700' : 'bg-black'
      }`}>
        <Icon className='w-6 h-6 text-white' />
      </div>
      <h3 className={`text-lg font-bold mb-2 ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
    </div>
  );
};

const About = () => {
  const { darkMode } = useDarkMode();

  const stats = [
    { count: "10.5k", text: "Sellers active our site" },
    { count: "33k", text: "Monthly Products Sale", isHighlighted: true },
    { count: "45.5k", text: "Customer active in our site" },
    { count: "25k", text: "Annual gross sale in our site" },
  ];

  const team = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: c1,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: c2,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: c3,
    },
  ];

  const services = [
    {
      icon: ShoppingBag,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: Shield,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Breadcrumb */}
      <div className='max-w-7xl mx-auto px-4'>
        <div className='py-4 flex items-center gap-2 text-sm'>
          <a href='/' className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Home</a>
          <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>/</span>
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>About</span>
        </div>
      </div>

      {/* Story Section */}
      <section className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-6'>
            <h1 className={`text-4xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>Our Story</h1>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Launched in 1995, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Exclusive has more than 1 million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img
              src={banner}
              alt='Happy shoppers'
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}>
        <div className='max-w-7xl mx-auto px-4 py-16'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid md:grid-cols-3 gap-8'>
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}>
        <div className='max-w-7xl mx-auto px-4 py-16'>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;