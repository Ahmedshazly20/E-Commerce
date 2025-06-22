import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import CookieService from '../Services/CreateServices';
import { FiUser } from 'react-icons/fi';
import { Bounce, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function NavDropDown() {

    const [isopen,setisopen]=useState(true)
    const options = [
      { name: 'Account settings', href: '/MyProfile' }, 
    ];

    const isAuthenticated = CookieService.get("Jwt");
    const userdata = CookieService.get("User")

    const handleLogout = () => {
      toast.success( `🥺😢 See you soon Mr ${userdata}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  
      setTimeout(()=>{
        CookieService.remove('Jwt');
        window.location.href = '/Auth';
      },3000);   
    };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
          {isAuthenticated ? (
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
              <FiUser className="text-xl" />
             <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
           </MenuButton>
            ) : (
              <button>
                <Link to="/Auth">log in</Link>
              </button>
            )}


        
      </div>

      <MenuItems
        transition
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden ${isopen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.name}>
              <Link
                to={option.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-500 hover:text-slate-50 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                {option.name}
              </Link>
            </MenuItem>
          ))}
          
            <MenuItem>
              <button
               
                onClick={handleLogout}
                className="block w-full hover:bg-slate-500 hover:text-slate-50  px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign out
              </button>
            </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  )
}