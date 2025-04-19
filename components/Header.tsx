"use client";
import Link from "next/link";
import { useState } from "react";
import HoverText from "./HoverText";
import Logo from "./Logo";
import { sections } from "@/constants";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      id={sections.home}
      className="bg-gray-950 text-white fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-6 max-w-[1920px] mx-auto">
        <Link href="/" className="text-2xl sm:text-4xl">
          <HoverText>
            <Logo />
          </HoverText>
        </Link>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">{navItems(closeMenu)}</ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-900 px-6 pb-6 pt-2">
          <ul className="flex flex-col gap-4">{navItems(closeMenu)}</ul>
        </nav>
      )}
    </header>
  );
};

const navItems = (onClick: () => void) =>
  [
    {
      label: "O mnie",
      href: `#${sections.aboutMe}`,
    },
    {
      label: "Oferta",
      href: `#${sections.offer}`,
    },
    {
      label: "Kontakt",
      href: `#${sections.contact}`,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61573581394167&locale=pl_PL",
      external: true,
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com",
      external: true,
      icon: "instagram",
    },
  ].map((item, index) => (
    <li key={index} onClick={onClick}>
      {item.external ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2"
        >
          {item.icon === "facebook" ? (
            <FacebookIcon />
          ) : item.icon === "instagram" ? (
            <InstagramIcon />
          ) : null}
        </a>
      ) : (
        <Link href={item.href} className="text-lg group block">
          {item.label}
          <span className="block h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Link>
      )}
    </li>
  ));

const FacebookIcon = () => (
  <svg
    viewBox="0,0,256,256"
    width="30px"
    height="30px"
    className="group-hover:scale-110 transition-transform fill-white group-hover:fill-yellow-400"
  >
    <g transform="scale(5.12,5.12)">
      <path d="M25,3c-12.13844,0 -22,9.86156 -22,22c0,11.01913 8.12753,20.13835 18.71289,21.72852l1.14844,0.17383v-17.33594h-5.19727v-3.51953h5.19727v-4.67383c0,-2.87808 0.69065,-4.77363 1.83398,-5.96289c1.14334,-1.18926 2.83269,-1.78906 5.18359,-1.78906c1.87981,0 2.61112,0.1139 3.30664,0.19922v2.88086h-2.44727c-1.38858,0 -2.52783,0.77473 -3.11914,1.80664c-0.59131,1.03191 -0.77539,2.264 -0.77539,3.51953v4.01758h6.12305l-0.54492,3.51953h-5.57812v17.36523l1.13477,-0.1543c10.73582,-1.45602 19.02148,-10.64855 19.02148,-21.77539c0,-12.13844 -9.86156,-22 -22,-22z" />
    </g>
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 50 50"
    fill="#ffffff"
    width="30px"
    height="30px"
    className="transition-transform group-hover:scale-110 group-hover:fill-yellow-400"
  >
    <path d="M34,3H16C8.83,3,3,8.83,3,16v18c0,7.17,5.83,13,13,13h18c7.17,0,13-5.83,13-13V16C47,8.83,41.17,3,34,3z M25,36c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S31.07,36,25,36z M37,15c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,15,37,15z" />
    <path d="M34,25c0,4.96-4.04,9-9,9s-9-4.04-9-9s4.04-9,9-9S34,20.04,34,25z" />
  </svg>
);

export default Header;
