import React from "react";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <FaCopyright className="mr-2" /> {new Date().getFullYear()} All rights
      reserved Keep Note.
    </div>
  );
};

export default Footer;
