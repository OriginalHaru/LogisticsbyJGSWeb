import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Package, Ship, Users, Search, ClipboardList, Box, Truck, CheckCircle2 } from 'lucide-react';
import PublicLayout from '@/components/landing/PublicLayout';
import { PORTAL_URL } from '@/config';

const SERVICES = [
  { icon: Package, title: 'Simplified Regime', desc: 'Commercial courier logistics for small imports. Ideal for entrepreneurs and brands starting out with small volumes.', target: 'Packages up to 50 kg' },
  { icon: Ship, title: 'General Regime', desc: 'Formal import logistics for larger volumes. Full management of customs clearance, sea/air freight, and delivery to destination.', target: 'Large-scale imports' },
  { icon: Users, title: 'Import Pool', desc: 'LCL/FCL consolidation for groups of importers. Share a container with other importers and reduce per-unit costs.', target: 'Groups of importers' },
  { icon: Search, title: 'Sourcing', desc: 'Supplier search and validation in China. Price negotiation, quality control, and sample coordination.', target: 'New products' },
];

const STEPS = [
  { icon: ClipboardList, title: 'Create your account', desc: 'Sign up on the platform with your personal and business details.' },
  { icon: Box, title: 'Upload your goods', desc: 'Enter the details of the products you want to import or request a quote.' },
  { icon: Search, title: 'Receive your quote', desc: 'Our team reviews your request and sends you a detailed quote.' },
  { icon: Truck, title: 'We handle the shipping', desc: 'We take care of all logistics: pickup, customs, transport, and delivery to Argentina.' },
  { icon: CheckCircle2, title: 'Receive your goods', desc: 'Your cargo arrives at the specified address with full tracking.' },
];

export default function Landing() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-28 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Import from China without the logistics hassle
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">
            Shipping, courier, and international logistics services. We handle the entire process between China and Argentina so you can focus on your business.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${PORTAL_URL}/registro`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/85 text-[hsl(var(--primary-foreground))] font-semibold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-base">
              Create account <ArrowRight size={18} />
            </a>
            <a href="#services" className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white/70 hover:text-white hover:border-white/30 rounded-xl transition-all text-base">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our shipping and courier services</h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">End-to-end logistics intermediation between Argentina and China, tailored to the size of your operation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(s => (
              <div key={s.title} className="card-surface rounded-2xl p-7 card-surface-hover group">
                <div className="w-12 h-12 rounded-xl icon-bg-primary flex items-center justify-center mb-5 group-hover:shadow-[var(--shadow-glow)] transition-shadow">
                  <s.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="inline-block text-xs text-primary/80 bg-primary/10 px-3 py-1 rounded-full">{s.target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28 border-t border-[hsl(var(--border))]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
            <p className="mt-4 text-white/50">Your import in 5 simple steps.</p>
          </div>
          <div className="space-y-6">
            {STEPS.map((p, i) => (
              <div key={p.title} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl icon-bg-primary flex items-center justify-center relative">
                  <p.icon size={22} />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-[hsl(var(--primary-foreground))] text-xs font-bold flex items-center justify-center">{i + 1}</span>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="text-sm text-white/50 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section id="pricing" className="py-20 md:py-28 border-t border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Transparent pricing</h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">Custom quotes tailored to your operation. Check out the details on our pricing page.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'Simplified Regime', desc: 'Commercial courier for small shipments from China.', glow: false },
              { icon: Ship, title: 'General Regime', desc: 'Formal import of larger volumes with full customs clearance.', glow: true },
              { icon: Users, title: 'Import Pool', desc: 'Consolidate your cargo with other importers and save on costs.', glow: false },
            ].map(card => (
              <div key={card.title} className={`card-surface rounded-2xl p-7 text-center card-surface-hover ${card.glow ? 'glow-border' : ''}`}>
                <card.icon size={28} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/50 mb-5">{card.desc}</p>
                <a href={`${PORTAL_URL}/registro`} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                  Request a quote <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/precios" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
              View all pricing and details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 border-t border-[hsl(var(--border))]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start importing today</h2>
          <p className="text-white/50 mb-10 max-w-xl mx-auto">Create your free account and manage all your imports from a single platform. No hidden fees, with real-time tracking.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`${PORTAL_URL}/registro`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/85 text-[hsl(var(--primary-foreground))] font-semibold rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 text-base">
              Create account <ArrowRight size={18} />
            </a>
            <a href={`${PORTAL_URL}/login`} className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/15 text-white/70 hover:text-white hover:border-white/30 rounded-xl transition-all text-base">
              Sign in
            </a>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
