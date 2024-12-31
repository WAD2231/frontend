import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [couponCode, setCouponCode] = useState("");
  return (
    <div className='min-h-screen bg-white p-6'>
      {/* Breadcrumb */}
      <div className='max-w-6xl mx-auto mb-8'>
        <div className='flex items-center gap-2 text-sm text-gray-600'>
          <a href='#'>Account</a>
          <span>/</span>
          <a href='#'>My Account</a>
          <span>/</span>
          <a href='#'>Product</a>
          <span>/</span>
          <a href='#'>View Cart</a>
          <span>/</span>
          <span className='text-black'>CheckOut</span>
        </div>
      </div>

      <div className='max-w-6xl mx-auto'>
        <h1 className='text-2xl font-medium mb-8'>Billing Details</h1>

        <div className='flex gap-12'>
          {/* Left Form */}
          <div className='flex-1 space-y-4'>
            <div>
              <label className='block text-sm mb-2'>
                First Name<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>Company Name</label>
              <input
                type='text'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>
                Street Address<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>
                Apartment, floor, etc. (optional)
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>
                Town/City<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>
                Phone Number<span className='text-red-500'>*</span>
              </label>
              <input
                type='tel'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div>
              <label className='block text-sm mb-2'>
                Email Address<span className='text-red-500'>*</span>
              </label>
              <input
                type='email'
                className='w-full px-4 py-2 bg-gray-100 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
            </div>

            <div className='flex items-center gap-2'>
              <input type='checkbox' id='save-info' className='rounded' />
              <label htmlFor='save-info' className='text-sm'>
                Save this information for faster check-out next time
              </label>
            </div>
          </div>

          {/* Right Summary */}
          <div className='w-96 space-y-6'>
            {/* Order Items */}
            <div className='space-y-4'>
              <div className='flex items-center gap-4'>
                <img
                  src='/api/placeholder/48/48'
                  alt='LCD Monitor'
                  className='w-12 h-12 object-cover'
                />
                <span className='flex-1'>LCD Monitor</span>
                <span className='text-right'>$650</span>
              </div>
              <div className='flex items-center gap-4'>
                <img
                  src='/api/placeholder/48/48'
                  alt='H1 Gamepad'
                  className='w-12 h-12 object-cover'
                />
                <span className='flex-1'>H1 Gamepad</span>
                <span className='text-right'>$1100</span>
              </div>
            </div>

            {/* Totals */}
            <div className='space-y-2 py-4 border-y'>
              <div className='flex justify-between'>
                <span>Subtotal:</span>
                <span>$1750</span>
              </div>
              <div className='flex justify-between'>
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className='flex justify-between font-medium'>
                <span>Total:</span>
                <span>$1750</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className='space-y-4'>
              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='bank'
                  name='payment'
                  value='bank'
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor='bank'>Bank</label>
                <div className='flex gap-2 ml-auto'>
                  {["visa", "mastercard", "apple-pay"].map((card) => (
                    <div key={card} className='w-8 h-5 bg-gray-200 rounded' />
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <input
                  type='radio'
                  id='cash'
                  name='payment'
                  value='cash'
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor='cash'>Cash on delivery</label>
              </div>
            </div>

            {/* Coupon */}
            <div className='flex gap-2'>
              <input
                type='text'
                placeholder='Coupon Code'
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className='flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='px-4 py-2 bg-red-500 text-white rounded'>
                Apply Coupon
              </button>
            </div>

            {/* Place Order */}
            <button className='w-full px-4 py-2 bg-red-500 text-white rounded'>
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
