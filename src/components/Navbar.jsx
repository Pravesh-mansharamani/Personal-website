import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navLinks } from "../constants";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container mx-5">
        <a href="/">
          <h1 className="text-xl mx-20">Pravesh Mansharamani</h1>
        </a>
        <ul className="flex-1 flex justify-center item-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}> 
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-sky-500"
                onClick={closeNav}
              > 
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40} />}
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <a href="/">
           <h1 className="text-xl mx-10">Pravesh Mansharamani</h1>
          </a>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-sky-500"
                  onClick={closeNav}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
      </nav>
    </header>
  );
};


export default Navbar;
