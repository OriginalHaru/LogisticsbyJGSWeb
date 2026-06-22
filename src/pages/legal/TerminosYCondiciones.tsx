import PublicLayout from '@/components/landing/PublicLayout';

export default function TerminosYCondiciones() {
  return (
    <PublicLayout>
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-sm text-white/40 mb-10">Last updated: June 2026</p>
          <div className="space-y-8 text-sm text-white/60 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">1. Company identification</h2>
              <p>These Terms and Conditions govern the use of the website and services offered by <strong className="text-white/80">JGS Trade Limited</strong>, a company registered in Hong Kong under registration number <strong className="text-white/80">80640804</strong>, with its registered address at Unit D18, 3/F, Wong King Industrial Building, No. 2-4 Tai Yau Street, San Po Kong, Hong Kong.</p>
              <p className="mt-2">"Logistics by JGS" is the trade name under which JGS Trade Limited operates its shipping, courier, and international logistics services.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">2. Description of services</h2>
              <p>JGS Trade Limited provides international logistics intermediation services, including but not limited to: commercial courier shipment management (Simplified Regime), formal import with customs clearance (General Regime), cargo consolidation for groups of importers (Import Pool), and supplier search and validation in China (Sourcing).</p>
              <p className="mt-2">Services are provided through the web platform and are primarily aimed at importers and brands in Argentina that need to manage shipments from China.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">3. Platform terms of use</h2>
              <p>To use Logistics by JGS services, users must:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Be at least 18 years of age.</li>
                <li>Register by providing truthful and up-to-date information.</li>
                <li>Maintain the confidentiality of their login credentials.</li>
                <li>Use the platform exclusively for the purposes set forth in these terms.</li>
              </ul>
              <p className="mt-2">JGS Trade Limited reserves the right to suspend or cancel accounts that violate these terms or exhibit suspicious activity.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">4. Responsibilities of JGS Trade Limited</h2>
              <p>JGS Trade Limited commits to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Managing shipments with due diligence, coordinating with carriers and customs agents.</li>
                <li>Providing clear and detailed quotes before confirmation of each operation.</li>
                <li>Keeping the client informed about the status of their shipments through the platform.</li>
                <li>Protecting user personal data in accordance with the Privacy Policy.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">5. Client responsibilities</h2>
              <p>The client is responsible for:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Providing accurate information about the goods to be imported (description, quantity, value, weight).</li>
                <li>Complying with current import regulations in the destination country.</li>
                <li>Paying agreed amounts in accepted quotes within established deadlines.</li>
                <li>Not declaring prohibited, restricted, or specially permitted goods without prior notice to JGS.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">6. Quotes and payments</h2>
              <p>Quotes issued by JGS Trade Limited are valid for 7 (seven) days from the date of issue, unless otherwise stated. Prices may vary due to changes in transport costs, exchange rates, or customs regulations.</p>
              <p className="mt-2">Payments are made through the methods enabled on the platform. JGS Trade Limited will not initiate logistics management until the corresponding payment is confirmed.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">7. Cancellation policy</h2>
              <p>The client may cancel an operation before the goods are dispatched from origin. In case of cancellation:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>If the goods have not yet been picked up from the supplier: full refund less administrative fees.</li>
                <li>If the goods have been picked up but not dispatched: partial refund, deducting incurred pickup and storage costs.</li>
                <li>If the goods have already been dispatched: cancellation is not accepted. The Shipping & Refund Policy conditions apply.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">8. Limitation of liability</h2>
              <p>JGS Trade Limited acts as a logistics intermediary, not as a direct carrier. Accordingly:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>It is not responsible for delays caused by customs authorities, weather conditions, or force majeure.</li>
                <li>It does not guarantee exact transit times, only estimates based on normal service conditions.</li>
                <li>JGS Trade Limited's maximum liability for loss or damage of goods is limited to the declared value of the goods in the accepted quote, unless additional insurance is purchased.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">9. Intellectual property</h2>
              <p>All website content (text, designs, logos, code) is the property of JGS Trade Limited or is used with authorization. Reproduction without prior written consent is prohibited.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">10. Modifications</h2>
              <p>JGS Trade Limited reserves the right to modify these Terms and Conditions at any time. Modifications will be published on this page and will take effect from the date of publication. Continued use of the service after publication of changes implies acceptance thereof.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">11. Governing law and jurisdiction</h2>
              <p>These Terms and Conditions are governed by the laws of the <strong className="text-white/80">Hong Kong Special Administrative Region</strong>. Any dispute arising from these terms shall be submitted to the jurisdiction of the courts of Hong Kong.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">12. Contact</h2>
              <p>For inquiries about these Terms and Conditions, contact:</p>
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
