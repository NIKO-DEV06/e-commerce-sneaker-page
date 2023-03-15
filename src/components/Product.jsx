import React, { Fragment } from "react";
import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";

const Product = () => {
  const slides = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
  ];

  return (
    <Fragment>
      <div className="pb-4 md:flex lg:mx-32 md:gap-[3rem]">
        <div className="relative md:w-1/2">
          <img
            src={slides[0].url}
            alt=""
            className="w-full max-h-[320px] md:w-auto md:h-auto md:rounded-2xl md:scale-[1.35] md:absolute md:top-[7.625rem] md:ml-16"
          />
          <div className="flex absolute top-[43%] left-4 w-10 h-10 bg-white rounded-full cursor-pointer md:hidden">
            <img src={leftArrow} alt="" className="mx-auto p-3 mr-[0.2rem]" />
          </div>
          <div className="flex absolute top-[43%] right-4 w-10 h-10 bg-white rounded-full cursor-pointer md:hidden">
            <img src={rightArrow} alt="" className="mx-auto p-3 ml-[0.2rem]" />
          </div>
        </div>
        {/* Description */}
        <div className="md:w-1/2 md:mt-16 md:ml-16 md:scale-[0.85]">
          <div className="">
            <h3 className="uppercase tracking-[0.11em] text-sm ml-6 pt-4 pb-3 text-orange font-semibold">
              Sneaker Company
            </h3>
            <h1 className="font-bold ml-6 text-[1.6rem] md:text-[2rem] leading-8 md:my-2">
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p className="px-6 py-3 text-darkGrayishBlue leading-[1.5] md:leading-[1.8]">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand
              everything the weather can offer.
            </p>
            <div className="flex justify-between items-baseline mx-6 md:flex-col">
              <div className="flex gap-3">
                <p className="text-[1.6rem] font-bold">$125.00</p>
                <div className="w-[3rem] h-[1.6rem] mt-[0.3rem] text-center bg-paleOrange text-orange font-bold text-[1rem] pt-[0.1rem] rounded-md">
                  50%
                </div>
              </div>
              <p className=" text-grayishBlue font-bold line-through text-[1.1rem]">
                $250.00
              </p>
            </div>
          </div>
          {/* Cart Controls */}
          <div className="md:mt-5 md:flex md:gap-6 md:ml-6">
            <div className="flex justify-between mx-6 md:mx-0 bg-lightGrayishBlue p-[1.1rem] rounded-md mt-4 font-bold md:w-[40%]">
              <img
                src={minus}
                alt=""
                className="cursor-pointer md:h-[19px] md:w-[4px] md:rotate-90"
              />
              <p>0</p>
              <img src={plus} alt="" className="cursor-pointer md:w-4 md:h-5" />
            </div>
            <div className="flex justify-center mx-6 bg-orange p-[1.1rem] rounded-md mt-4 text-white gap-4 font-bold md:w-[60%] md:mx-0 cursor-pointer">
              <img src={cartIcon} alt="" />
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;