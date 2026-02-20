import { Footer } from '@/app/components/Footer';

interface TermsPageProps {
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onComparison?: () => void;
}

export function TermsPage({ onTerms, onPrivacy, onContact, onComparison }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: February 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">1. Acceptance of Terms</h2>
              <p>By accessing YourReading.com, you agree to these Terms of Service. If you do not agree, please do not use this site.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">2. Nature of the Service</h2>
              <p>YourReading.com is an independent review and lead generation website. We host a weekly free reading giveaway in collaboration with Mediumchat.com. Participation is free and voluntary. We do not guarantee that any particular user will win a reading.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">3. Affiliate Relationships</h2>
              <p>This website contains affiliate links to third-party psychic reading platforms including but not limited to Mediumchat.com, PsychicWorld.com, Keen.com, Kasamba.com, and PsychicSource.com. We may receive a commission if you sign up or purchase through these links. This does not affect the price you pay.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">4. No Professional Advice</h2>
              <p>Psychic readings are for entertainment and personal insight purposes only. YourReading.com does not endorse any specific spiritual, medical, legal, or financial advice provided by third-party platforms or their advisors.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">5. Eligibility</h2>
              <p>The free reading giveaway is open to individuals aged 18 and over. By entering, you confirm you meet this requirement.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">6. Giveaway Rules</h2>
              <p>Winners are selected randomly from eligible entries each Monday. 10 winners are selected per week. Entries are valid for 3 months from the date of submission. Winners are notified by email. YourReading.com reserves the right to modify or discontinue the giveaway at any time.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">7. Intellectual Property</h2>
              <p>All content on YourReading.com — including text, design, and graphics — is the property of YourReading.com and may not be reproduced without permission.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">8. Limitation of Liability</h2>
              <p>YourReading.com is not liable for any outcomes resulting from use of third-party psychic reading services accessed via links on this site.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">9. Changes to Terms</h2>
              <p>We may update these Terms at any time. Continued use of the site constitutes acceptance of revised Terms.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">10. Contact</h2>
              <p>For questions about these Terms, contact us at: contact@yourreading.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} onComparison={onComparison} />
    </div>
  );
}
