import React from "react";

const Account = () => {
  return (
    <div className='min-h-screen bg-white p-6'>
      <div className='max-w-6xl mx-auto mb-8'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2 text-sm'>
            <a href='#' className='text-gray-600'>
              Home
            </a>
            <span className='text-gray-400'>/</span>
            <span className='text-gray-600'>My Account</span>
          </div>
          <div className='text-sm'>
            Welcome! <span className='text-red-500'>Md Rimel</span>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto flex gap-12'>
        <div className='w-64'>
          <div className='space-y-6'>
            <div>
              <h2 className='font-semibold mb-3'>Manage My Account</h2>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='text-red-500'>
                    My Profile
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600'>
                    Address Book
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600'>
                    My Payment Options
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='font-semibold mb-3'>My Orders</h2>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a href='#' className='text-gray-600'>
                    My Returns
                  </a>
                </li>
                <li>
                  <a href='#' className='text-gray-600'>
                    My Cancellations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className='font-semibold mb-3'>My WishList</h2>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className='flex-1'>
          <h2 className='text-red-500 text-xl font-medium mb-6'>
            Edit Your Profile
          </h2>

          <form className='space-y-6'>
            <div className='flex gap-6'>
              <div className='flex-1'>
                <label className='block text-sm mb-2'>First Name</label>
                <input
                  type='text'
                  value='Md'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-sm mb-2'>Last Name</label>
                <input
                  type='text'
                  value='Rimel'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex-1'>
                <label className='block text-sm mb-2'>Email</label>
                <input
                  type='email'
                  value='rimel1111@gmail.com'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-sm mb-2'>Address</label>
                <input
                  type='text'
                  value='Kingston, 5236, United State'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
              </div>
            </div>

            <div>
              <h3 className='text-sm font-medium mb-4'>Password Changes</h3>
              <div className='space-y-4'>
                <input
                  type='password'
                  placeholder='Current Password'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
                <input
                  type='password'
                  placeholder='New Password'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
                <input
                  type='password'
                  placeholder='Confirm New Password'
                  className='w-full px-4 py-2 bg-gray-100 rounded'
                />
              </div>
            </div>

            <div className='flex justify-end gap-4'>
              <button type='button' className='px-6 py-2 text-sm'>
                Cancel
              </button>
              <button
                type='submit'
                className='px-6 py-2 bg-red-500 text-white rounded'>
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
