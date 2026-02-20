import { Footer } from '@/app/components/comparison/Footer';
import { Star, CheckCircle2, CreditCard, Users, DollarSign, Shield } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

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

interface MediumchatReviewPageProps {
  onBack: () => void;
}

export function MediumchatReviewPage({ onBack }: MediumchatReviewPageProps) {
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
            <span className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
              Mediumchat.com Review
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold text-[#4A00BF]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />
            ))}
          </div>
          
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">
            Best value for money experience
          </p>
          
          <div className="pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://mediumchat.com/start', '_blank')}
            >
              Start Your Free Trial Now
            </Button>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">
              Convenient Mediumchat.com Summary
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Mediumchat.com is the only website offering an <span className="font-bold text-[#4A00BF]">equal price per minute per coach</span>. This makes the pricing transparent and switching between coaches easy. Mediumchat offers everyone who opens a new account a <span className="font-bold text-[#4A00BF]">3-minute free trial chat</span>.
              </p>
              <p>
                Prices for follow-up chats range from <span className="font-bold text-[#4A00BF]">$1.85 to $1.99 per minute</span>, depending on the size of the prepaid bundle you get. There is <span className="font-bold text-[#4A00BF]">NO need to have your credit card on file</span>.
              </p>
              <p>
                Mediumchat.com offers plenty of coaches and has a solid number of recent reviews.
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
            title="Mediumchat.com Reader Credibility"
            content="On most readers' profile pages, you can find both a photo and a personal promotion video that allows you to prove who you are chatting with. This gave us a lot of trust in the services offered! On another note, the site offers limited filter options based on gifts and abilities. This could be seen as a disadvantage; on the other hand, it keeps the website very neat and clean."
          />

          <ReviewSection
            icon={<CheckCircle2 className="w-6 h-6" />}
            title="Free Trial Sessions and Offerings"
            content="Mediumchat.com is the only website in this comparison to offer a 100% free trial chat for new customers, with no credit card required. After deciding if you'd like to have a full reading by one of the coaches, you will regularly receive highly discounted offerings for (specific) readings."
          />

          <ReviewSection
            icon={<CreditCard className="w-6 h-6" />}
            title="Mediumchat's Pricing Model"
            content="Mediumchat.com offers a prepaid model with credits, charging each coach 1 credit per minute. Very neat, clean and transparent. There is no need to have a credit card on file, and there will not be any automated rebills."
          />

          <ReviewSection
            icon={<DollarSign className="w-6 h-6" />}
            title="Mediumchat Price Range"
            content="Mediumchat.com offers three sizes of pre-paid credit bundles, 10, 20 and 40 minutes. Based on the bundle that you purchase, prices range from $1.85 to $1.99 per minute. This is more budget-friendly than most reputable competing websites."
          />

          <ReviewSection
            icon={<Users className="w-6 h-6" />}
            title="Overall Credibility"
            content="Having grown rapidly, Mediumchat.com offers a solid track record. With over 300 coaches and tens of fresh reviews per day, Mediumchat.com is a safe choice with a solid reputation."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-[#4A00BF] via-[#7C3AED] to-[#A855F7] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Experience Mediumchat?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Start your free 3-minute trial chat today. No credit card required.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://mediumchat.com/start', '_blank')}
          >
            Start Free Trial Now →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}