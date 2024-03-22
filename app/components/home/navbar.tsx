import { Link } from "@remix-run/react";


export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-book-open-text text-neutral-200"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        <path d="M6 8h2" />
        <path d="M6 12h2" />
        <path d="M16 8h2" />
        <path d="M16 12h2" />
      </svg>
      <Link
        to="/login"
        className="text-xs underline text-neutral-400 hover:text-neutral-300 transition duration-150"
      >
        Login
      </Link>
    </nav>
  );
}
