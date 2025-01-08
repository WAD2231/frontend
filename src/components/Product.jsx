import star_full from "@/assets/icon-star-full.png";
import havit_pad from "@/assets/havit-pad.png";
import icon_heart from "@/assets/icon-heart.png";
import icon_eye from "@/assets/icon-eye.png";
import { Link } from "react-router-dom";

const Product = ({ name, price, discount, image, isNew, ...props }) => {
  const listItems = [
    //   { id: 1, Name: "HAIT HV-G92 Gamepad", sale: "40%", price: "300" },
  ];

  for (let i = 0; i < 5; i++) {
    listItems.push(
      <span key={i}>
        <img src={star_full} alt="star" />
      </span>
    );
  }
  return (
    <Link to={"/product-detail"}>
      <div className='cursor-pointer min-w-[300px] flex flex-col gap-2'>
        {/* {listItems.map()
        } */}
        <div className='bg-[#F5F5F5] group overflow-hidden flex justify-center p-16 relative'>
          <img src={image ? image : havit_pad} alt='' />
          <span className='absolute top-3 left-3'>
            {discount && (
              <button className='bg-[#DB4444] text-white px-2 py-1 rounded-md'>
                {`-${discount}%`}
              </button>
            )}
          </span>
          <span className='absolute top-3 left-3'>
            {isNew && (
              <button className='bg-[#00FF66] text-white px-2 py-1 rounded-md'>
                New
              </button>
            )}
          </span>
          <div className='flex flex-col absolute gap-2 top-3 right-3'>
            <button className='bg-white w-fit p-2 rounded-full'>
              <img className='w-7' src={icon_heart} alt='' />
            </button>
            <button className='bg-white w-fit p-2 rounded-full'>
              <img className='w-7' src={icon_eye} alt='' />
            </button>
          </div>
          <button className='bg-black py-2 duration-300 text-white w-full absolute group-hover:translate-y-0 translate-y-[100%] bottom-0 right-0'>
            Add to cart
          </button>
        </div>
        <p>{name ? name : "HAIT HV-G92 Gamepad"}</p>
        <div>
          {discount ? (
            <>
              <span className='text-[#DB4444]'>
                ${(price * (100 - discount)) / 100}
              </span>{" "}
              <span className='text-[#ccc] line-through'>${price}</span>
            </>
          ) : price ? (
            <span className='text-[#DB4444]'>${price}</span>
          ) : (
            <span className='text-[#DB4444]'>${100}</span>
          )}
        </div>
        <div className='flex items-center gap-1'>{listItems} (88)</div>
      </div>
    </Link>
  );
};

export default Product;
