import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const tasks = [
  {
    id: 1,
    title: "Task 1: Build a Collapsible Sidebar",
    url: "/collapsible-sidebar",
  },
  { id: 2, title: "Task 2: Create a Contact Form", url: "/contact-form" },
  {
    id: 3,
    title: "Task 3: Build a One-Page Website for a Task App",
    url: "/task-app",
  },
  {
    id: 4,
    title: "Task 4: Create a Personal Blog Homepage",
    url: "/personal-blog",
  },
  {
    id: 5,
    title: "Task 5: Build a Responsive Landing Page for a Tech Product",
    url: "/tech-product-landing-page",
  },
  {
    id: 6,
    title: "Task 6: Multi-Page Dashboard for a Fictional Freelance Client",
    url: "/client-dashboard",
  },
  {
    id: 7,
    title: "Task 7: Build a Real-Time Weather Dashboard Using an API",
    url: "/weather-dashboard",
  },
  {
    id: 8,
    title: "Task 8: Build a Job Application Tracker Web App",
    url: "/job-application-tracker",
  },
];
export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 bg-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-extrabold text-yellow-700">
            Elevvo Internship Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of all completed tasks during my Elevvo internship.
            Explore each project and see the journey of learning and building.
          </p>
        </div>
      </section>

      {/* Tasks Section */}
      <section id="tasks" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold text-yellow-600 mb-6">
          Completed Tasks
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={task.url}
              className="block p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h4 className="text-lg font-bold ">{task.title}</h4>
              <p className="mt-2 text-sm text-gray-500">
                Click to view details
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-2xl font-semibold text-yellow-600">About</h3>
          <p className="mt-4 text-gray-600">
            This site was built as part of the Elevvo internship program to
            demonstrate completed tasks and showcase hands-on learning in web
            development.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
