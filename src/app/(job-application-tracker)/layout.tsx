import JobFooter from "@/components/JobFooter";
import JobNavbar from "@/components/JobNavbar";

export const metadata = {
  title: "Job Tracker",
  description: "Track your job applications easily",
};

export default function JobApplicationTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col text-slate-900 dark:text-slate-100">
      <JobNavbar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <JobFooter />
    </div>
  );
}
