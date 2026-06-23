import { Link } from 'react-router-dom';
import jgsLogo from '@/assets/logo-portal.png';

export default function LandingFooter() {
  return (
    <footer className="border-t border-[hsl(var(--border))] bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={jgsLogo} alt="JGS" className="w-8 h-8 object-contain" />
              <span className="text-lg font-bold text-white tracking-tight">Logistics by JGS</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Logistics by JGS is a trade name operated by JGS Trade Limited.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/#services" className="hover:text-white transition-colors">Simplified Scheme</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">General Scheme</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Import Pool</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">Sourcing</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link to="/legal/terminos-y-condiciones" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/politica-de-envios-y-reembolsos" className="hover:text-white transition-colors">Shipping & Refund Policy</Link></li>
              <li><Link to="/legal/politica-de-privacidad" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><a href="mailto:jgsourcingylogistics@gmail.com" className="hover:text-white transition-colors">jgsourcingylogistics@gmail.com</a></li>
              <li><a href="tel:+541127855921" className="hover:text-white transition-colors">+54 11 2785 5921</a></li>
              <li className="leading-relaxed">Unit D18, 3/F, Wong King Industrial Building, No. 2-4 Tai Yau Street, San Po Kong, Hong Kong</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/35 text-center md:text-left space-y-1">
            <p>JGS Trade Limited &middot; Company Registration No. 80640804 &middot; Hong Kong</p>
            <p>Unit D18, 3/F, Wong King Industrial Building, No. 2-4 Tai Yau Street, San Po Kong, Hong Kong</p>
          </div>
          <a href="https://www.instagram.com/logistics.by.jgs/" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white/70 transition-colors" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
