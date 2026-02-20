import { Footer } from '@/app/components/comparison/Footer';
import { Star, CheckCircle2, CreditCard, Users, DollarSign, Shield, Award, Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import keenLogo from '../../assets/567a57a976440ed636e52ab68862971d87e32b57.png';

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

interface KeenReviewPageProps {
  onBack: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onHome?: () => void;
}

export function KeenReviewPage({ onBack, onTerms, onPrivacy, onContact, onHome }: KeenReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D5FF] via-white to-[#F3E8FF] pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] via-white to-[#E9D5FF]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <button onClick={onBack} className="text-[#4A00BF] hover:text-[#3B0099] font-semibold mb-4 flex items-center gap-2 mx-auto transition-colors">
            ← Back to Comparison
          </button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="flex flex-col items-center gap-4">
              <img src={keenLogo} alt="Keen" className="h-12 sm:h-16 lg:h-20 w-auto" />
              <span className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">Review</span>
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2">
            {[...Array(4)].map((_, i) => <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />)}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">Delivers high quality readings for a long time.</p>
          <div className="pt-6">
            <Button size="lg" className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://keen.com', '_blank')}>
              Get 5 Minutes for $1
            </Button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">Convenient Keen.com Summary</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>A long-standing leader, Keen.com connects users with over <strong className="text-[#4A00BF]">1,300 trusted advisors</strong>. New users can get started with an attractive introductory offer of <strong className="text-[#4A00BF]">5 minutes for just $1</strong>, making it a reliable choice for in-depth spiritual guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto space-y-8">
          <ReviewSection icon={<Shield className="w-6 h-6" />} title="Keen.com Reader Credibility"
            content="Keen.com builds trust through extensive advisor profiles and a transparent customer feedback system. While photo/video verification isn't emphasized, each profile shows ratings, total readings, and numerous client reviews, helping users make informed decisions." />
          <ReviewSection icon={<Award className="w-6 h-6" />} title="Free Trial Sessions and Offerings"
            content="Keen's introductory offer provides new customers a 5-minute reading for only $1. This highly discounted rate allows users to sample the service at a very low cost before committing to a full session. The platform also offers a 'Keen Rewards' program for loyal customers." />
          <ReviewSection icon={<CreditCard className="w-6 h-6" />} title="Keen's Pricing Model"
            content="Keen.com uses a per-minute pricing model where each advisor sets their own rate, offering a wide range of options for different budgets. This provides flexibility, and the platform supports both phone and chat readings with slightly different pricing for each." />
          <ReviewSection icon={<DollarSign className="w-6 h-6" />} title="Keen Price Range"
            content="With a vast network of advisors, Keen.com's rates typically fall between $1.99 and $19.99 per minute, though some top psychics charge more. The average price is around $3.50 per minute, making it a competitive option for high-quality readings." />
          <ReviewSection icon={<Users className="w-6 h-6" />} title="Overall Credibility"
            content="Operating since 2006, Keen.com is a reputable and long-standing psychic reading website. With over 35 million conversations and 1,300+ advisors, its proven track record, detailed review system, and secure platform make it a trustworthy choice for spiritual guidance." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] text-center mb-8">What Our Community Says About Keen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: '"Keen has been my go-to for years. The sheer number of advisors means I always find someone who resonates. The reviews make choosing easy."', name: 'Christine D., verified via Keen', stars: 5 },
              { quote: '"5 minutes for $1 was all it took. My advisor was so accurate about my ex\'s energy that I was speechless. I\'ve used Keen 12 times since."', name: 'Rosa P., verified via Keen', stars: 5 },
              { quote: '"Huge selection. Took me a little time to find my reader, but once I did, it was life-changing. The review system really helps."', name: 'Stephanie L., verified via Keen', stars: 4 },
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
          <h2 className="text-xl font-bold text-[#4A00BF] text-center mb-6">Keen at a Glance</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[#4A00BF] font-bold text-base mb-3">The Strengths</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {['5 minutes for $1 intro offer', '1,300+ advisors — largest selection of the top 3', 'Operating since 2006 — proven track record', '35 million+ conversations completed', 'Keen Rewards loyalty program'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 font-bold text-base mb-3">Worth Noting</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['No photo/video verification of advisors', 'Prices can reach $19.99/min for top psychics', 'Variable pricing less transparent than Mediumchat'].map((s, i) => (
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Ready to Experience Keen?</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">Get your first 5 minutes for only $1. Over 1,300 trusted advisors available.</p>
          <Button size="lg" className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://keen.com', '_blank')}>
            Get Started for $1 →
          </Button>
        </div>
      </section>

      <Footer onHome={onHome} onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} />
    </div>
  );
}
