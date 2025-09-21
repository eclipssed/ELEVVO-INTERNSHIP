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
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center">
      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 left-0 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/task-app" className="text-2xl font-bold text-indigo-600">
            TaskFlow
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#reviews" className="hover:text-indigo-600 transition">
              Reviews
            </a>
            <a href="#pricing" className="hover:text-indigo-600 transition">
              Pricing
            </a>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg flex flex-col items-center gap-4 py-6 font-medium text-gray-700">
            <a
              href="#features"
              className="hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#reviews"
              className="hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="#pricing"
              className="hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Get Started
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className=" bg-gradient-to-b from-indigo-50 to-white min-h-screen w-full  flex items-center justify-center">
        <div className="w-full max-w-6xl min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
          {/* Left Side */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-indigo-600">
              Manage Your Tasks Smarter
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-md">
              TaskFlow helps you prioritize, collaborate, and track your
              progress — all in one simple platform.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3">
                Get Started
              </Button>
              <Button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Side (Illustration) */}
          <motion.div
            className="flex-1 mt-10 md:mt-0 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 border">
              {/* Header */}
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
              </div>
              {/* Fake dashboard rows */}
              <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-24 bg-indigo-100 rounded-lg"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-indigo-200 rounded"></div>
                  <div className="h-16 bg-indigo-200 rounded"></div>
                  <div className="h-16 bg-indigo-200 rounded"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 bg-white px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            TaskFlow is designed to simplify your workflow. From task management
            to collaboration and tracking progress, we’ve got you covered.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
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
      <section id="reviews" className="w-full py-20 bg-gray-50 px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            What People Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            See how TaskFlow is transforming productivity for teams and
            individuals worldwide.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
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
      <section id="pricing" className="w-full py-20 bg-white px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-600">
            Flexible Pricing
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Whether you’re just starting out or managing a team, TaskFlow has a
            plan that fits your needs.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
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
