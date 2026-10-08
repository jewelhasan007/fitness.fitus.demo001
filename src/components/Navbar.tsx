import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Academy', href: '#academy' },
  { label: 'Growth', href: '#growth' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-neutral-900/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary-700 transition-colors">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/30">
            <Heart className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="font-display tracking-tight">Lenus</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-neutral-700 transition-colors hover:text-primary-600 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="text-sm font-semibold text-neutral-700 transition-colors hover:text-primary-600"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/40 active:scale-95"
          >
            Apply for Partnership
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-neutral-800 transition-colors hover:bg-neutral-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          mobileOpen ? 'max-h-96 border-t border-neutral-200/60' : 'max-h-0'
        }`}
      >
        <div className="glass px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-neutral-200/60 pt-4">
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-center text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                Log in
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary-600/30 transition-all hover:bg-primary-700 active:scale-95"
              >
                Apply for Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
