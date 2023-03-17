import React, { Fragment } from "react";

import image1 from "../images/image-product-1.jpg";
import image2 from "../images/image-product-2.jpg";
import image3 from "../images/image-product-3.jpg";
import image4 from "../images/image-product-4.jpg";
import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import closeIcon from "../images/icon-close.svg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";
import Backdrop from "./Backdrop";

const ImageModal = (props) => {
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

  return (
    <Fragment>
      <div>
        <Backdrop onClose={props.onClose} />
        <div className="absolute z-30 pointer-events-none">
          <div className="sm:hidden md:flex mt-10">
            <div className="w-screen block">
              <div className="sm:hidden md:flex block ml-[29rem] mb-3 justify-center">
                <img
                  onClick={props.onClose}
                  src={closeIcon}
                  alt=""
                  className="w-[1.3rem] cursor-pointer pointer-events-auto"
                />
              </div>
              <img
                src={slides[0].url}
                alt=""
                className="block w-[30rem] rounded-3xl mx-auto left-[30%] pointer-events-auto"
              />
            </div>
            <div className="fixed flex w-[100%] gap-[26.8rem] justify-center h-[72vh] items-center pointer-events-auto">
              <div className="bg-lightGrayishBlue w-[3rem] h-[3rem] grid place-items-center rounded-full cursor-pointer">
                <img src={leftArrow} alt="" className="" />
              </div>
              <div className="bg-lightGrayishBlue w-[3rem] h-[3rem] grid place-items-center rounded-full cursor-pointer">
                <img src={rightArrow} alt="" className="" />
              </div>
            </div>
          </div>

          <div className="sm:hidden md:flex block gap-[1.5rem] mt-[1rem] w-screen justify-center pointer-events-auto">
            <img
              src={thumbnails[0].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg cursor-pointer"
            />
            <img
              src={thumbnails[1].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg cursor-pointer"
            />
            <img
              src={thumbnails[2].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg cursor-pointer"
            />
            <img
              src={thumbnails[3].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageModal;
