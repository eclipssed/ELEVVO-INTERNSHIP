"use client";

import { motion } from "framer-motion";
import {
  FaTasks,
  FaUsers,
  FaChartLine,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { Button } from "@/components/Button";

const pricing = [
  {
    name: "Free",
    price: "$0",
    features: ["Basic tasks", "Single user"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    features: ["Unlimited tasks", "Collaboration", "Insights"],
  },
  {
    name: "Team",
    price: "$29/mo",
    features: ["Team dashboard", "Advanced analytics", "Priority support"],
  },
];

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-indigo-50 to-white px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-indigo-600">TaskFlow</h1>
          <p className="mt-4 text-lg text-gray-600">
            Organize your tasks. Simplify your life.
          </p>
          <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-white px-6">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div>
            <FaTasks className="text-4xl mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Smart Tasking</h3>
            <p className="text-gray-600 mt-2">
              Create, manage, and prioritize tasks with ease.
            </p>
          </div>
          <div>
            <FaUsers className="text-4xl mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Team Collaboration</h3>
            <p className="text-gray-600 mt-2">
              Share tasks with teammates and boost productivity.
            </p>
          </div>
          <div>
            <FaChartLine className="text-4xl mx-auto text-indigo-600" />
            <h3 className="mt-4 text-xl font-semibold">Progress Tracking</h3>
            <p className="text-gray-600 mt-2">
              Stay on top with progress charts and insights.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="w-full py-20 bg-gray-50 px-6">
        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700">
              “TaskFlow made my workday 10x smoother. Absolute game-changer!”
            </p>
            <span className="block mt-4 font-semibold">— Sarah M.</span>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700">
              “Collaboration has never been this seamless. My team loves it.”
            </p>
            <span className="block mt-4 font-semibold">— James R.</span>
          </blockquote>
          <blockquote className="p-6 bg-white rounded-2xl shadow">
            <p className="text-gray-700">
              “Finally, a tool that actually helps me finish my to-do list.”
            </p>
            <span className="block mt-4 font-semibold">— Maria L.</span>
          </blockquote>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-20 bg-white px-6">
        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className="p-6 border rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-indigo-600">
                {plan.name}
              </h3>
              <p className="mt-2 text-3xl font-bold">{plan.price}</p>
              <ul className="mt-4 text-gray-600 space-y-2">
                {plan.features.map((f) => (
                  <li key={f}>✔ {f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-gray-900 text-white px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p>
            &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
