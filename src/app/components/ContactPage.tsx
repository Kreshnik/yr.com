import { Footer } from '@/app/components/Footer';
import { Mail, Clock } from 'lucide-react';

interface ContactPageProps {
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onComparison?: () => void;
}

export function ContactPage({ onTerms, onPrivacy, onContact, onComparison }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-2">
            Get in Touch
          </h1>
          <p className="text-xl text-[#4A00BF] mt-4">We'd love to hear from you.</p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-6 max-w-lg mx-auto">
            Whether you have a question about the weekly giveaway, need help with your entry, or want to reach out about a platform review, we're here.
          </p>

          <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-[#4A00BF]/20 shadow-lg p-8 mt-8 text-left space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#4A00BF] to-[#A855F7] flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#4A00BF] uppercase tracking-wide">Email</p>
                <p className="text-base text-gray-700 mt-0.5">contact@yourreading.com</p>
                <p className="text-xs text-gray-500 mt-1">We respond within 24–48 hours.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#4A00BF] to-[#A855F7] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#4A00BF] uppercase tracking-wide">Hours</p>
                <p className="text-base text-gray-700 mt-0.5">Monday–Friday, 9am–5pm EST</p>
              </div>
            </div>

            <div className="border-t border-[#4A00BF]/10 pt-6">
              <p className="text-sm text-gray-600 leading-relaxed">
                For questions about readings you've received through our partner platforms (Mediumchat, PsychicWorld, Keen, Kasamba, Psychic Source), please contact those platforms directly. We are an independent review and affiliate website and cannot manage bookings or reading sessions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} onComparison={onComparison} />
    </div>
  );
}
