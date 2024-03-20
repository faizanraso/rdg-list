import { Link } from "@remix-run/react";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <p className="text-xs font-medium text-neutral-200">rdg-list</p>

      <Link
        to="/login"
        className="text-xs underline text-neutral-400 hover:text-neutral-300 transition duration-150"
      >
        Login
      </Link>
    </nav>
  );
}
