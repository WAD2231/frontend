import React from "react";
import { useDarkMode } from "../UI/DarkModeContext";
import detail1 from "../assets/product-detail/detail1.png";
import detail2 from "../assets/product-detail/detail2.png"; 
import detail3 from "../assets/product-detail/detail3.png";
import detail4 from "../assets/product-detail/detail4.png";
import maind from "../assets/product-detail/detail-main.png";
import star_full from "../assets/icon-star-full.png";
import car from "../assets/product-detail/icon-delivery.png";
import ireturn from "../assets/product-detail/Icon-return.png";
import heart from "../assets/icon-heart.png";
import laptop from "../assets/product-images/laptop.png";
import screen from "../assets/product-images/screen.png";
import gamepad2 from "../assets/product-images/gamepad2.png";
import keyboard from "../assets/product-images/keyboard.png";
import Product from "../UI/Product";
import Button from "../UI/Button";

const just = [
 {
   name: "ASUS FHD Gaming Laptop",
   price: 1160,
   discount: 35,
   image: laptop,
 },
 {
   name: "IPS LCD Gaming Monitor",
   price: 1260,
   discount: null,
   image: screen,
 },
 {
   name: "HAVIT HV-G92 Gamepad",
   price: 560,
   discount: null,
   image: gamepad2,
   isNew: true,
 },
 {
   name: "AK-900 Wired Keyboard",
   price: 200,
   discount: null,
   image: keyboard,
 },
];

const listItems = [];

for (let i = 0; i < 5; i++) {
 listItems.push(
   <span>
     <img src={star_full} />
   </span>
 );
}

const ProductDetail = () => {
 const { darkMode } = useDarkMode();

 return (
   <div className={` px-[130px] py-11 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
     <p>
       Account / Gaming /{" "}
       <span className='font-semibold'>Havit HV G-92 Gamepad</span>
     </p>
     <div className='flex gap-8 my-8'>
       <div className='flex flex-col gap-5'>
         <span className={`w-[170px] h-[170px] flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-[#f5f5f5]'}`}>
           <img src={detail1} />
         </span>
         <span className={`w-[170px] h-[170px] flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-[#f5f5f5]'}`}>
           <img src={detail2} />
         </span>
         <span className={`w-[170px] h-[170px] flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-[#f5f5f5]'}`}>
           <img src={detail3} />
         </span>
         <span className={`w-[170px] h-[170px] flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-[#f5f5f5]'}`}>
           <img src={detail4} />
         </span>
       </div>
       <div className={`flex-1 justify-center flex items-center px-10 ${darkMode ? 'bg-gray-800' : 'bg-[#f5f5f5]'}`}>
         <img src={maind} />
       </div>
       <div className='flex flex-1 flex-col gap-6 pl-10'>
         <p className='text-2xl font-semibold'>Havit HV G-92 Gamepad</p>
         <p className='flex items-center gap-4'>
           <span className='flex items-center gap-1'>
             {listItems} (150 Reviews)
           </span>{" "}
           |{" "}
           <span className='text-[#00FF66] text-sm font-normal'>In Stock</span>
         </p>
         <p className='text-xl'>$192.00</p>
         <p>
           PlayStation 5 Controller Skin High quality vinyl with air channel
           adhesive for easy bubble free install & mess free removal Pressure
           sensitive.
         </p>
         <hr className={darkMode ? 'border-gray-700' : ''} />
         <div className='flex items-center gap-5'>
           <p>Colours:</p>
           <div className='flex items-center gap-2'>
             <div className='bg-[#A0BCE0] border-[2px] border-black w-[25px] h-[24px] rounded-full'></div>
             <div className='bg-[#E07575] rounded-full w-[26px] h-[26px]'></div>
           </div>
         </div>
         <div className='flex items-center gap-4'>
           Size:{" "}
           <div className={`flex items-center w-[40px] cursor-pointer border-[1px] rounded justify-center px-2 py-[6px] ${darkMode ? 'text-white border-gray-600' : 'text-black border-black'} bg-transparent hover:bg-[#DB4444] hover:text-white duration-300`}>
             XS
           </div>{" "}
           <div className={`flex items-center w-[40px] cursor-pointer border-[1px] rounded justify-center px-2 py-[6px] ${darkMode ? 'text-white border-gray-600' : 'text-black border-black'} bg-transparent hover:bg-[#DB4444] hover:text-white duration-300`}>
             S
           </div>{" "}
           <div className={`flex items-center w-[40px] cursor-pointer border-[1px] rounded justify-center px-2 py-[6px] ${darkMode ? 'text-white border-gray-600' : 'text-black border-black'} bg-transparent hover:bg-[#DB4444] hover:text-white duration-300`}>
             M
           </div>{" "}
           <div className={`flex items-center w-[40px] cursor-pointer border-[1px] rounded justify-center px-2 py-[6px] ${darkMode ? 'text-white border-gray-600' : 'text-black border-black'} bg-transparent hover:bg-[#DB4444] hover:text-white duration-300`}>
             L
           </div>{" "}
           <div className={`flex items-center w-[40px] cursor-pointer border-[1px] rounded justify-center px-2 py-[6px] ${darkMode ? 'text-white border-gray-600' : 'text-black border-black'} bg-transparent hover:bg-[#DB4444] hover:text-white duration-300`}>
             XL
           </div>
         </div>
         <div className='flex items-center gap-3'>
           <div className={`flex border-[1px] rounded ${darkMode ? 'border-gray-600' : 'border-black'}`}>
             <button className='px-4 rounded py-[10px] text-xl'>-</button>
             <p className={`border-[1px] flex-grow px-8 py-[10px] text-xl ${darkMode ? 'border-gray-600' : 'border-black'}`}>
               2
             </p>
             <button className='px-4 rounded py-[10px] text-xl text-white bg-[#DB4444]'>
               +
             </button>
           </div>
           <Button isPrimary={true}>Buy Now</Button>
           <button className={`border-[2px] rounded px-3 py-[10px] ${darkMode ? 'border-gray-600' : 'border-black'}`}>
             <img src={heart} />
           </button>
         </div>
         <div>
           <div className={`flex gap-2 items-center px-4 py-3 border-[1px] ${darkMode ? 'border-gray-600' : 'border-black'}`}>
             <img src={car} />
             <div>
               <p className='font-medium'>Free Delivery</p>
               <span className='text-sm'>
                 Enter your postal code for Delivery Availability
               </span>
             </div>
           </div>
           <div className={`flex border-t-transparent gap-2 items-center px-4 py-3 border-[1px] ${darkMode ? 'border-gray-600' : 'border-black'}`}>
             <img src={ireturn} />
             <div>
               <p className='font-medium'>Free Delivery</p>
               <span className='text-sm'>
                 Free 30 Days Delivery Returns. Details
               </span>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div>
       <ul className='grid grid-cols-4 gap-10 mt-5'>
         {just.map((item, index) => {
           return (
             <li key={index}>
               <Product
                 name={item?.name}
                 price={item?.price}
                 image={item?.image}
                 discount={item?.discount}
                 isNew={item?.isNew}
               />
             </li>
           );
         })}
       </ul>
     </div>
   </div>
 );
};

export default ProductDetail;