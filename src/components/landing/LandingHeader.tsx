import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { PORTAL_URL } from '@/config';
import jgsLogo from '@/assets/logo-portal.png';

const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Pricing', href: '/precios' },
  { label: 'Contact', href: '/contacto' },
];

export default function LandingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={jgsLogo} alt="JGS" className="w-8 h-8 object-contain" />
          <span className="text-lg font-bold text-white tracking-tight">Logistics by JGS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={`${PORTAL_URL}/login`} className="text-sm text-white/70 hover:text-white transition-colors px-4 py-2">
            Sign in
          </a>
          <a href={`${PORTAL_URL}/registro`} className="text-sm font-medium text-[hsl(var(--primary-foreground))] bg-primary hover:bg-primary/85 px-5 py-2 rounded-lg transition-all shadow-lg shadow-primary/20">
            Create account
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white/70 hover:text-white transition-colors" aria-label="Menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-sm text-white/60 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <a href={`${PORTAL_URL}/login`} className="block text-center py-2.5 text-sm text-white/70 hover:text-white border border-white/15 rounded-lg transition-colors">
                Sign in
              </a>
              <a href={`${PORTAL_URL}/registro`} className="block text-center py-2.5 text-sm font-medium text-[hsl(var(--primary-foreground))] bg-primary hover:bg-primary/85 rounded-lg transition-all">
                Create account
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
