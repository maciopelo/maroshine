import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex md:flex-row items-center justify-between px-4 sm:px-8 py-6 bg-gray-950 text-white">
      <div className="hidden sm:flex flex-1 text-left justify-start items-center">
        <Logo />
      </div>

      <div className="flex-1 text-center flex justify-start sm:justify-center items-center font-bold text-xs sm:text-sm">
        <p className="hidden min-[350px]:block pr-1">Copyright</p>
        <span className="text-lg min-[350px]:text-xs">©</span>
      </div>

      <div className="flex-1 sm:flex-1 text-right flex justify-end items-center text-[10px] sm:text-sm">
        <Link href="/privacy-policy">Polityka prywatności</Link>
      </div>
    </footer>
  );
};

export default Footer;
