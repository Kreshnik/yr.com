import { Footer } from '@/app/components/comparison/Footer';
import { Star, CheckCircle2, CreditCard, Users, DollarSign, Shield, Gift } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import psychicWorldLogo from '../../assets/99166b2fdb82cc81617a29b6cafe281411a223c2.png';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

function ReviewSection({ icon, title, content }: SectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-[#4A00BF]/10 hover:border-[#4A00BF]/30 transition-all">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#4A00BF] to-[#A855F7] flex items-center justify-center text-white mt-1">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-[#4A00BF] pt-2">{title}</h3>
      </div>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}

interface PsychicWorldReviewPageProps {
  onBack: () => void;
}

export function PsychicWorldReviewPage({ onBack }: PsychicWorldReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D5FF] via-white to-[#F3E8FF] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] via-white to-[#E9D5FF]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <button
              onClick={onBack}
              className="text-[#4A00BF] hover:text-[#3B0099] font-semibold mb-4 flex items-center gap-2 mx-auto transition-colors"
            >
              ← Back to Comparison
            </button>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="flex flex-col items-center gap-4">
              <img src={psychicWorldLogo} alt="Psychic World" className="h-12 sm:h-16 lg:h-20 w-auto" />
              <span className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
                Review
              </span>
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-[#4A00BF]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />
            ))}
          </div>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">
            Great overall experience. The runner up!
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://psychicworld.com', '_blank')}
            >
              Get 10 Free Minutes Now
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">
              Convenient PsychicWorld.com Summary
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                PsychicWorld.com provides a modern platform for psychic readings, offering new users <span className="font-bold text-[#4A00BF]">10 free minutes with their first credit purchase</span>. Its custom-built chat app, supporting live chat and video, connects users with over <span className="font-bold text-[#4A00BF]">160 professional coaches</span>, making it a reliable choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Review Sections */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto space-y-8">
          <ReviewSection
            icon={<Shield className="w-6 h-6" />}
            title="PsychicWorld.com Reader Credibility"
            content="PsychicWorld builds trust through transparency, with many psychics featuring detailed profiles with photos and promotional videos. A robust review and rating system allows new clients to check feedback before a reading, and a clean interface simplifies the user experience."
          />

          <ReviewSection
            icon={<Gift className="w-6 h-6" />}
            title="Free Trial Sessions and Offerings"
            content="Instead of a free trial, PsychicWorld.com offers a valuable introductory package. New customers receive 10 bonus minutes with their first credit purchase, providing a substantial opportunity to experience the platform's services at a reduced cost."
          />

          <ReviewSection
            icon={<CreditCard className="w-6 h-6" />}
            title="PsychicWorld's Pricing Model"
            content="PsychicWorld uses a variable, per-minute pricing model where each advisor sets their own rate, offering a range of options for different budgets. This flexibility allows users to choose an advisor based on experience and price, with payments handled via a prepaid credit system."
          />

          <ReviewSection
            icon={<DollarSign className="w-6 h-6" />}
            title="PsychicWorld Price Range"
            content="Prices on PsychicWorld.com range from $1.00 for newer advisors to around $6.00 for top-rated experts. This accessible pricing spectrum accommodates both new users and those seeking premium, highly sought-after psychics."
          />

          <ReviewSection
            icon={<Users className="w-6 h-6" />}
            title="Overall Credibility"
            content="Since 2017, PsychicWorld.com has built a solid reputation with over 160 coaches and numerous positive reviews. Its modern interface, transparent profiles, and attractive welcome offer make it a trustworthy option for spiritual guidance."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-[#4A00BF] via-[#7C3AED] to-[#A855F7] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Experience PsychicWorld?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Get 10 free minutes with your first credit purchase. Start connecting with professional psychics today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://psychicworld.com', '_blank')}
          >
            Get Started Now →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}