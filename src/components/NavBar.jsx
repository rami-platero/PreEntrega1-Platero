import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black p-4 min-h-[60px]">
      <div className="mx-auto w-full max-w-[1400px] flex justify-between items-center">
        <ul className="flex gap-4 text-sm">
          <li>
            <a
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              href="/"
            >
              Graphics Cards
            </a>
          </li>
          <li>
            <a
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              href="/"
            >
              Processors
            </a>
          </li>
          <li>
            <a
              className="text-zinc-300 hover:text-white transition duration-200 ease-in-out"
              href="/"
            >
              Monitors
            </a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
