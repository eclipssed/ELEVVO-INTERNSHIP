"use client";

export default function JobFooter() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 py-4 mt-10">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Job Tracker. All rights reserved.</p>
      </div>
    </footer>
  );
}
