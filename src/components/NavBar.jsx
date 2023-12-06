import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logo from '../../public/favicon.png'

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black p-4 min-h-[60px] z-50">
      <div className="mx-auto w-full max-w-[1400px] flex justify-between items-center">
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
              to={"/category/mouse"}
            >
              Mouses
            </Link>
          </li>
          <li>
            <Link
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              to={"/category/motherboard"}
            >
              Motherboards
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
