import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dt from "@/assets/havit-pad.png";
import Product from "@/components/Product";
import SideBar from "@/layouts/users/components/SideBar";
import icon_arrow from "@/assets/icons_arrow-left.png";
import icon_phone from "@/assets/Category-CellPhone.png";
import icon_cpt from "@/assets/Category-Computer.png";
import icon_sm from "@/assets/Category-SmartWatch.png";
import icon_hp from "@/assets/Category-Headphone.png";
import icon_gam from "@/assets/Category-Gamepad.png";
import speaker_banner from "@/assets/speaker-banner.png";
import ps5 from "@/assets/ps5-slim-goedkope-playstation_large 1.png";
import women from "@/assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import speaker from "@/assets/speaker.png";
import gucci from "@/assets/gucci.png";
import Button from "@/components/Button";
import icon_service1 from "@/assets/icon-service-car.png";
import icon_service2 from "@/assets/icon-service-contact.png";
import icon_service3 from "@/assets/icon-service-security.png";
import { useDarkMode } from "@/components/DarkModeContext";

const CountdownTimer = () => {
  const { darkMode } = useDarkMode();
  const [time] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl">
            {String(time.days).padStart(2, "0")}
          </span>
          <span className="text-sm">Days</span>
        </div>
        <span className="text-2xl">:</span>
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl">
            {String(time.hours).padStart(2, "0")}
          </span>
          <span className="text-sm">Hours</span>
        </div>
        <span className="text-2xl">:</span>
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl">
            {String(time.minutes).padStart(2, "0")}
          </span>
          <span className="text-sm">Minutes</span>
        </div>
        <span className="text-2xl">:</span>
        <div className="flex items-center gap-1">
          <span className="font-bold text-2xl">
            {String(time.seconds).padStart(2, "0")}
          </span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  );
};

let cates = [
  {
    image: icon_phone,
    text: "Phones",
  },
  {
    image: icon_cpt,
    text: "Coputers",
  },
  {
    image: icon_sm,
    text: "SmartWatch",
  },
  {
    image: icon_phone,
    text: "Camera",
  },
  {
    image: icon_hp,
    text: "Headphones",
  },
  {
    image: icon_gam,
    text: "Gaming",
  },
];

const allProducts = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
    image: dt,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    image: dt,
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: dt,
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 98,
    image: dt,
  },
  {
    name: "S-Series Comfort Chair 2",
    price: 375,
    originalPrice: 400,
    discount: 25,
    rating: 4,
    reviews: 98,
    image: dt,
  },
];

const Home = () => {
  const { darkMode } = useDarkMode();

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4;

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(allProducts.length - itemsToShow, prevIndex + 1)
    );
  };

  const currentProducts = allProducts.slice(
    startIndex,
    startIndex + itemsToShow
  );
  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex + itemsToShow < allProducts.length;
  const items = ["", "", "", "", "", ""];
  return (
    <div
      className={`max-w-full mx-auto px-[130px] py-12 ${
        darkMode ? "bg-gray-900 text-white" : ""
      }`}
    >
      <>
        <SideBar />
      </>
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500" />
            <span className="text-red-500 font-medium">Today's</span>
          </div>
          <div className="flex items-center gap-20">
            <h2
              className={`text-3xl font-semibold ${
                darkMode ? "text-white" : ""
              }`}
            >
              Flash Sales
            </h2>
            <CountdownTimer />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border hover:bg-gray-100"
            } ${!canGoPrevious ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ChevronLeft
              className={`w-5 h-5 ${darkMode ? "text-white" : ""}`}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`p-2 rounded-full transition-colors ${
              darkMode
                ? "border-gray-700 hover:bg-gray-800"
                : "border hover:bg-gray-100"
            } ${!canGoNext ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <ChevronRight
              className={`w-5 h-5 ${darkMode ? "text-white" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <div key={startIndex + index}>
            <Product {...product} />
          </div>
        ))}
      </div>

      <div className="text-center mt-20 mb-16">
        <Button isPrimary={true}>View All Products</Button>
      </div>
      <hr className={darkMode ? "border-gray-700" : ""} />

      {/* Categories Section */}
      <div className="flex items-center gap-3 mb-4 mt-10">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded"></div>
        <span className="text-[#DB4444] font-semibold">Categories</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-20 items-end">
          <p
            className={`text-4xl font-semibold leading-none ${
              darkMode ? "text-white" : ""
            }`}
          >
            Browse By Category
          </p>
        </div>
        <div>
          <button
            className={`rounded-full p-2 ${
              darkMode ? "bg-gray-800" : "bg-[#e9e9e9]"
            }`}
          >
            <img src={icon_arrow} alt="Previous" />
          </button>
          <button
            className={`ml-4 rounded-full p-2 ${
              darkMode ? "bg-gray-800" : "bg-[#e9e9e9]"
            }`}
          >
            <img className="rotate-180" src={icon_arrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="my-8">
        <ul className="flex justify-between">
          {cates.map((item, index) => (
            <li
              key={index}
              className={`hover:bg-[#DB4444] flex flex-col items-center justify-center cursor-pointer duration-300 rounded-md py-8 w-[180px] ${
                darkMode
                  ? "border-2 border-gray-700 text-white"
                  : "border-[2px]"
              }`}
            >
              <img src={item.image} alt={item.text} />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <hr className={darkMode ? "border-gray-700" : ""} />

      {/* Best Selling Section */}
      <div className="flex items-center gap-3 mb-4 mt-10">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded"></div>
        <span className="text-[#DB4444] font-semibold">This month</span>
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`text-4xl font-semibold leading-none ${
            darkMode ? "text-white" : ""
          }`}
        >
          Best Selling Products
        </p>
        <Button isPrimary={true}>View All</Button>
      </div>
      <ul className="grid grid-cols-4 gap-5 mt-10 justify-between">
        {items.map((item, index) => {
          if (index > 3) return;
          return (
            <li key={index}>
              <Product />
            </li>
          );
        })}
      </ul>

      {/* Speaker Banner */}
      <div className="px-20 py-10 flex mt-10 bg-black items-center justify-between">
        <div>
          <p className="text-[#00FF66] font-medium">Categories</p>
          <p className="text-white text-[60px]">
            Enhance Your Music Experience
          </p>
          <div className="flex gap-4">
            {Array(4)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  className="flex items-center flex-col justify-center bg-white w-[60px] h-[60px] rounded-full"
                >
                  <p className="font-semibold text-lg leading-none">23</p>
                  <p className="leading-none text-sm">Hours</p>
                </span>
              ))}
          </div>
          <button className="bg-[#00FF66] hover:bg-opacity-85 duration-300 mt-8 text-white rounded-md px-10 py-4">
            Buy Now!
          </button>
        </div>
        <div>
          <img src={speaker_banner} className="w-full" alt="Speaker" />
        </div>
      </div>

      {/* Our Products Section */}
      <div className="flex items-center gap-3 mb-4 mt-10">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded"></div>
        <span className="text-[#DB4444] font-semibold">Our Products</span>
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`text-4xl font-semibold leading-none ${
            darkMode ? "text-white" : ""
          }`}
        >
          Explore Our Products
        </p>
        <div>
          <button
            className={`rounded-full p-2 ${
              darkMode ? "bg-gray-800" : "bg-[#e9e9e9]"
            }`}
          >
            <img src={icon_arrow} alt="Previous" />
          </button>
          <button
            className={`ml-4 rounded-full p-2 ${
              darkMode ? "bg-gray-800" : "bg-[#e9e9e9]"
            }`}
          >
            <img className="rotate-180" src={icon_arrow} alt="Next" />
          </button>
        </div>
      </div>

      {/* Product Grids */}
      <ul className="grid grid-cols-4 gap-5 mt-10 justify-between justify-items-center">
        {items.map((item, index) => {
          if (index > 3) return;
          return (
            <li key={index}>
              <Product />
            </li>
          );
        })}
      </ul>
      <ul className="grid grid-cols-4 gap-5 mt-10 justify-items-center">
        {items.map((item, index) => {
          if (index > 3) return;
          return (
            <li key={index}>
              <Product />
            </li>
          );
        })}
      </ul>
      <div className="text-center mt-20 mb-16">
        <Button isPrimary={true}>View All Products</Button>
      </div>

      {/* New Arrival Section */}
      <div className="flex items-center gap-3 mb-4 mt-10">
        <div className="bg-[#DB4444] w-[20px] h-[40px] rounded"></div>
        <span className="text-[#DB4444] font-semibold">Our Products</span>
      </div>
      <div className="flex items-center justify-between">
        <p
          className={`text-4xl font-semibold leading-none ${
            darkMode ? "text-white" : ""
          }`}
        >
          New Arrival
        </p>
      </div>
      <div className="flex gap-5">
        <div className="bg-black flex-1 relative rounded flex items-end justify-center pt-5">
          <img src={ps5} alt="ps5" />
          <div className="absolute bottom-5 left-5 text-white">
            <h1 className="font-semibold text-2xl">PlayStation 5</h1>
            <p className="text-sm my-3 font-normal">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="font-medium underline">Shop Now</button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div className="bg-black flex-1 relative rounded flex items-end justify-end pt-5">
            <img src={women} alt="Fashion Collection" />
            <div className="absolute bottom-5 left-5 text-white">
              <h1 className="font-semibold text-2xl">Women's Collections</h1>
              <p className="text-sm my-3 font-normal">
                Featured woman collections that give you another vibe.
              </p>
              <button className="font-medium underline">Shop Now</button>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <div className="bg-black flex-1 relative rounded flex items-center justify-center pt-5">
              <img src={speaker} alt="Speakers" />
              <div className="absolute bottom-5 left-5 text-white">
                <h1 className="font-semibold text-2xl">Speakers</h1>
                <p className="text-sm my-3 font-normal">
                  Amazon wireless speakers
                </p>
                <button className="font-medium underline">Shop Now</button>
              </div>
            </div>
            <div className="bg-black flex-1 relative rounded flex items-center justify-center pt-5">
              <img src={gucci} alt="Perfume" />
              <div className="absolute bottom-5 left-5 text-white">
                <h1 className="font-semibold text-2xl">Perfume</h1>
                <p className="text-sm my-3 font-normal">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="font-medium underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className={`flex mt-14 items-center mb-10 justify-evenly ${
          darkMode ? "text-white" : ""
        }`}
      >
        {[
          {
            icon: icon_service1,
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $140",
          },
          {
            icon: icon_service2,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
          },
          {
            icon: icon_service3,
            title: "MONEY BACK GUARANTEE",
            description: "We return money within 30 days",
          },
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img src={service.icon} alt={service.title} />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className={darkMode ? "text-gray-300" : ""}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
