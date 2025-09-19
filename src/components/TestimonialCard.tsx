
type Testimonial = { id: number; name: string; role: string; quote: string };


function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <blockquote className="p-6 border rounded-xl bg-white dark:bg-[#012433] dark:border-slate-700">
      <p className="italic">“{testimonial.quote}”</p>
      <footer className="mt-4 text-sm font-medium">
        — {testimonial.name},{" "}
        <span className="text-slate-500 text-xs">{testimonial.role}</span>
      </footer>
    </blockquote>
  );
}

export default TestimonialCard