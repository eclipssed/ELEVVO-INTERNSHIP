"use client";

import { Bell } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const notifications = [
    { id: 1, text: "New project assigned: Landing Page", time: "2h ago" },
    { id: 2, text: "Payment received: $500", time: "1d ago" },
    { id: 3, text: "Task completed: Logo Design", time: "3d ago" },
  ];

  return (
    <header className="bg-white border-b flex justify-between items-center px-4 py-2 relative">
      <h1 className="font-semibold">Dashboard</h1>
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <Bell className="w-5 h-5" />
        </button>
        {open && (
          <div className="absolute right-4 top-12 w-64 bg-white border rounded shadow">
            <div className="p-2 font-semibold border-b">Notifications</div>
            <ul>
              {notifications.map((n) => (
                <li key={n.id} className="p-2 hover:bg-gray-50 text-sm">
                  <div>{n.text}</div>
                  <span className="text-xs text-gray-400">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header
