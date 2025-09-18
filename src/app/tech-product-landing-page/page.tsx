"use client";

import { useState } from "react";
import { Sun, Moon, CheckCircle, Users, DollarSign, Zap } from "lucide-react";

const TechProductLandingPage = () => {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-700">
          <h1 className="text-2xl font-bold">TechFlow</h1>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Hero */}
        <section className="text-center py-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simplify Your Workflow with TechFlow
          </h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            An all-in-one SaaS solution that helps you organize tasks,
            collaborate with teams, and scale productivity.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>

        {/* Features */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Powerful Features
          </h3>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center">
              <Zap className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Lightning Fast</h4>
              <p>Experience unmatched speed and performance in every task.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Team Collaboration</h4>
              <p>Bring your entire team together with seamless tools.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center">
              <CheckCircle className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Task Automation</h4>
              <p>Automate repetitive workflows and focus on what matters.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6">
          <h3 className="text-3xl font-semibold text-center mb-12">
            What Our Users Say
          </h3>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <p>
                "TechFlow changed the way our team works. Productivity has
                doubled!"
              </p>
              <span className="block mt-4 font-bold">— Alex Johnson</span>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
              <p>
                "The automation feature alone saves us hours every week. Love
                it!"
              </p>
              <span className="block mt-4 font-bold">— Sarah Lee</span>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-3xl font-semibold text-center mb-12">
            Pricing Plans
          </h3>
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center">
              <DollarSign className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Basic</h4>
              <p className="mb-4 text-lg">$9/month</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Choose Plan
              </button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center border-2 border-blue-600">
              <DollarSign className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Pro</h4>
              <p className="mb-4 text-lg">$29/month</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Choose Plan
              </button>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow text-center">
              <DollarSign className="mx-auto mb-4 text-blue-600" size={32} />
              <h4 className="font-bold text-xl mb-2">Enterprise</h4>
              <p className="mb-4 text-lg">Custom Pricing</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 px-6">
          <h3 className="text-3xl font-bold mb-4">
            Ready to boost your workflow?
          </h3>
          <p className="mb-6">
            Sign up today and see how TechFlow can transform your business.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Start Free Trial
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 border-t dark:border-gray-700">
          <p>&copy; 2025 TechFlow. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TechProductLandingPage;
