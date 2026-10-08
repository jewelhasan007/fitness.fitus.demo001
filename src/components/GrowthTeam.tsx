import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Megaphone, Search, Handshake, Target, type LucideIcon } from 'lucide-react';

interface GrowthStep {
  num: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: GrowthStep[] = [
  {
    num: '01',
    icon: Target,
    title: 'Your Dedicated Growth Team',
    description:
      "You're paired with a Key Account Manager and local growth teams specialized in helping you build a brand, market your solution, and bring new clients on board.",
  },
  {
    num: '02',
    icon: Search,
    title: 'Brand & Marketing Engine',
    description:
      'Get expert support to craft your brand identity, produce high-quality content, and run targeted campaigns that attract your ideal clients at scale.',
  },
  {
    num: '03',
    icon: Megaphone,
    title: 'Client Acquisition',
    description:
      'Leverage our proven acquisition funnels, lead generation tools, and conversion frameworks to consistently bring new clients into your coaching practice.',
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Scale & Optimize',
    description:
      'Continuous data-driven optimization of your pricing, offerings, and retention strategies to maximize revenue and long-term client success.',
  },
];

export default function GrowthTeam() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="growth" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full bg-accent-50 px-4 py-1.5 text-sm font-semibold text-accent-600">
            Growth Partnership
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl text-balance">
            A commercial engine to{' '}
            <span className="gradient-text">power your growth</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            At Fitus, you don't just get software — you get a dedicated team of growth
            experts committed to scaling your coaching business every step of the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <GrowthCard key={step.num} step={step} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthCard({ step, delay }: { step: GrowthStep; delay: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative rounded-3xl border border-neutral-200/60 bg-white p-7 transition-all duration-700 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-neutral-100 transition-colors group-hover:text-primary-100">
        {step.num}
      </span>
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/20 transition-transform group-hover:scale-110">
        <step.icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-bold tracking-tight text-neutral-900">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600">{step.description}</p>
      <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
        <div className="h-full w-0 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-700 group-hover:w-full" />
      </div>
    </div>
  );
}
