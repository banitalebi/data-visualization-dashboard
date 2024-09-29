import { Home, LineChart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Dashboard
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart className="h-4 w-4" />
        Analytics
      </Link>
    </nav>
  );
};

export default Navbar;
