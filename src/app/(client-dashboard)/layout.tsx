"use client";

import React, { useState, JSX, ReactNode } from "react";

import { FiBell, FiUser, FiHome, FiList, FiDollarSign } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

const recentActivities = [
  { id: 1, text: "Invoice #102 paid by Acme Inc.", time: "2h ago" },
  { id: 2, text: "Project 'Mobile App UI' updated status.", time: "6h ago" },
  { id: 3, text: "New message from QuickStart.", time: "1d ago" },
];

const navLinks = [
  {
    href: "/client-dashboard",
    label: "Overview",
    icon: <FiHome />,
  },
  {
    href: "/client-dashboard/projects",
    label: "Projects",
    icon: <FiList />,
  },
  {
    href: "/client-dashboard/profile",
    label: "Profile Settings",
    icon: <FiUser />,
  },
];

export default function ClientDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // "routing" in this single-file demo: swap pages with a local state to avoid full refresh.
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#04202d] text-slate-900 dark:text-slate-100">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-white dark:bg-[#06202a] border-r dark:border-[#093142] p-4 transition-transform duration-200 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-64 md:translate-x-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center text-white">
              F
            </div>
            <div>
              <div className="font-semibold">Fictional Freelance</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Admin Dashboard
              </div>
            </div>
          </div>
          <nav className="space-y-1">
            {navLinks.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-slate-100 dark:bg-[#073142] font-semibold"
                      : "hover:bg-slate-50 dark:hover:bg-[#07263b]"
                  }`}
                >
                  <span className="text-lg">{icon}</span>
                  <span>{label}</span>
                </Link>
              );
            })}
            <div className="mt-6 text-xs text-slate-400">Quick actions</div>
            <Link
              href={"/client-dashboard"}
              className="mt-2 w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-[#07263b]"
            >
              <FiDollarSign /> New Invoice
            </Link>
          </nav>
        </aside>

        {/* Main area */}
        <div className="flex-1 ml-0 md:ml-64">
          {/* Header */}
          <header className="sticky top-0 z-10 bg-white dark:bg-[#06202a] border-b dark:border-[#093142] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-[#073142]"
                onClick={() => setSidebarOpen((s) => !s)}
                aria-label="Toggle sidebar"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
              <h1 className="text-lg font-semibold">Dashboard</h1>
              <div className="ml-4 hidden md:block text-sm text-slate-500">
                Overview and project stats
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-[#073142]"
                  onClick={() => setNotificationsOpen((s) => !s)}
                  aria-haspopup="true"
                  aria-expanded={notificationsOpen}
                  aria-label="Notifications"
                >
                  <FiBell />
                </button>
                {notificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#05202b] border dark:border-[#083142] rounded-md shadow-lg overflow-hidden">
                    <div className="p-3 border-b dark:border-[#083142] font-semibold">
                      Recent Activity
                    </div>
                    <ul className="p-2">
                      {recentActivities.map((a) => (
                        <li
                          key={a.id}
                          className="px-2 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-[#0b2a37]"
                        >
                          <div className="text-sm">{a.text}</div>
                          <div className="text-xs text-slate-400">{a.time}</div>
                        </li>
                      ))}
                    </ul>
                    <div className="p-2 border-t dark:border-[#083142] text-center text-xs text-slate-500">
                      View all activity
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-[#073142]">
                <User className=" w-5 h-5 " />
                <div className="hidden md:block text-sm">Furqan</div>
              </div>
            </div>
          </header>

          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
