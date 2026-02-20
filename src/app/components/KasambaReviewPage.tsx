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

interface KasambaReviewPageProps {
  onBack: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onHome?: () => void;
}

export function KasambaReviewPage({ onBack, onTerms, onPrivacy, onContact, onHome }: KasambaReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D5FF] via-white to-[#F3E8FF] pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] via-white to-[#E9D5FF]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <button onClick={onBack} className="text-[#4A00BF] hover:text-[#3B0099] font-semibold mb-4 flex items-center gap-2 mx-auto transition-colors">
            ← Back to Comparison
          </button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            Kasamba.com Review
          </h1>
          <div className="flex items-center justify-center gap-2">
            {[...Array(4)].map((_, i) => <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />)}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">A veteran platform with the largest advisor roster and decades of trust.</p>
          <div className="pt-6">
            <Button size="lg" className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://www.kasamba.com', '_blank')}>
              Start Your Free 3 Minutes
            </Button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">Convenient Kasamba.com Summary</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>Kasamba.com has been connecting seekers with gifted advisors since <strong className="text-[#4A00BF]">1999</strong> — making it one of the longest-running psychic reading platforms in existence. With over <strong className="text-[#4A00BF]">2,000 active advisors</strong> spanning tarot, astrology, dream analysis, love and relationships, and more, Kasamba offers unrivaled breadth of choice.</p>
              <p>Every new psychic you try comes with <strong className="text-[#4A00BF]">3 free minutes</strong> — meaning you can sample multiple readers until you find the one who truly resonates, without any upfront commitment. Pricing varies by advisor, ranging from <strong className="text-[#4A00BF]">$1.99 to $12+ per minute</strong>, with most experienced readers in the $3–$6 range.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto space-y-8">
          <ReviewSection icon={<Shield className="w-6 h-6" />} title="Kasamba.com Reader Credibility"
            content="Kasamba maintains advisor credibility through a robust customer review and rating system. Each profile shows detailed specialties, client feedback scores, and total readings completed. While photo and video verification is not universally enforced, the sheer volume of public reviews — built up over 25+ years — creates a trustworthy signal for new users." />
          <ReviewSection icon={<CheckCircle2 className="w-6 h-6" />} title="Free Trial Sessions and Offerings"
            content="Kasamba offers 3 free minutes with every new psychic advisor you connect with — not just your first session. This means you can explore multiple readers at no cost until you find one whose energy matches yours. No credit card is required to claim these free minutes." />
          <ReviewSection icon={<CreditCard className="w-6 h-6" />} title="Kasamba's Pricing Model"
            content="Kasamba uses a variable per-minute model where each advisor sets their own rate. This means pricing can feel less predictable than Mediumchat's flat-rate structure. That said, the range of price points — from budget-friendly newer advisors to premium experts — gives users the flexibility to match their budget." />
          <ReviewSection icon={<DollarSign className="w-6 h-6" />} title="Kasamba Price Range"
            content="Rates on Kasamba typically range from $1.99 per minute for emerging advisors to $12+ per minute for highly sought-after, experienced psychics. The average mid-range reader costs approximately $3–$5 per minute. The 3-free-minutes-per-new-psychic policy significantly offsets initial costs." />
          <ReviewSection icon={<Users className="w-6 h-6" />} title="Overall Credibility"
            content="Founded in 1999, Kasamba is one of the most established names in online psychic services. With over 2,000 advisors and decades of client reviews, it carries significant institutional credibility. Its longevity in a crowded market is itself a strong trust signal." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] text-center mb-8">What Our Community Says About Kasamba</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: '"I\'ve tried 4 different readers on Kasamba, all with their free 3 minutes. The one I found on my fourth try has been my guide for 2 years now. The free trial model is genius."', name: 'Patricia R., verified via Kasamba', stars: 5 },
              { quote: '"Kasamba has so many advisors it felt overwhelming at first. But the review system made it easy. My chosen reader was spot-on about everything."', name: 'Elaine T., verified via Kasamba', stars: 4 },
              { quote: '"I\'ve been using Kasamba since 2018. The quality of readings has never dropped. I trust this platform with my most vulnerable questions."', name: 'Vanessa C., verified via Kasamba', stars: 5 },
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
          <h2 className="text-xl font-bold text-[#4A00BF] text-center mb-6">Kasamba at a Glance</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[#4A00BF] font-bold text-base mb-3">The Strengths</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {['3 free minutes with each new advisor you try', '2,000+ advisors — widest selection on our list', 'Operating since 1999 — unmatched industry tenure', 'No credit card required for free minutes'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 font-bold text-base mb-3">Worth Noting</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Variable pricing less predictable', 'No flat-rate pricing model', 'Interface feels slightly dated vs. newer platforms'].map((s, i) => (
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Ready to Experience Kasamba?</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">Try 3 free minutes with any new advisor. Over 2,000 psychics available now.</p>
          <Button size="lg" className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://www.kasamba.com', '_blank')}>
            Start Your Free 3 Minutes →
          </Button>
        </div>
      </section>

      <Footer onHome={onHome} onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} />
    </div>
  );
}
