import React, { useState, Fragment } from "react";
import Cart from "./Cart";
import ImageModal from "./ImageModal";

import logoIcon from "../images/logo.svg";
import menuIcon from "../images/icon-menu.svg";
import cartIcon from "../images/icon-cart.svg";
import userIcon from "../images/image-avatar.png";
import MobileNav from "./MobileNav";

const Header = (props) => {
  const [isMobileNav, setIsMobileNav] = useState(false);
  const [cart, setCart] = useState(false);

  const showMobileNavHandler = () => {
    setIsMobileNav(true);
  };
  const closeMobileNavHandler = () => {
    setIsMobileNav(false);
  };

  const showCartHandler = () => {
    setCart(!cart);
  };

  return (
    <Fragment>
      <header>
        {props.imageModal && <ImageModal onClose={props.onCloseImageModal} />}
        {isMobileNav && <MobileNav onClose={closeMobileNavHandler} />}
        {cart && <Cart />}
        <nav className="flex justify-between items-center w-[92%]  mx-auto py-7 md:px-10">
          <div className="flex gap-6">
            <img
              className=" cursor-pointer md:hidden w-5"
              src={menuIcon}
              alt="..."
              onClick={showMobileNavHandler}
            />
            <img className="md:w-auto" src={logoIcon} alt="..." />
          </div>
          <div className="duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row md:items-center md:gap-[4vw] gap-8 text-darkGrayishBlue">
              <li className="relative group">
                <div className="h-[0.4rem] w-0 bg-orange absolute top-[3.4rem] group-hover:w-full duration-300"></div>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Collections
                </a>
              </li>
              <li className="relative group">
                <div className="h-[0.4rem] w-0 bg-orange absolute top-[3.4rem] group-hover:w-full duration-300"></div>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Men
                </a>
              </li>
              <li className="relative group">
                <div className="h-[0.4rem] w-0 bg-orange absolute top-[3.4rem] group-hover:w-full duration-300"></div>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Women
                </a>
              </li>
              <li className="relative group">
                <div className="h-[0.4rem] w-0 bg-orange absolute top-[3.4rem] group-hover:w-full duration-300"></div>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  About
                </a>
              </li>
              <li className="relative group">
                <div className="h-[0.4rem] w-0 bg-orange absolute top-[3.4rem] group-hover:w-full duration-300"></div>
                <a className="hover:text-veryDarkBlue duration-200" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-9">
            <div className="relative">
              <div className="bg-orange absolute w-[1.8rem] h-[1.5rem] left-[0.3rem]  text-white rounded-full text-center scale-[0.67] bottom-[0.55rem]">
                3
              </div>
              <img
                onClick={showCartHandler}
                src={cartIcon}
                alt=""
                className="w-6 h-5 cursor-pointer"
              />
            </div>
            <img
              src={userIcon}
              alt=""
              className="w-8 h-8 md:w-10 md:h-10 cursor-pointer md:hover:border-[2px] rounded-full border-orange duration-200"
            />
          </div>
        </nav>
      </header>
      <hr className="md:mx-auto md:border-[1px] border-[0.8px] md:w-[87%] w-full" />
    </Fragment>
  );
};

export default Header;
