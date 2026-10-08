import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
  metric: { value: string; label: string };
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Lindqvist',
    role: 'Strength & Nutrition Coach',
    image:
      'https://images.pexels.com/photos/37963582/pexels-photo-37963582.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      "Lenus completely transformed my coaching business. The platform handles everything from meal plans to client tracking, and the growth team helped me triple my client base in under a year. I couldn't imagine running my business without it.",
    metric: { value: '3.2x', label: 'Client growth in 10 months' },
  },
  {
    name: 'Marcus Bauer',
    role: 'Holistic Health Coach',
    image:
      'https://images.pexels.com/photos/36120641/pexels-photo-36120641.png?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'The Academy certification gave me the credibility I needed, and the platform gave me the tools to deliver real results. My clients love the app experience, and my retention has never been higher.',
    metric: { value: '94%', label: 'Client retention rate' },
  },
  {
    name: 'Elena Rodríguez',
    role: 'Online Fitness Coach',
    image:
      'https://images.pexels.com/photos/6455895/pexels-photo-6455895.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    quote:
      'The growth team is like having a full marketing department. They helped me build my brand from scratch, and now I have a waiting list of clients. The automated communication flows save me hours every week.',
    metric: { value: '€18K', label: 'Monthly revenue' },
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="testimonials" className="bg-neutral-50 px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full bg-secondary-50 px-4 py-1.5 text-sm font-semibold text-secondary-600">
            Coach Stories
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl text-balance">
            Coaches who scaled with{' '}
            <span className="gradient-text">Lenus</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-600">
            Real stories from health and fitness coaches who took their online business
            to the next level with the Lenus platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, delay }: { testimonial: Testimonial; delay: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-3xl border border-neutral-200/60 bg-white p-8 shadow-lg shadow-neutral-900/5 transition-all duration-700 hover:shadow-2xl hover:shadow-neutral-900/10 hover:-translate-y-1 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote className="absolute right-6 top-6 h-10 w-10 text-primary-100" />

      <div className="flex items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent-400 text-accent-400" />
        ))}
      </div>

      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-neutral-700">
        "{testimonial.quote}"
      </p>

      <div className="mt-6 rounded-2xl bg-primary-50 px-4 py-3 text-center">
        <p className="font-display text-2xl font-extrabold text-primary-700">
          {testimonial.metric.value}
        </p>
        <p className="text-xs font-medium text-primary-600/70">{testimonial.metric.label}</p>
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-neutral-100 pt-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-primary-100"
        />
        <div>
          <p className="font-bold text-neutral-900">{testimonial.name}</p>
          <p className="text-sm text-neutral-500">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
