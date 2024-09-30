"use client";

import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package2,
  Search,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Charts from "./charts-01";
import { ModeToggle } from "./ModeToggle";
import Navbar from "./layouts/Sidebar";
import Sidebar from "./layouts/Navbar";
import { CalendarDateRangePicker } from "./CalendarDateRangePicker";

export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function Dashboard() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r  dark:bg-gray-900 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2
                className={`h-6 w-6 ${
                  resolvedTheme === "dark" ? "text-white" : "text-black"
                }`}
              />
              <span
                className={`${
                  resolvedTheme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Dashboard
              </span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell
                className={`h-4 w-4 ${
                  resolvedTheme === "dark" ? "text-white" : "text-black"
                }`}
              />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <Sidebar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6  dark:bg-gray-900">
          <div className="flex flex-col items-center">
            <CalendarDateRangePicker />
            <Charts />
          </div>
        </main>
      </div>
    </div>
  );
}
