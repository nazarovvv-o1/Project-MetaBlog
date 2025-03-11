import Image from "next/image";
import Link from "next/link";
import { Switch } from "../ui/switch";

export default function Navbar() {
  return (
    <div className="Container flex justify-between items-center py-8">
      <Link href={"/"}>
        <Image
          src="/Icon/Navbar/Logo2.svg"
          alt="Logo"
          width={158}
          height={36}
          className="dark:block hidden transition-transform duration-300 hover:scale-110"
        />
        <Image
          src="/Icon/Navbar/Logo.svg"
          alt="NavbarLogo"
          width={158}
          height={36}
          className="dark:hidden block transition-transform duration-300 hover:scale-110"
        />
      </Link>
      <div className="flex items-center gap-16">
        <ul className="text-[#3B3C4A] dark:text-white flex items-center gap-10">
          <li className="transition-transform duration-300 hover:scale-110">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            <Link href={"blog-page"}>Blog</Link>
          </li>
        </ul>
        <ul className="text-[#3B3C4A] dark:text-white flex items-center gap-10">
          <li className="transition-transform duration-300 hover:scale-110">
            <Link href={"single-page"}>Single Post</Link>
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            Pages
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#F4F4F5] dark:bg-[#232434] p-2 text-[#A1A1AA] px-5 pr-7 focus:outline-none rounded-md"
          />
          <Image
            src="/Icon/Navbar/search-outline.svg"
            alt="SearchIcon"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110"
            width={16}
            height={16}
          />
        </div>
        <Switch />
      </div>
    </div>
  );
}
