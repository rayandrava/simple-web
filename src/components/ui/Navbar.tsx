import React from "react";
import { ModeToggle } from "./toggle-mode";

const Navbar = () => {
  return (
    <div className="flex">
      <nav className="container mx-auto flex flex-row justify-between px-20 py-6">
        <a
          className="block w-12 aspect-square rounded-lg overflow-hidden"
          href="/"
        >
          <img src="/img/logo.png" alt="Rayandra Valera" />
        </a>
        <li>
          <ModeToggle />
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
