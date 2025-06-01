import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaUser } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Link, Navigate } from 'react-router-dom';
import CookieService from '../Services/CreateServices';
import { Bounce, toast } from 'react-toastify';


export default function MenuItemDropdwon() {
  
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline"><FaUser className='text-2xl text-zinc-50'/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 bg-gray-50" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/profile">
            Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/billing">
            Billing
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/settings">
            Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/keyboard-shortcuts">
            Keyboard shortcuts
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        
        <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
         
              Log out
            
            </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}