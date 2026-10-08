import { ArrowRight, Star, Play, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-primary-700 pt-24">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-secondary-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left column */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-primary-100 backdrop-blur-sm animate-fade-in">
            <Star className="h-4 w-4 fill-accent-400 text-accent-400" />
            <span>9.1 / 10 coach rating — verified by EPSI Rating</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance animate-fade-in-up">
            The health coaching{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary-300 via-primary-200 to-secondary-300 bg-clip-text text-transparent">
                revolution
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C70 3 230 3 298 9"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="300" y2="0">
                    <stop stopColor="#7bd6b8" />
                    <stop offset="1" stopColor="#36abf8" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            starts here
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-primary-100/80 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Fitus is the partner for growth to the world's best health and fitness
            coaches. Get access to the platform, education, and dedicated growth team
            you need to scale your online coaching business.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#platform"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary-800 shadow-2xl shadow-primary-950/40 transition-all hover:bg-primary-50 hover:shadow-primary-900/50 active:scale-95"
            >
              Discover Our Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
            >
              <Play className="h-4 w-4 fill-white" />
              Apply for Partnership
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-4 flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary-300" />
              <span className="text-sm text-primary-100/70">350+ coaches onboarded</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent-400 text-accent-400" />
              ))}
              <span className="ml-1 text-sm text-primary-100/70">4.8 App Store</span>
            </div>
          </div>
        </div>

        {/* Right column — image */}
        <div className="relative animate-slide-in-right" style={{ animationDelay: '0.15s' }}>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-primary-950/50">
            <img
              src="https://images.pexels.com/photos/6496085/pexels-photo-6496085.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Personal trainer guiding a client through a workout"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
          </div>

          {/* Floating stat card — top */}
          <div className="absolute -left-4 top-8 rounded-2xl bg-white/95 p-4 shadow-xl shadow-neutral-900/20 backdrop-blur-md animate-float sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                <TrendingUp className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-500">Client Progress</p>
                <p className="text-lg font-bold text-neutral-900">+247%</p>
              </div>
            </div>
          </div>

          {/* Floating stat card — bottom */}
          <div
            className="absolute -right-2 bottom-12 rounded-2xl bg-white/95 p-4 shadow-xl shadow-neutral-900/20 backdrop-blur-md animate-float sm:-right-6"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  'https://images.pexels.com/photos/37963582/pexels-photo-37963582.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                  'https://images.pexels.com/photos/4853672/pexels-photo-4853672.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                  'https://images.pexels.com/photos/6455895/pexels-photo-6455895.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop',
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-500">Active clients</p>
                <p className="text-sm font-bold text-neutral-900">12,400+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-200/50 lg:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary-200/30 p-1.5">
          <div className="h-2 w-1 rounded-full bg-primary-200/50 animate-scroll-down" />
        </div>
      </div>

      {/* Bottom curve */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0 80H1440V40C1080 0 360 0 0 40V80Z" fill="#f8fafc" />
      </svg>
    </section>
  );
}
