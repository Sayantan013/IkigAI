import { getAuthSession } from "@/lib/nextAuth";
import React from "react";
import Link from "next/link";

type Props = {};

// Server component
const Navbar = async (props: Props) => {
  return (
    <div className="fixed inset-x-0 z-[10] top-0 h-fit bg-white dark:bg-gray-950 border-b border-zinc-300 py-2">
      <div className="flex items-center justify-between h-full gap-2 px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:translate-y-[1px] md:block dark:border-white">
            Quizmify
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
