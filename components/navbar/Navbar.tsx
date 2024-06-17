import Link from "next/link";
import Logo from "../icons/logo/Logo";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-6 min-w-fit fixed">
      <Link
        href="/"
        className="flex justify-center items-center gap-2 hover:translate-y-[-1px] duration-200 hover:text-amber-600 cursor-pointer"
      >
        <Logo />
        <p className="font-bold text-xl">Weazard</p>
      </Link>
    </nav>
  );
}
