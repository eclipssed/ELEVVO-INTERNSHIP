type Feature = {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="p-6 rounded-xl border dark:border-slate-700 bg-white dark:bg-[#042131] shadow-sm">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900 rounded-md flex items-center justify-center">
          {feature.icon}
        </div>
        <div>
          <h3 className="font-semibold">{feature.title}</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {feature.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default FeatureCard;
