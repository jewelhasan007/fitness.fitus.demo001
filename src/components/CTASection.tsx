import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Check } from 'lucide-react';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 px-8 py-16 text-center shadow-2xl shadow-primary-900/20 transition-all duration-700 sm:px-16 lg:py-24 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary-400/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
              The health coaching revolution starts here
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-100/80">
              Apply for a partnership today and get access to the platform, academy, and
              dedicated growth team that will help you scale your coaching business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary-800 shadow-2xl shadow-primary-950/30 transition-all hover:bg-primary-50 hover:shadow-xl active:scale-95"
              >
                Apply for Partnership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Explore the Platform
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {['No setup fees', 'Dedicated growth team', 'Cancel anytime'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-sm font-medium text-primary-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
