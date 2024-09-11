import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../themebutton";
import { NavList } from "../../constants/navList";
import SingleAnchor from "../anchor/single-anchor";
import images from "../../constants/Image";
import { useScrollContext } from '../ScrollContext'; 

const Header: React.FC = () => {
  const { isScrolled } = useScrollContext();

  return (
    <header className={`w-full py-8 absolute left-0 top-0 z-50 trns-3s ${isScrolled ? 'bg-white dark:bg-[#18222A] !py-3 shadow-md' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <Link to={"/"} className="max-w-[250px] text-4xl font-black font-CABIN">
            <img src={images.LOGO} alt="" className="w-full" />
            <span className="font-IBM font-medium text-[14px] tracking-[2.2px] ml-[24px] mt-1 block text-gray-500 dark:text-white leading-5">Lead Software Engineer</span>
          </Link>
          <nav>
            <ul className="flex items-center gap-8 font-IBM font-medium">
              {NavList.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.href} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-acholor" : "hover:text-acholor"}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <div className="text-gray-300 dark:text-gray-600">|</div>
            <SingleAnchor urlPath={"/"} text={"Let's Talk"} type={true} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
