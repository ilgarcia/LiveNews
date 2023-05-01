import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <GiHamburgerMenu className="h-8 w-8 cursor-pointer" />
        <Link href={"/"} prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            Live <span className="underline decoration-6 decoration-orange-400">News</span>
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* DarkModeButton */}
          <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Subscribe Now
          </button>
        </div>
      </div>
      {/* NavLinks */}
      <NavLinks />

      {/* SearchBox */}
    </header>
  );
}

export default Header;
