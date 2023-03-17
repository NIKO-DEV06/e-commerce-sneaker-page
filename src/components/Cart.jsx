import React, { Fragment } from "react";

import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

const Cart = () => {
  return (
    <Fragment>
      <div className="absolute w-[95%] right-[0.6rem] top-[6.5rem] h-[16rem] bg-white z-20 rounded-xl md:drop-shadow-2xl md:w-[30%] md:top-[5.2rem] md:h-[17rem] md:right-[3rem]">
        <h3 className="p-4 font-bold text-lg mt-2 ml-2">Cart</h3>
        <hr className="border-[1px] mt-3" />
        <div className="flex items-center ml-2">
          <img
            src={thumbnail1}
            alt=""
            className="w-[3.5rem] rounded-lg ml-4 mt-5"
          />
          <div className="mt-6 ml-5 leading-[1.5rem]">
            <p className="text-darkGrayishBlue">
              Fall Limited Edition Sneakers
            </p>
            <p className="text-darkGrayishBlue">
              $125 x 3{" "}
              <span className="text-black font-bold ml-2">$375.00</span>
            </p>
          </div>
          <img src={deleteIcon} alt="" className="mt-5 ml-5 pr-4" />
        </div>

        <div className="flex items-center w-[85%] bg-orange mx-auto text-white font-bold text-center h-[3.4rem] mt-6 rounded-lg md:hover:drop-shadow-glow duration-300 cursor-pointer">
          <p className="my-auto mx-auto">Checkout</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
