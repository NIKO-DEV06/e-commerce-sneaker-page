import React, { Fragment, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";

import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cartIcon from "../images/icon-cart.svg";

const slides = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
];

const thumbnails = [
  { url: thumbnail1 },
  { url: thumbnail2 },
  { url: thumbnail3 },
  { url: thumbnail4 },
];

const Product = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const cartCounter = useSelector((state) => state.cart.counter);

  const incrementHandler = () => {
    dispatch(cartActions.increment());
  };
  const decrementHandler = () => {
    dispatch(cartActions.decrement());
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Fragment>
      <div className="pb-4 md:flex lg:mx-32 md:gap-[3rem]">
        <div className="relative md:w-1/2 transition-opacity">
          <img
            onClick={props.onShowImageModal}
            src={slides[currentIndex].url}
            alt=""
            className="w-full max-h-[320px] md:w-auto md:h-auto md:rounded-2xl md:scale-[1.35] md:absolute md:top-[7.625rem] md:ml-16 cursor-pointer duration-200 transition-opacity"
          />
          <div className="sm:hidden md:flex">
            <img
              onClick={() => setCurrentIndex(0)}
              src={thumbnails[0].url}
              alt=""
              className="w-[5.75rem] h-[5.75rem] rounded-lg absolute top-[32.5rem] left-[0.5rem] cursor-pointer md:hover:opacity-70 duration-200 "
            />
            <img
              onClick={() => setCurrentIndex(1)}
              src={thumbnails[1].url}
              alt=""
              className="w-[5.75rem] h-[5.75rem] rounded-lg absolute top-[32.5rem] left-[7.5rem] cursor-pointer md:hover:opacity-70 duration-200"
            />
            <img
              onClick={() => setCurrentIndex(2)}
              src={thumbnails[2].url}
              alt=""
              className="w-[5.75rem] h-[5.75rem] rounded-lg absolute top-[32.5rem] left-[14.5rem] cursor-pointer md:hover:opacity-70 duration-200"
            />
            <img
              onClick={() => setCurrentIndex(3)}
              src={thumbnails[3].url}
              alt=""
              className="w-[5.75rem] h-[5.75rem] rounded-lg absolute top-[32.5rem] left-[21.5rem] cursor-pointer md:hover:opacity-70 duration-200"
            />
          </div>
          <div
            onClick={prevSlide}
            className="flex absolute top-[43%] left-4 w-10 h-10 bg-white rounded-full cursor-pointer md:hidden"
          >
            <img src={leftArrow} alt="" className="mx-auto p-3 mr-[0.2rem]" />
          </div>
          <div
            onClick={nextSlide}
            className="flex absolute top-[43%] right-4 w-10 h-10 bg-white rounded-full cursor-pointer md:hidden"
          >
            <img src={rightArrow} alt="" className="mx-auto p-3 ml-[0.2rem]" />
          </div>
        </div>
        {/* Description */}
        <div className="md:w-1/2 md:mt-[7.5rem] md:ml-16 md:scale-[0.85] ">
          <div className="">
            <h3 className="uppercase tracking-[0.11em] text-sm md:text-base ml-6 pt-4 pb-3 text-orange font-semibold">
              Sneaker Company
            </h3>
            <h1 className="font-bold ml-6 text-[1.6rem] md:text-[2.8rem] leading-8 md:my-2 md:leading-[3rem]">
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p className="px-6 py-3 text-darkGrayishBlue leading-[1.5] md:leading-[1.8] md:text-lg">
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
                onClick={decrementHandler}
                src={minus}
                alt=""
                className="cursor-pointer md:h-[19px] md:w-[4px] md:rotate-90"
              />
              <p>{cartCounter}</p>
              <img
                onClick={incrementHandler}
                src={plus}
                alt=""
                className="cursor-pointer md:w-4 md:h-5"
              />
            </div>
            <div
              onClick={props.onAddToCart}
              className="flex justify-center mx-6 bg-orange p-[1.1rem] rounded-md mt-4 text-white gap-4 font-bold md:w-[60%] md:mx-0 cursor-pointer md:hover:drop-shadow-glow md:hover:opacity-90 duration-300"
            >
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
