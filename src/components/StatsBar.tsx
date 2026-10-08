import { Users, Globe, Star, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const stats = [
  { icon: Users, value: '350+', label: 'Coaches onboarded', sublabel: 'Across 5 countries' },
  { icon: TrendingUp, value: '247%', label: 'Average revenue growth', sublabel: 'In first 12 months' },
  { icon: Star, value: '9.1/10', label: 'Coach satisfaction', sublabel: 'Verified by EPSI Rating' },
  { icon: Globe, value: '12.4K+', label: 'Active clients', sublabel: 'On the platform today' },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="relative z-10 -mt-8 px-6 lg:px-8">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl rounded-3xl border border-neutral-200/60 bg-white p-8 shadow-2xl shadow-neutral-900/5 transition-all duration-700 sm:p-10 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors hover:bg-primary-100">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl font-extrabold tracking-tight text-neutral-900 lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-700">{stat.label}</p>
              <p className="text-xs text-neutral-400">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
