import React from "react";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="sm:hidden md:flex top-0 left-0 right-0 bottom-0 bg-black opacity-75 fixed z-20"
    ></div>
  );
};

export default Backdrop;
