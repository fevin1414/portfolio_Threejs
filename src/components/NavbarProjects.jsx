import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

const NavbarProject = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(""); // Add this line to define the active state variable
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const updatedNavLinks = navLinks.map((link) => {
    if (link.title === "Projects") {
      return { ...link, to: "/Works" };
    }
    return link;
  });
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            fevin &nbsp;
            <span className="sm:block hidden"> | fevinBiju</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarProject;
