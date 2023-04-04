import Link from 'next/link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../store/auth/authActions'
import { useRouter } from 'next/router';

const Header = () => {
  const { authReducer: auth } = useSelector((state) => state);
  const dispatch = useDispatch()
  const router = useRouter();

  const handleClick =  (e) => {
    e.preventDefault();
    dispatch(logoutUserAction())
    router.push('/');
  }

  return (
    <header className="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl mb-5">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/">
          <span className="text-2xl font-extrabold text-gray-800">Books</span>
        </Link>

        {
          !auth.isLoggedIn && 
            <div className="flex items-center space-x-1">
              <ul className=" space-x-2 inline-flex">
                <li>
                  <Link
                    href="/auth/signup"
                    className="px-4 py-2 font-semibold text-gray-600 rounded hover:text-gray-700 cursor-pointer"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auth/signin"
                    className="px-4 py-2 font-semibold text-gray-600 rounded hover:text-gray-700 cursor-pointer"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
        }

        {
          auth.isLoggedIn && 
            <div className="flex items-center space-x-1">
              <span>Welcome,  {auth.user.name || ''}</span>
              <ul className=" space-x-2 inline-flex">
                <li>
                  <Link
                    onClick={(e) => handleClick(e)}
                    href="/auth/signup"
                    className="px-4 py-2 font-semibold text-gray-600 rounded hover:text-gray-700 cursor-pointer"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
        }
        
      </div>
    </header>
  );
};

export default Header;
