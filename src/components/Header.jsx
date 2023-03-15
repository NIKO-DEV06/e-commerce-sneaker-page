import React, { Fragment } from "react";

import logoIcon from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import cartIcon from "../images/icon-cart.svg";
import userIcon from "../images/image-avatar.png";

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className="flex justify-between items-center w-[92%]  mx-auto my-7 md:px-10">
          <div className="flex gap-6">
            <img
              className=" cursor-pointer md:hidden w-5"
              src={menuIcon}
              alt="..."
            />
            <img className="md:w-auto" src={logoIcon} alt="..." />
          </div>
          <div className="duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row md:items-center md:gap-[4vw] gap-8 text-darkGrayishBlue">
              <li>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Collections
                </a>
              </li>
              <li>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Men
                </a>
              </li>
              <li>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Women
                </a>
              </li>
              <li>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-9">
            <img src={cartIcon} alt="" className="w-6 h-5 cursor-pointer" />
            <img
              src={userIcon}
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
            />
          </div>
        </nav>
      </header>
      <hr className="md:mx-auto md:border-[1px] border-[0.8px] md:w-[87%] w-full" />
    </Fragment>
  );
};

export default Header;
