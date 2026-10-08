import { Heart, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
  Platform: ['Features', 'Integrations', 'Mobile App', 'Pricing', 'Security'],
  Academy: ['Certification', 'Curriculum', 'Mentorship', 'Alumni', 'FAQ'],
  Company: ['About Us', 'Careers', 'Press Kit', 'Blog', 'Contact'],
  Resources: ['Help Center', 'Coach Directory', 'Community', 'Guides', 'API Docs'],
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 text-xl font-bold text-primary-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/30">
                <Heart className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="font-display tracking-tight">Lenus</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              The partner for growth to the world's best health and fitness coaches.
              Build, scale, and elevate your online coaching business.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 text-neutral-500 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-neutral-900">
                {category}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-neutral-500 transition-colors hover:text-primary-600"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Lenus. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-primary-600">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-primary-600">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-neutral-400 transition-colors hover:text-primary-600">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
