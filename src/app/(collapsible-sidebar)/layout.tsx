"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bell,
  Home,
  Menu,
  MenuIcon,
  Settings,
  User,
  User2Icon,
  X,
} from "lucide-react";
import { FaTasks } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

const NAV: NavItem[] = [
  { id: "home", label: "Home", href: "/collapsible-sidebar", icon: <Home /> },
  {
    id: "projects",
    label: "Projects",
    href: "/collapsible-sidebar/projects",
    icon: <GrProjects />,
  },
  {
    id: "tasks",
    label: "Tasks",
    href: "/collapsible-sidebar/tasks",
    icon: <FaTasks />,
  },
  {
    id: "settings",
    label: "Settings",
    href: "/collapsible-sidebar/settings",
    icon: <Settings />,
  },
];

const STORAGE_KEY = "sidebar:open:v1";

export default function SidebarLayout({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  // start closed on small screens by default unless user passed defaultOpen
  const [open, setOpen] = useState<boolean>(defaultOpen ?? false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw !== null) setOpen(raw === "1");
      else if (typeof defaultOpen !== "undefined") setOpen(defaultOpen);
      else setOpen(window.innerWidth >= 1024); // open on desktop by default
    } catch (e) {
      console.log("localstorage get error: ", e);
      // ignore localStorage failures
    }
  }, [defaultOpen]);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, open ? "1" : "0");
    } catch (e) {
      console.log("localstorage set error: ", e);

      // ignore
    }
  }, [open, mounted]);

  // handle escape to close on mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-[#0b1020] text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-20 transform transition-all duration-300 ease-in-out
          ${
            open
              ? "w-64 lg:translate-x-0 shadow-lg"
              : "w-16 lg:w-20 -translate-x-0 lg:translate-x-0"
          }`}
        aria-hidden={!open}
      >
        <div className="h-full flex flex-col bg-white dark:bg-[#071028] border-r dark:border-[#112033]">
          <div className="flex items-center gap-3 px-3 py-4">
            <button
              aria-expanded={open}
              aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0f2333] focus:outline-none focus:ring"
            >
              {/* <ToggleIcon open={open} /> */}
              {open ? <X /> : <Menu />}
            </button>
            <div
              className={`flex items-center gap-2 ${
                open ? "ml-2" : "sr-only"
              } transition-opacity duration-200`}
            >
              <div className="font-bold">Elevvo</div>
              <div className="text-xs text-gray-500">Internship</div>
            </div>
          </div>

          <nav className="flex-1 px-2 py-4 overflow-y-auto overflow-x-hidden">
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0d1f2b] transition-colors ${
                  open ? "justify-start" : "justify-center"
                }`}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </span>
                <span
                  className={`${
                    open ? "ml-2" : "sr-only"
                  } transition-all duration-200`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="px-3 py-4 border-t dark:border-[#112033]">
            <button
              className={`w-full flex items-center gap-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0d1f2b] transition-colors ${
                open ? "justify-start" : "justify-center"
              }`}
              onClick={() => alert("Profile clicked")}
            >
              <User2Icon />
              <div className={`${open ? "ml-2" : "sr-only"}`}>
                <div className="text-sm font-medium">Furqan</div>
                <div className="text-xs text-gray-500">Web Dev</div>
              </div>
            </button>
          </div>
        </div>
      </aside>

      {/* overlay for small screens */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-10 lg:hidden bg-black/40"
        />
      )}

      {/* Main content area */}
      <div
        className={`flex-1 ml-16 lg:ml-0 transition-all duration-300 ease-in-out ${
          open ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        <header className="h-14 flex items-center justify-between px-4 border-b dark:border-[#112033] bg-white/80 dark:bg-[#071028]/80 backdrop-blur">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0f2333] focus:outline-none"
              aria-label="Open sidebar"
            >
              <MenuIcon />
            </button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <input
              placeholder="Search"
              className="hidden md:block px-3 py-1 rounded-md border bg-transparent"
            />
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0f2333]">
              <Bell />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0f2333]">
              <User2Icon />
            </button>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
