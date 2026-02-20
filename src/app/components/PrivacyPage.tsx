import { Footer } from '@/app/components/Footer';

interface PrivacyPageProps {
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onComparison?: () => void;
}

export function PrivacyPage({ onTerms, onPrivacy, onContact, onComparison }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">1. Information We Collect</h2>
              <p>When you enter our weekly giveaway, we collect: your first name, email address, and chosen nickname. We do not collect credit card information. We do not collect sensitive personal data.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">2. How We Use Your Information</h2>
              <p>Your information is used to: enter you into the weekly reading giveaway, notify you if you are selected as a winner, and send you occasional emails about spiritual guidance and platform reviews. You may unsubscribe at any time.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">3. Third-Party Sharing</h2>
              <p>We share your information with GoHighLevel (our CRM provider) for contact management purposes. We do not sell your personal information to third parties.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">4. Affiliate Links</h2>
              <p>This site contains affiliate links. When you click these links and make a purchase or sign up, we may receive a commission. We do not share your personal data with affiliate platforms as a result of clicking.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">5. Cookies</h2>
              <p>YourReading.com may use basic cookies for site functionality and analytics. We do not use advertising or tracking cookies. You may disable cookies in your browser settings.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">6. Data Security</h2>
              <p>We take reasonable steps to protect your data. However, no internet transmission is 100% secure. By using this site, you accept this limitation.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">7. Winner Announcements</h2>
              <p>Winners are announced publicly by nickname and first 3 letters of email address only. Your full name and email are never publicly disclosed.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">8. Data Retention</h2>
              <p>We retain your contact information for up to 3 months following your entry, consistent with your participation in the giveaway. You may request deletion at any time.</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">9. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at: contact@yourreading.com</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#4A00BF] mb-2">10. Contact</h2>
              <p>For privacy questions, email: contact@yourreading.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} onComparison={onComparison} />
    </div>
  );
}
