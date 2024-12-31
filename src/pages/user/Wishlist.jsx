import { useDarkMode } from "@/components/DarkModeContext";
import Button from "@/components/Button";
import bag from "@/assets/product-images/bag.png";
import cpu from "@/assets/product-images/cpu.png";
import gamepad1 from "@/assets/product-images/gamepad.png";
import jacket from "@/assets/product-images/jacket.png";
import laptop from "@/assets/product-images/laptop.png";
import screen from "@/assets/product-images/screen.png";
import gamepad2 from "@/assets/product-images/gamepad2.png";
import keyboard from "@/assets/product-images/keyboard.png";
import Product from "@/components/Product";

const wishlist = [
 {
   name: "Gucci duffle bag",
   price: 1160,
   discount: 35,
   image: bag,
 },
 {
   name: "RGB liquid CPU Cooler",
   price: 1960,
   discount: null,
   image: cpu,
 },
 {
   name: "GP11 Shooter USB Gamepad",
   price: 550,
   discount: null,
   image: gamepad1,
 },
 {
   name: "Quilted Satin Jacket",
   price: 750,
   discount: null,
   image: jacket,
 },
];

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

const Wishlist = () => {
 const { darkMode } = useDarkMode();

 return (
   <div className={`px-[130px] py-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
     <div className=''>
       <div className='flex justify-between items-center'>
         <p>Wishlist (4)</p>
         <Button isPrimary={false}>Move All To Bag</Button>
       </div>
       <ul className='grid grid-cols-4 gap-10 mt-5'>
         {wishlist.map((item, index) => {
           return (
             <li key={index}>
               <Product
                 name={item?.name}
                 price={item?.price}
                 image={item?.image}
                 discount={item?.discount}
               />
             </li>
           );
         })}
       </ul>
     </div>
     <div className='py-5'>
       <div className='flex justify-between items-center'>
         <p className='flex items-center gap-3 mb-4'>
           <div className='bg-[#DB4444] w-[20px] h-[40px] rounded'></div>
           <span className='font-semibold'>Just For You</span>
         </p>
         <Button isPrimary={false}>See All</Button>
       </div>
       <ul className='grid py-8 grid-cols-4 gap-10 mt-5'>
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

export default Wishlist;