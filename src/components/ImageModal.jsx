import React, { Fragment } from "react";

import thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../images/image-product-4-thumbnail.jpg";
import closeIcon from "../images/icon-close.svg";
import leftArrow from "../images/icon-previous.svg";
import rightArrow from "../images/icon-next.svg";

const ImageModal = (props) => {
  return (
    <Fragment>
      <div>
        <div className="absolute z-30">
          <div className="sm:hidden md:flex mt-10">
            <div className="w-screen relative">
              <div className="sm:hidden md:flex absolute  left-[65.5%] z-30 top-[80%] mt-6 cursor-pointer">
                <img src={closeIcon} alt="" className="w-[2rem]" />
              </div>
              <img
                src={props.slides[0].url}
                alt=""
                className="absolute w-[30rem] rounded-3xl mx-auto left-[30%]"
              />
            </div>
          </div>
          <div className="sm:hidden md:flex">
            <img
              src={props.thumbnails[0].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg absolute top-[34rem] left-[31%] cursor-pointer duration-200 "
            />
            <img
              src={props.thumbnails[1].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg absolute top-[34rem] left-[43%] cursor-pointer duration-200"
            />
            <img
              src={props.thumbnails[2].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg absolute top-[34rem] left-[53%] cursor-pointer duration-200"
            />
            <img
              src={props.thumbnails[3].url}
              alt=""
              className="w-[5.1rem] h-[5.1rem] rounded-lg absolute top-[34rem] left-[63%] cursor-pointer duration-200"
            />
          </div>
        </div>
        <div className="sm:hidden md:flex w-screen h-screen bg-black opacity-75 absolute z-20"></div>
      </div>
    </Fragment>
  );
};

export default ImageModal;
