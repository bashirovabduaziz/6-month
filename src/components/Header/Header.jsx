import React from 'react'
import Logo from '../../img/Logo.svg'
import { Link, NavLink } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";


const Header = () => {
  return (

    <header className='w-full leading-8 flex items-center'>
    <div className='container'>
        <div className='flex items-center justify-between'>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
             <ul className='flex items-center gap-7 bg-black border-[3px] border-gray-700 rounded-md w-[420px] h-[50px] mr-[100px]'>
               <li className='ml-[10px]'><NavLink className='text-white font-[300]' to={'/'}>Home</NavLink></li>
               <li><NavLink className='text-white font-[300]' to={'/movies'}>Movies & Shows</NavLink></li>
               <li><NavLink className='text-white font-[300]' to={'/support'}>Support</NavLink></li>
               <li><NavLink className='text-white font-[300]' to={'/subs'}>Subscriptions</NavLink></li>
             </ul>
             <div className='flex items-center gap-2'>
              <Link>
              <IoSearchOutline className='text-white w-[20px] h-[20px]'/>
              </Link>
            <Link>
             <FaRegBell className='text-white w-[20px] h-[20px]'/>
            
            </Link>

             </div>
        </div>
          </div>
    </header>

  )
}

export default Header