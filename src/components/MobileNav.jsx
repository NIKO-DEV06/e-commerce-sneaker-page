import React, { Fragment } from "react";
import closeIcon from "../images/icon-close.svg";

const MobileNav = (props) => {
  return (
    <Fragment>
      <div>
        <div className="absolute z-30 bg-white h-[125%] w-[65%]">
          <div className="ml-6" onClick={props.onClose}>
            <img src={closeIcon} alt="" className="w-5" />
          </div>
          <ul className="ml-6 mt-11 font-bold tracking-[0.06em] text-lg">
            <li>
              <a href="#">Collections</a>
            </li>
            <li className="mt-6">
              <a href="#">Men</a>
            </li>
            <li className="mt-6">
              <a href="#">Women</a>
            </li>
            <li className="mt-6">
              <a href="#">About</a>
            </li>
            <li className="mt-6">
              <a href="#">Conatct</a>
            </li>
          </ul>
        </div>
        <div
          onClick={props.onClose}
          className="bg-black w-screen absolute h-[125%] opacity-[75%] z-20"
        ></div>
      </div>
    </Fragment>
  );
};

export default MobileNav;
