import { CheckCircle } from "lucide-react";
import Link from "next/link";

type PricingCardType = {
  name: string;
  desc: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

function PricingCard({
  name,
  desc,
  price,
  features,
  cta,
  highlighted,
}: PricingCardType) {
  return (
    <div
      className={`p-6 border rounded-xl ${
        highlighted
          ? "bg-gradient-to-b from-white to-slate-50 dark:from-[#052235] dark:to-[#02202a] shadow-md"
          : ""
      }`}
    >
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-slate-600 mt-2">{desc}</p>
      <div className="mt-4 text-3xl font-extrabold">{price}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <CheckCircle size={16} /> {f}
          </li>
        ))}
      </ul>
      <Link
        className={`mt-6 inline-block w-full text-center ${
          highlighted ? "bg-blue-600 text-white" : "border"
        } py-2 rounded-md`}
        href="#cta"
      >
        {cta}
      </Link>
    </div>
  );
}

export default PricingCard;
