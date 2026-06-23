import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import PublicLayout from '@/components/landing/PublicLayout';

const INFO = [
  { icon: Building2, label: 'Company name', value: 'JGS Trade Limited', sub: 'Company Registration No. 80640804' },
  { icon: MapPin, label: 'Registered address', value: 'Unit D18, 3/F, Wong King Industrial Building', sub: 'No. 2-4 Tai Yau Street, San Po Kong, Hong Kong' },
  { icon: Mail, label: 'Email', value: 'jgsourcingylogistics@gmail.com', href: 'mailto:jgsourcingylogistics@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+54 11 2785 5921', href: 'tel:+541127855921' },
];

export default function Contacto() {
  return (
    <PublicLayout>
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Contact</h1>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">Logistics by JGS is a trade name operated by JGS Trade Limited. We're here to help you with your next import.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INFO.map(item => (
              <div key={item.label} className="card-surface rounded-2xl p-6 card-surface-hover">
                <div className="w-11 h-11 rounded-xl icon-bg-primary flex items-center justify-center mb-4"><item.icon size={22} /></div>
                <p className="text-xs text-white/40 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-white hover:text-primary transition-colors font-medium">{item.value}</a>
                ) : (
                  <p className="text-white font-medium">{item.value}</p>
                )}
                {item.sub && <p className="text-sm text-white/50 mt-1">{item.sub}</p>}
              </div>
            ))}
          </div>
          <div className="mt-16 card-surface rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-white mb-4">About Logistics by JGS</h2>
            <div className="space-y-4 text-sm text-white/60 leading-relaxed">
              <p>Logistics by JGS is a <strong className="text-white/80">shipping, courier, and international logistics</strong> service focused on logistics intermediation between Argentina and China. We operate under the legal entity JGS Trade Limited, registered in Hong Kong (Company Registration No. 80640804).</p>
              <p>Our team manages the entire import logistics process: from supplier search and validation in China, goods pickup, customs clearance, international transport (sea or air), to final delivery in Argentina.</p>
              <p>We offer modalities tailored to every need: Simplified Scheme for small shipments via commercial courier, General Scheme for formal larger-volume imports, Import Pool for consolidating cargo among multiple importers, and Sourcing services to find and negotiate with suppliers at origin.</p>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
