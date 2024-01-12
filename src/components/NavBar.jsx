import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from "../../public/favicon.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black p-4 min-h-[60px] z-50">
      <div className="mx-auto w-full max-w-[1400px] hidden justify-between items-center sm:flex">
        <Link to={"/"}>
          <img className="max-w-[40px]" src={Logo} />
        </Link>
        <ul className="flex gap-4 text-sm">
          <li>
            <Link
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              to={"/category/GPU"}
            >
              Graphics Cards
            </Link>
          </li>
          <li>
            <Link
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              to={"/category/mouses"}
            >
              Mouses
            </Link>
          </li>
          <li>
            <Link
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              to={"/category/motherboards"}
            >
              Motherboards
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>

      <button
        className="sm:hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {!isOpen ? (
          <RxHamburgerMenu size={"1.5rem"} />
        ) : (
          <IoCloseOutline size={"1.5rem"} />
        )}
      </button>

      {isOpen ? (
        <div className="flex flex-col bg-black gap-8 sm:hidden">
          <ul className="gap-4 text-sm flex flex-col mt-4">
            <li>
              <Link
                className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
                to={"/category/GPU"}
              >
                Graphics Cards
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
                to={"/category/mouses"}
              >
                Mouses
              </Link>
            </li>
            <li>
              <Link
                className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
                to={"/category/motherboards"}
              >
                Motherboards
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
