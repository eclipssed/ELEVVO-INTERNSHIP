"use client";

import StatCard from "@/components/StatCard";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Project = {
  id: string;
  name: string;
  status: "Active" | "Paused" | "Completed" | "Stalled";
  deadline: string;
  client: string;
};

const COLORS = ["#3182CE", "#2F855A", "#DD6B20", "#805AD5"];
const earningsData = [
  { month: "Jan", earnings: 2400 },
  { month: "Feb", earnings: 1398 },
  { month: "Mar", earnings: 9800 },
  { month: "Apr", earnings: 3908 },
  { month: "May", earnings: 4800 },
  { month: "Jun", earnings: 3800 },
  { month: "Jul", earnings: 4300 },
  { month: "Aug", earnings: 5400 },
  { month: "Sep", earnings: 6700 },
  { month: "Oct", earnings: 7300 },
  { month: "Nov", earnings: 8200 },
  { month: "Dec", earnings: 9100 },
];

const projects: Project[] = [
  {
    id: "p1",
    name: "Marketing Website",
    status: "Active",
    deadline: "2025-10-15",
    client: "Acme Inc",
  },
  {
    id: "p2",
    name: "Mobile App UI",
    status: "Interviewing" as any,
    deadline: "2025-11-01",
    client: "BlueWave",
  },
  {
    id: "p3",
    name: "Ecommerce Revamp",
    status: "Paused",
    deadline: "2025-09-30",
    client: "ShopSmart",
  },
  {
    id: "p4",
    name: "Landing Page A/B",
    status: "Completed",
    deadline: "2025-08-12",
    client: "QuickStart",
  },
];

const taskTypesData = [
  { name: "Design", value: 45 },
  { name: "Dev", value: 30 },
  { name: "QA", value: 15 },
  { name: "Consulting", value: 10 },
];

function OverviewPage() {
  const totalProjects = useMemo(() => projects.length, []);
  const tasksDue = 5; // mock
  const earnings = useMemo(() => 34200, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Projects" value={String(totalProjects)} />
        <StatCard
          title="Earnings (YTD)"
          value={`$${earnings.toLocaleString()}`}
        />
        <StatCard title="Tasks Due" value={String(tasksDue)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md p-4">
          <h3 className="mb-4 font-semibold">Monthly Earnings</h3>
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={earningsData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="earnings" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md p-4">
          <h3 className="mb-4 font-semibold">Task Distribution</h3>
          <div style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={taskTypesData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                >
                  {taskTypesData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="bg-white dark:bg-[#042831] border dark:border-[#083142] rounded-md p-4">
        <h3 className="mb-4 font-semibold">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li className="flex justify-between">
            <span>Invoice #102 paid by Acme Inc.</span>
            <span className="text-xs text-slate-400">2h ago</span>
          </li>
          <li className="flex justify-between">
            <span>Mobile App UI moved to 'In Progress'</span>
            <span className="text-xs text-slate-400">6h ago</span>
          </li>
          <li className="flex justify-between">
            <span>New message from QuickStart</span>
            <span className="text-xs text-slate-400">1d ago</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default OverviewPage;
