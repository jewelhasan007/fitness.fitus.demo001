import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, ArrowRight, BookOpen, Award, Users2 } from 'lucide-react';

export default function Academy() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="academy" className="relative overflow-hidden bg-neutral-900 px-6 py-24 lg:px-8 lg:py-32">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary-500/10 blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6740314/pexels-photo-6740314.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Health and fitness coaches learning together"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-primary-600 p-5 shadow-xl sm:-right-6">
              <div className="flex items-center gap-3 text-white">
                <Award className="h-8 w-8" />
                <div>
                  <p className="text-2xl font-bold leading-none">Certified</p>
                  <p className="text-sm text-primary-100">Education Program</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/15 px-4 py-1.5 text-sm font-semibold text-primary-300">
              <GraduationCap className="h-4 w-4" />
              Lenus Academy
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl text-balance">
              The world's first certified education for online coaches
            </h2>
            <p className="text-lg leading-relaxed text-neutral-400">
              Join a holistic approach covering physical, mental, and social aspects of
              health. Our certification program equips you with the knowledge, frameworks,
              and credentials to stand out as a world-class online health coach.
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: BookOpen, title: 'Holistic Curriculum', desc: 'Physical, mental & social health' },
                { icon: Users2, title: 'Expert Mentorship', desc: 'Learn from top practitioners' },
                { icon: Award, title: 'Recognized Credential', desc: 'Industry-recognized certificate' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-primary-500/30 hover:bg-white/[0.07]"
                >
                  <item.icon className="mb-3 h-6 w-6 text-primary-400" />
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary-500/30 transition-all hover:bg-primary-400 hover:shadow-xl hover:shadow-primary-500/40 active:scale-95"
              >
                Enroll Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/5 active:scale-95"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
