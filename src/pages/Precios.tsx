import { Link } from 'react-router-dom';
import { ArrowRight, Package, Ship, Users, Search, Check } from 'lucide-react';
import PublicLayout from '@/components/landing/PublicLayout';
import { PORTAL_URL } from '@/config';

const PLANS = [
  { icon: Package, title: 'Simplified Regime', desc: 'Commercial courier logistics for small imports.', features: ['Packages up to 50 kg', 'Door-to-door shipping', 'Real-time tracking', 'Simplified customs clearance', 'Home delivery in Argentina'], highlighted: false },
  { icon: Ship, title: 'General Regime', desc: 'Formal import of larger volumes with full customs clearance.', features: ['No weight or volume limits', 'Sea or air freight', 'Formal customs clearance', 'Full document management', 'Cargo insurance included', 'Customs broker coordination'], highlighted: true },
  { icon: Users, title: 'Import Pool', desc: 'LCL/FCL consolidation for groups of importers.', features: ['Shared or full container', 'Reduced per-unit costs', 'Multi-importer coordination', 'Unified customs clearance', 'Distribution at destination'], highlighted: false },
];

export default function Precios() {
  return (
    <PublicLayout>
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Pricing & Services</h1>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">Each operation is quoted on a custom basis depending on the type of goods, volume, weight, and shipping method. Create your account to receive a tailored quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {PLANS.map(plan => (
              <div key={plan.title} className={`rounded-2xl p-7 flex flex-col ${plan.highlighted ? 'card-surface glow-border' : 'card-surface'}`}>
                <plan.icon size={28} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
                <p className="text-sm text-white/50 mb-6">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-white/60">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" /><span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={`${PORTAL_URL}/registro`} className={`inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${plan.highlighted ? 'bg-primary text-[hsl(var(--primary-foreground))] hover:bg-primary/85 shadow-lg shadow-primary/20' : 'border border-white/15 text-white/70 hover:text-white hover:border-white/30'}`}>
                  Request a quote <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <div className="card-surface rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-xl icon-bg-primary flex items-center justify-center flex-shrink-0"><Search size={28} /></div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Supplier Sourcing</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">We search, validate, and negotiate with suppliers in China on your behalf. Includes sample coordination, quality control, and production follow-up. Quoted based on complexity and volume.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {['Verified supplier search', 'Price and MOQ negotiation', 'Sample coordination', 'Pre-shipment quality control'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/60"><Check size={14} className="text-primary flex-shrink-0" /><span>{f}</span></li>
                ))}
              </ul>
              <a href={`${PORTAL_URL}/registro`} className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                Request sourcing service <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-white/40">All prices are quoted on a custom basis. Create your account to upload your goods and receive a detailed estimate.</p>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
