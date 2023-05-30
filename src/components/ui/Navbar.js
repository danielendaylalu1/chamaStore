import React from "react";
import calsses from "./navbar.module.css";

const Navbar = () => {
  const navLinks = ["Products", "Pricing", "About", "FAQs"]
  return (
    <ul className={calsses.navbar}>
      {navLinks.map(links=>{
        return <li className={calsses.navbarItem}>{links}</li>
      })}
    </ul>
  );
};

export default Navbar;
