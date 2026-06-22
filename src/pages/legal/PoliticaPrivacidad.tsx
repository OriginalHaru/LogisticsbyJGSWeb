import PublicLayout from '@/components/landing/PublicLayout';

export default function PoliticaPrivacidad() {
  return (
    <PublicLayout>
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-sm text-white/40 mb-10">Last updated: June 2026</p>
          <div className="space-y-8 text-sm text-white/60 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">1. Data controller</h2>
              <p>The data controller is <strong className="text-white/80">JGS Trade Limited</strong>, with its registered address at Unit D18, 3/F, Wong King Industrial Building, No. 2-4 Tai Yau Street, San Po Kong, Hong Kong (Company Registration No. 80640804).</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">2. Personal data we collect</h2>
              <p>In the context of providing our services, we collect the following personal data:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white/80">Identification data:</strong> full name, ID/identity document number, age.</li>
                <li><strong className="text-white/80">Contact data:</strong> email, phone number, delivery address.</li>
                <li><strong className="text-white/80">Business data:</strong> brand/company name, years in business, team size, Instagram (optional).</li>
                <li><strong className="text-white/80">Tax data:</strong> tax ID number (when required for customs clearance).</li>
                <li><strong className="text-white/80">Usage data:</strong> information about platform navigation, operations performed, quote history.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">3. Purpose of data processing</h2>
              <p>Personal data is used to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Create and manage the user's account on the platform.</li>
                <li>Provide the contracted logistics and import services.</li>
                <li>Issue quotes and invoices.</li>
                <li>Manage customs clearance and import documentation.</li>
                <li>Communicate updates on the status of operations.</li>
                <li>Send commercial communications related to services (with prior consent).</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">4. Sharing data with third parties</h2>
              <p>User personal data may be shared with the following third parties, exclusively to the extent necessary for providing the contracted services:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white/80">Courier and transport companies:</strong> for managing the shipment of goods.</li>
                <li><strong className="text-white/80">Customs brokers:</strong> for managing customs clearance and import documentation.</li>
                <li><strong className="text-white/80">Suppliers in China:</strong> minimum data necessary to coordinate goods pickup.</li>
                <li><strong className="text-white/80">Payment processors:</strong> for managing payment transactions (e.g., Airwallex).</li>
                <li><strong className="text-white/80">Government authorities:</strong> when required by law or to comply with customs regulations.</li>
              </ul>
              <p className="mt-2">JGS Trade Limited does not sell or transfer personal data to third parties for commercial or advertising purposes.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">5. Data security</h2>
              <p>We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction. This includes the use of encryption in data transmission, access controls, and secure storage on protected servers.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">6. Data retention</h2>
              <p>Personal data is retained for as long as necessary to fulfill the purpose for which it was collected and to comply with legal obligations. Import operation data is retained for a minimum of 5 (five) years in accordance with applicable tax and customs obligations.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">7. User rights</h2>
              <p>Users have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white/80">Access:</strong> request a copy of the personal data we have stored.</li>
                <li><strong className="text-white/80">Rectification:</strong> request the correction of inaccurate or incomplete data.</li>
                <li><strong className="text-white/80">Deletion:</strong> request the deletion of personal data, subject to legal retention obligations.</li>
                <li><strong className="text-white/80">Objection:</strong> object to data processing for commercial communication purposes.</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, the user must send an email to <a href="mailto:jgsourcingylogistics@gmail.com" className="text-primary hover:text-primary/80 transition-colors">jgsourcingylogistics@gmail.com</a> indicating their full name and the right they wish to exercise. JGS Trade Limited will respond within 30 (thirty) business days.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">8. Cookies and tracking technologies</h2>
              <p>The platform uses technical cookies necessary for website operation and user session management. We do not use third-party cookies for advertising purposes. Users can configure their browser to reject cookies, although this may affect site functionality.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">9. Modifications</h2>
              <p>JGS Trade Limited reserves the right to update this Privacy Policy. Changes will be published on this page with the update date. Continued use of the service after publication of changes implies acceptance thereof.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
              <p>For inquiries about this Privacy Policy or about personal data processing:</p>
              <ul className="mt-2 space-y-1">
                <li>Email: <a href="mailto:jgsourcingylogistics@gmail.com" className="text-primary hover:text-primary/80 transition-colors">jgsourcingylogistics@gmail.com</a></li>
                <li>Phone: <a href="tel:+541127855921" className="text-primary hover:text-primary/80 transition-colors">+54 11 2785 5921</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
