import React from "react";
import Nav from "./Nav";
import Hero from "../header/Hero";
import Users from "./Users";

function Header() {
  return (
    <div className=" gradient_background pb-[8rem]">
      <Nav />
      <Hero />
      <Users />
    </div>
  );
}

export default Header;
