import React from "react";
// import next image
import Image from "next/image";
//import logo
import Logo from "../public/img/header/logo.svg";

const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center">
        {/* logo */}
        <a href="#">
          <Image src={Logo} alt=""/>
        </a>
        {/* nav */}
        <nav className="text-xl flex gap-x-4 lag:gap-x-12">
          <a href="">Services</a>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>
        {/* button */}
        <button className="btn btn-primary lg:btn-outline">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
