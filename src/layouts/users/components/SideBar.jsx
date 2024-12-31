import { useState, useEffect } from "react";

const SideBar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      logo: "🍎",
      title: "iPhone 14 Series",
      subtitle: "Up to 10%",
      subtitle2: "off Voucher",
      image: "https://www.pngall.com/wp-content/uploads/13/iPhone-14-Pro-Max-PNG-Image.png"
    },
    {
      logo: "🎮",
      title: "PS5 Series",
      subtitle: "Up to 20%",
      subtitle2: "off Voucher", 
      image: "https://www.pngall.com/wp-content/uploads/13/PS5-PNG-Images.png"
    },
    {
      logo: "🎧",
      title: "Gaming Headset",
      subtitle: "Up to 15%",
      subtitle2: "off Voucher",
      image: "https://www.pngall.com/wp-content/uploads/13/Gaming-Headset-PNG-Image.png"
    },
    {
      logo: "⌚",
      title: "Smart Watch",
      subtitle: "Up to 25%",
      subtitle2: "off Voucher",
      image: "https://www.pngall.com/wp-content/uploads/13/Smartwatch-PNG-Image-HD.png"
    },
    {
      logo: "💻",
      title: "MacBook Pro",
      subtitle: "Up to 30%",
      subtitle2: "off Voucher",
      image: "https://www.pngall.com/wp-content/uploads/13/Macbook-Pro-PNG-Image-HD.png"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex translate-y-[-50px] gap-8">
      <ul className='flex flex-col gap-5 w-[15%] pt-10 pr-5 border-r-[1px]'>
        <li className='flex gap-7 justify-between'>
          <span className='hover:underline cursor-pointer'>Woman&#39;s Fashion</span>{" "}
        </li>
        <li className='flex gap-7 justify-between'>
          <span className='hover:underline cursor-pointer'>Men&#39;s Fashion</span>{" "}
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Electronics</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Home & Lifestyle</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Medicine</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Sports & Outdoor</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Baby&rsquo;s & Toys</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Groceries & Pets</span>
        </li>
        <li>
          <span className='hover:underline cursor-pointer'>Health & Beauty</span>
        </li>
      </ul>

      {/* Banner Slider */}
      <div className="flex-1 pt-10">
        <div className="relative h-[344px] bg-black text-white overflow-hidden rounded-lg">
          {/* Slides */}
          <div className="h-full relative">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex h-full pl-14 items-center">
                  {/* Left Content */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl">{slide.logo}</span>
                      <span className="text-xl">{slide.title}</span>
                    </div>
                    <div>
                      <h2 className="text-5xl font-semibold">{slide.subtitle}</h2>
                      <h2 className="text-5xl font-semibold">{slide.subtitle2}</h2>
                    </div>
                    <button className="flex items-center gap-2 text-base underline mt-2">
                      Shop Now <span>→</span>
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="flex-1 h-full relative">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index 
                    ? 'bg-red-500' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;