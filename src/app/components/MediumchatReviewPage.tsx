import { Footer } from '@/app/components/comparison/Footer';
import { Star, CheckCircle2, CreditCard, Users, DollarSign, Shield, Info } from 'lucide-react';
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
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onHome?: () => void;
}

export function MediumchatReviewPage({ onBack, onTerms, onPrivacy, onContact, onHome }: MediumchatReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D5FF] via-white to-[#F3E8FF] pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] via-white to-[#E9D5FF]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <button onClick={onBack} className="text-[#4A00BF] hover:text-[#3B0099] font-semibold mb-4 flex items-center gap-2 mx-auto transition-colors">
            ← Back to Comparison
          </button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            Mediumchat.com Review
          </h1>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />)}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">Best value for money experience</p>
          <div className="pt-6">
            <Button size="lg" className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://mediumchat.com/start', '_blank')}>
              Start Your Free Trial Now
            </Button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">Convenient Mediumchat.com Summary</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>Mediumchat.com is the only website offering an <strong className="text-[#4A00BF]">equal price per minute per coach</strong>. This makes the pricing transparent and switching between coaches easy. Mediumchat offers everyone who opens a new account a <strong className="text-[#4A00BF]">3-minute free trial chat</strong>.</p>
              <p>Prices for follow-up chats range from <strong className="text-[#4A00BF]">$1.85 to $1.99 per minute</strong>, depending on the size of the prepaid bundle you get. There is <strong className="text-[#4A00BF]">NO need to have your credit card on file</strong>.</p>
              <p>Mediumchat.com offers plenty of coaches and has a solid number of recent reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto space-y-8">
          <ReviewSection icon={<Shield className="w-6 h-6" />} title="Mediumchat.com Reader Credibility"
            content="On most readers' profile pages, you can find both a photo and a personal promotion video that allows you to prove who you are chatting with. This gave us a lot of trust in the services offered! On another note, the site offers limited filter options based on gifts and abilities. This could be seen as a disadvantage; on the other hand, it keeps the website very neat and clean." />
          <ReviewSection icon={<CheckCircle2 className="w-6 h-6" />} title="Free Trial Sessions and Offerings"
            content="Mediumchat.com is the only website in this comparison to offer a 100% free trial chat for new customers, with no credit card required. After deciding if you'd like to have a full reading by one of the coaches, you will regularly receive highly discounted offerings for (specific) readings." />
          <ReviewSection icon={<CreditCard className="w-6 h-6" />} title="Mediumchat's Pricing Model"
            content="Mediumchat.com offers a prepaid model with credits, charging each coach 1 credit per minute. Very neat, clean and transparent. There is no need to have a credit card on file, and there will not be any automated rebills." />
          <ReviewSection icon={<DollarSign className="w-6 h-6" />} title="Mediumchat Price Range"
            content="Mediumchat.com offers three sizes of pre-paid credit bundles, 10, 20 and 40 minutes. Based on the bundle that you purchase, prices range from $1.85 to $1.99 per minute. This is more budget-friendly than most reputable competing websites." />
          <ReviewSection icon={<Users className="w-6 h-6" />} title="Overall Credibility"
            content="Having grown rapidly, Mediumchat.com offers a solid track record. With over 300 coaches and tens of fresh reviews per day, Mediumchat.com is a safe choice with a solid reputation." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] text-center mb-8">What Our Community Says About Mediumchat</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: '"I connected with the most gentle reader. She told me things about my situation that no stranger could have known. I finally exhaled."', name: 'Monica S., verified via Mediumchat', stars: 5 },
              { quote: '"The 3-minute free trial was all I needed to know this was real. I extended to 30 minutes. Worth every penny."', name: 'Danielle F., verified via Mediumchat', stars: 5 },
              { quote: '"I appreciated that I could see the reader\'s face in her profile video before choosing. That trust made the session transformative."', name: 'Isabel M., verified via Mediumchat', stars: 5 },
            ].map(({ quote, name, stars }, i) => (
              <div key={i} className="rounded-2xl bg-white shadow-md border border-[#4A00BF]/20 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#4A00BF] text-[#4A00BF]" />)}
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-3">{quote}</p>
                <p className="text-sm text-gray-600">— {name}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 italic text-center mt-8">Testimonials represent individual experiences. Results are not guaranteed.</p>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-[#4A00BF]/20 shadow-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#4A00BF] text-center mb-6">Mediumchat at a Glance</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[#4A00BF] font-bold text-base mb-3">The Strengths</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {['3 free minutes, no credit card ever required', 'Flat $1.85–$1.99/min, zero surprise pricing', 'Photo + video reader profiles for verification', '300+ active coaches, fresh reviews daily', 'Prepaid credits — no auto-rebill, ever'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 font-bold text-base mb-3">Worth Noting</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Fewer filter options than larger platforms', 'Smaller advisor network than Kasamba or Keen', 'Chat-only (no phone option)'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><Info className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-[#4A00BF] via-[#7C3AED] to-[#A855F7] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Ready to Experience Mediumchat?</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">Start your free 3-minute trial chat today. No credit card required.</p>
          <Button size="lg" className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://mediumchat.com/start', '_blank')}>
            Start Free Trial Now →
          </Button>
        </div>
      </section>

      <Footer onHome={onHome} onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} />
    </div>
  );
}
