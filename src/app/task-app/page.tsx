"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUsers,
  FaRocket,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TaskApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">TaskFlow</h1>
        <p className="mt-4 text-lg">Organize your tasks, boost your flow.</p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100">
          Get Started
        </button>
      </header>

      {/* Features */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple Organization</h3>
            <p>
              Easily manage and prioritize your tasks with a clean interface.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaRocket className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
            <p>
              Stay on track and get more done with smart reminders and tracking.
            </p>
          </div>
          <div className="text-center p-6 rounded-lg shadow hover:shadow-lg transition">
            <FaUsers className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p>
              Share tasks and projects with your team to work better together.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Reviews */}
      <motion.section
        className="bg-gray-50 py-16 px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          What People Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p>
              "TaskFlow completely changed how I handle my daily tasks. It’s a
              lifesaver!"
            </p>
            <footer className="mt-4 text-sm font-semibold">– Sarah J.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p>
              "The team features make collaboration seamless. Highly recommend
              it."
            </p>
            <footer className="mt-4 text-sm font-semibold">– Mark T.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-lg shadow">
            <p>
              "I’ve tried other apps, but TaskFlow is the one that stuck. Clean
              and powerful."
            </p>
            <footer className="mt-4 text-sm font-semibold">– Emily R.</footer>
          </blockquote>
        </div>
      </motion.section>

      {/* Pricing */}
      <motion.section
        className="py-16 px-6 max-w-6xl mx-auto"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <p>Basic task management for individuals.</p>
          </div>
          <div className="border-2 border-blue-600 rounded-lg p-6 text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-4xl font-bold mb-4">
              $9<span className="text-lg">/mo</span>
            </p>
            <p>Advanced features and integrations for power users.</p>
          </div>
          <div className="border rounded-lg p-6 text-center shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Team</h3>
            <p className="text-4xl font-bold mb-4">
              $29<span className="text-lg">/mo</span>
            </p>
            <p>Collaboration tools and admin controls for teams.</p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>
            &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaskApp;
