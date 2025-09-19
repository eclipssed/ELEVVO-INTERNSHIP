"use client";

import React, { JSX, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Users,
  Zap,
  ShieldCheck,
  Star,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import PricingCard from "@/components/PricingCars";

type Feature = {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
};
type Testimonial = { id: number; name: string; role: string; quote: string };

type PricingCardType = {
  name: string;
  desc: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export default function TechProductLandingPage(): JSX.Element {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
    else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setTheme("dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const features: Feature[] = [
    {
      id: 1,
      title: "Instant Insights",
      desc: "Analyze user data in seconds — not the geological timescale.",
      icon: <Zap size={20} />,
    },
    {
      id: 2,
      title: "Secure by Design",
      desc: "Enterprise-grade security without the finger-wagging compliance talk.",
      icon: <ShieldCheck size={20} />,
    },
    {
      id: 3,
      title: "Collaboration",
      desc: "Real-time teamwork with fewer meetings and more actual work.",
      icon: <Users size={20} />,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aisha Khan",
      role: "Head of Growth",
      quote:
        "Cut our onboarding time in half — the onboarding was the worst part, now it's tolerable.",
    },
    {
      id: 2,
      name: "Daniel",
      role: "CTO",
      quote:
        "Resilient, simple API and docs that don't require an academic degree.",
    },
    {
      id: 3,
      name: "Lina M.",
      role: "Product Manager",
      quote: "Design is delightful. Our churn went down and morale went up.",
    },
  ];

  const pricingPlans: PricingCardType[] = [
    {
      name: "Hobby",
      desc: "Perfect for early experiments and side projects.",
      price: "$0/month",
      features: ["Basic dashboards", "1 seat"],
      cta: "Get started",
    },
    {
      name: "Startup",
      desc: "For teams that want reliable signals and fewer fires.",
      price: "$49/month",
      features: ["Everything in Hobby", "Up to 10 seats", "Email support"],
      cta: "Start trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      desc: "Custom plans, SSO, and a human assigned to actually answer the phone.",
      price: "Custom",
      features: ["Unlimited seats", "SLA & SSO", "Dedicated support"],
      cta: "Contact sales",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#071024] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-semibold">SignalSuite</span>
        </div>

        <nav className="hidden sm:flex gap-6 items-center">
          <Link className="hover:underline" href="#features">
            Features
          </Link>
          <Link className="hover:underline" href="#pricing">
            Pricing
          </Link>
          <Link className="hover:underline" href="#testimonials">
            Testimonials
          </Link>
          <Link
            className="btn-sm bg-blue-600 text-white px-4 py-2 rounded-md"
            href="#cta"
          >
            Get Started
          </Link>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </nav>

        <div className="sm:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="p-2 rounded-md border dark:border-slate-700">
            Menu
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        <section className="grid gap-10 md:grid-cols-2 items-center py-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Observability for humans. <br className="hidden md:block" />{" "}
              Decisions for results.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
              SignalSuite surfaces the signals buried under your noise. Fast
              ingestion, buttery dashboards and actionable alerts so you can
              sleep at night. Or at least reduce the caffeine.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md font-medium"
              >
                Start free trial
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 border rounded-md px-4 py-3"
              >
                See pricing
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Star />
                <span className="text-sm">Trusted by teams worldwide</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-64 md:h-80 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#07263b] dark:to-[#04202d] p-6 shadow-lg overflow-hidden">
              <Image
                src="/ai.jpg"
                alt="Demo dashboard"
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-12">
          <h2 className="text-2xl font-bold">Features</h2>
          <p className="text-slate-500 dark:text-slate-300 mt-2 max-w-xl">
            Everything you need to instrument, monitor and act — without the
            usual circus.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <FeatureCard key={f.id} feature={f} />
            ))}
          </div>
        </section>

        <section id="testimonials" className="py-12">
          <h2 className="text-2xl font-bold">What customers say</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>

        <section id="pricing" className="py-12">
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="text-slate-500 mt-2">
            Simple predictable pricing so you don't have to juggle spreadsheets
            and regrets.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <PricingCard
                key={i}
                name={plan.name}
                desc={plan.desc}
                price={plan.price}
                features={plan.features}
                cta={plan.cta}
                highlighted={i === 1}
              />
            ))}
          </div>
        </section>

        <section
          id="cta"
          className="py-12 bg-gradient-to-r from-blue-50 to-white dark:from-[#042b3a] dark:to-[#021b25] rounded-xl p-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold">
              Ready to reduce noise and get results?
            </h2>
            <p className="mt-2 text-slate-500">
              Start a 14-day free trial — no credit card, fewer regrets.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
              >
                Start free trial
              </Link>
              <Link href="#" className="border px-6 py-3 rounded-md">
                Contact sales
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-12 py-8 border-t dark:border-slate-800 text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} SignalSuite. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
