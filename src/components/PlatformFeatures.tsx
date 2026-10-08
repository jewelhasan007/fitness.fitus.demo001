import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  ClipboardList,
  Dumbbell,
  Activity,
  MessageSquare,
  BarChart3,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const features: Feature[] = [
  {
    icon: ClipboardList,
    title: 'Flexible Assessment & Goals',
    description:
      'Set realistic goals, manage progress, and tailor meals, habits and exercise plans with scientifically backed assessment templates.',
    image:
      'https://images.pexels.com/photos/6823515/pexels-photo-6823515.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['Custom check-in templates', 'Progress tracking', 'Goal-based planning'],
  },
  {
    icon: Dumbbell,
    title: 'Swift Meal & Exercise Plans',
    description:
      'Access the Fitus library of recipes, activities and exercises crafted by in-house nutrition and holistic health experts.',
    image:
      'https://images.pexels.com/photos/30392962/pexels-photo-30392962.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['1,000+ recipe library', 'Exercise database', 'Special diet support'],
  },
  {
    icon: Activity,
    title: 'Effective Activity & Habit Tracking',
    description:
      'Set habits and goals for activities supported by live metrics. Follow along as your clients record activities and log their habits.',
    image:
      'https://images.pexels.com/photos/4426517/pexels-photo-4426517.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['Live metrics sync', 'Habit logging', 'Apple Health & Google Fit'],
  },
  {
    icon: MessageSquare,
    title: 'Powerful Ways to Connect',
    description:
      "Share communication targeted to your clients' journey. Automate flows, broadcast updates, and build strong client group communities.",
    image:
      'https://images.pexels.com/photos/3822725/pexels-photo-3822725.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['Automated comms flows', 'Client group channels', 'Targeted broadcasts'],
  },
  {
    icon: BarChart3,
    title: 'Comprehensive Client Dashboard',
    description:
      'Manage a powerful overview of clients and their progress with training details, live stats, smart filtering, tagging, and nudging.',
    image:
      'https://images.pexels.com/photos/7947956/pexels-photo-7947956.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['Live client overview', 'Smart filtering & tags', 'Priority task management'],
  },
  {
    icon: Smartphone,
    title: 'Your Own Branded App',
    description:
      'Give your clients a premium app experience with workout tracking, meal plans, chat, and progress — all under your brand.',
    image:
      'https://images.pexels.com/photos/17947753/pexels-photo-17947753.jpeg?auto=compress&cs=tinysrgb&w=900',
    features: ['White-label branding', 'iOS & Android', 'In-app messaging'],
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 ${
        isReversed ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* Text */}
      <div
        className={`transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/25">
          <feature.icon className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
          {feature.title}
        </h3>
        <p className="mt-4 text-lg leading-relaxed text-neutral-600">{feature.description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {feature.features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100">
                <svg className="h-3.5 w-3.5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm font-medium text-neutral-700">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div
        className={`transition-all duration-700 ${
          isVisible
            ? isReversed
              ? 'translate-x-0 opacity-100'
              : 'translate-x-0 opacity-100'
            : isReversed
              ? 'translate-x-10 opacity-0'
              : '-translate-x-10 opacity-0'
        }`}
        style={{ transitionDelay: '0.15s' }}
      >
        <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/10">
          <img
            src={feature.image}
            alt={feature.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function PlatformFeatures() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="platform" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
            Power of the Platform
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl text-balance">
            Everything you need to lift your{' '}
            <span className="gradient-text">coaching business</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Get access to all the tools and in-house expertise needed to run and grow your
            online coaching business. With the Fitus platform, a world of opportunity awaits.
          </p>
        </div>

        {/* Features */}
        <div className="mt-20 flex flex-col gap-24 lg:gap-32">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
