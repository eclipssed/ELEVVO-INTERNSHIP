"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", earnings: 800 },
  { month: "Feb", earnings: 1200 },
  { month: "Mar", earnings: 600 },
  { month: "Apr", earnings: 1500 },
];

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-sm text-gray-500">Total Projects</h2>
          <p className="text-2xl font-bold">24</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-sm text-gray-500">Earnings</h2>
          <p className="text-2xl font-bold">$12,400</p>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-sm text-gray-500">Tasks Due</h2>
          <p className="text-2xl font-bold">7</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Monthly Earnings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded shadow p-4">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <ul className="text-sm space-y-2">
          <li>✔ Completed &quot;Portfolio Website&quot;</li>
          <li>💰 Received $300 from Client X</li>
          <li>📌 New project: Mobile App UI</li>
        </ul>
      </div>
    </div>
  );
}
