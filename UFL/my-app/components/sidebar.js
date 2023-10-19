import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { BsArrowRightShort, BsFillGearFill, BsSearch, BsChevronDown } from 'react-icons/bs';
import Menus from '../components/menuItems';
import Link from 'next/link';

const sideBar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const handleSubmenuToggle = (menuId) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menuId]: !prevState[menuId],
    }));
  };

  return (
    <>
      <div className="flex">
        <div className={`h-screen bg-teal-900 p-5 pt-8 ${open ? 'w-64' : 'w-20'} duration-300 relative`}>
          <BsArrowRightShort
            className={`bg-white text-teal-950 text-3xl rounded-full absolute ml-3 -right-3 top-8 border border-teal-950 cursor-pointer duration-300 ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex -pt-3">
            <BsFillGearFill
              className={`bg-white mr-2 text-3xl text-teal-950 border rounded-full cursor-pointer block float-left duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1 className={`text-white font-bold text-2xl duration-300 -mt-1 ml-2 ${!open && 'scale-0'}`}>Milala</h1>
          </div>

          <div className={`flex items-center rounded-md bg-[#FFFFF7] mt-6 ${!open ? 'px-2.5' : 'px-4'} py-2 bg-opacity-30 backdrop-filter backdrop-blur-lg`}>
            <BsSearch className={`text-white text-xl block float-left cursor-pointer ${open && 'mr-2'}`} />
            <input
              type="search"
              placeholder="Search"
              className={`text-sm bg-transparent w-full text-white focus:outline-none focus:ring-0 placeholder:text-white ${!open && 'hidden'}`}
            />
          </div>

          <ul>
            {Menus.map((menu) => (
              <li
                key={menu.id}
                className={`text-white text-m flex flex-col gap-y-2 cursor-pointer p-2 ${
                  submenuOpen[menu.id] ? '' : 'hover:bg-slate-300 hover:text-teal-900 hover:rounded-lg'
                } mt-2`}
              >
                <div className="flex items-center gap-x-2">
                  <span className="text-3xl">{menu.icon}</span>
                  <span className={`text-base ${!open && 'hidden'}`}>{menu.label}</span>
                  {menu.submenus && open && (
                    <BsChevronDown
                      className={`${submenuOpen[menu.id] ? 'rotate-180' : ''} ${open && 'display'}`}
                      onClick={() => handleSubmenuToggle(menu.id)}
                    />
                  )}
                </div>

                {menu.submenus && submenuOpen[menu.id] && open && (
                  <ul className="text-white text-sm ml-4">
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.id} className="">
                        <div className="flex p-2 items-center">
                          <Link href={submenu.link}>{submenu.label}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default sideBar;
