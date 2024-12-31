import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../UI/DarkModeContext";
import screen from "../assets/product-images/screen.png";
import gamepad from "../assets/product-images/gamepad2.png";
import Button from "../UI/Button";

const list = [
 {
   name: "LCD Monitor",
   image: screen,
   price: 650,
 },
 {
   name: "Hi Gamepad",
   image: gamepad,
   price: 550,
 },
];

const Cart = () => {
 const { darkMode } = useDarkMode();

 return (
   <div className={`px-[130px] ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
     <p>
       <Link className={darkMode ? 'text-gray-400' : 'text-[#8a8a8a]'} to={"/"}>
         Home /{" "}
       </Link>{" "}
       <span>Cart</span>
     </p>
     <div className='mt-10'>
       <table className='w-full'>
         <tr className={darkMode ? 'bg-gray-800' : 'shadow-lg'}>
           <td className='px-5 py-5 leading-none'>Product</td>
           <td className='px-5 py-5 leading-none'>Price</td>
           <td className='px-5 py-5 text-center leading-none'>Quantity</td>
           <td className='px-5 py-5 text-right leading-none'>Subtotal</td>
         </tr>
         {list.map((item, index) => {
           return (
             <tr key={index} className={darkMode ? 'bg-gray-800' : 'shadow-lg'}>
               <td className='px-5 py-5 leading-none flex items-center gap-2'>
                 <img className='w-[50px]' src={item?.image} />
                 <span className='leading-none'>{item?.name}</span>
               </td>
               <td className='px-5 py-5 leading-none'>${item?.price}</td>
               <td className='px-5 py-5 text-center leading-none'>
                 <input
                   defaultValue={1}
                   type='number'
                   min={1}
                   className={`w-[45px] py-1 px-2 rounded outline-none ${
                     darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-[1px] border-black'
                   }`}
                 />
               </td>
               <td className='px-5 py-5 text-right'>${item?.price}</td>
             </tr>
           );
         })}
       </table>
       <div className='flex items-center justify-between mt-8 mb-20'>
         <Link to={"/"}>
           <Button isPrimary={false}>Return To Shop</Button>
         </Link>
         <Button isPrimary={false}>Update Cart</Button>
       </div>
       <div className='flex justify-between mb-10'>
         <div className='h-fit gap-4'>
           <input
             type='text'
             className={`outline-none py-[10px] mr-5 h-full rounded pl-4 pr-10 ${
               darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-[1px] border-black'
             }`}
             placeholder='Coupon Code'
           />
           <Button isPrimary={true}>Apply Coupon</Button>
         </div>
         <div className={`w-[40%] px-6 py-8 rounded ${
           darkMode ? 'bg-gray-800 border-2 border-gray-700' : 'border-[2px] border-black'
         }`}>
           <h3>Cart total</h3>
           <div className='flex justify-between my-3'>
             <p>Subtotal:</p>
             <p>$1750</p>
           </div>
           <hr className={darkMode ? 'border-gray-700' : ''} />
           <div className='flex justify-between my-3'>
             <p>Shipping:</p>
             <p>Free</p>
           </div>
           <hr className={darkMode ? 'border-gray-700' : ''} />
           <div className='flex justify-between my-3'>
             <p>Total:</p>
             <p>$1750</p>
           </div>
           <div className='text-center'>
             <Link to={"/checkout"}>
               <Button isPrimary={true}>Process to checkout</Button>
             </Link>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Cart;