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

interface PsychicSourceReviewPageProps {
  onBack: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onHome?: () => void;
}

export function PsychicSourceReviewPage({ onBack, onTerms, onPrivacy, onContact, onHome }: PsychicSourceReviewPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D5FF] via-white to-[#F3E8FF] pt-16 sm:pt-20">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] via-white to-[#E9D5FF]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <button onClick={onBack} className="text-[#4A00BF] hover:text-[#3B0099] font-semibold mb-4 flex items-center gap-2 mx-auto transition-colors">
            ← Back to Comparison
          </button>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            PsychicSource.com Review
          </h1>
          <div className="flex items-center justify-center gap-2">
            {[...Array(4)].map((_, i) => <Star key={i} className="w-7 h-7 sm:w-8 sm:h-8 fill-[#4A00BF] text-[#4A00BF]" />)}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF]">The most rigorously screened platform — quality above quantity.</p>
          <div className="pt-6">
            <Button size="lg" className="bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://www.psychicsource.com', '_blank')}>
              Get Your First 3 Minutes Free
            </Button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-10 border-2 border-[#4A00BF]/20 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] mb-6 text-center">Convenient PsychicSource.com Summary</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>PsychicSource.com has operated for over <strong className="text-[#4A00BF]">30 years</strong>, establishing itself as one of the most quality-controlled psychic reading platforms in existence. Their screening process is exceptionally rigorous — <strong className="text-[#4A00BF]">fewer than 2 in 100 applicants</strong> are accepted as advisors, ensuring a consistently high standard of reading quality.</p>
              <p>New users receive a compelling introductory offer: <strong className="text-[#4A00BF]">first 3 minutes free</strong>, followed by a significantly discounted rate on their first session (as low as $0.66 per minute). PsychicSource also backs every session with a <strong className="text-[#4A00BF]">satisfaction guarantee</strong> — if you're not happy with your reading, they will make it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto space-y-8">
          <ReviewSection icon={<Shield className="w-6 h-6" />} title="PsychicSource.com Reader Credibility"
            content="PsychicSource sets the industry bar for advisor vetting. Every reader undergoes an extensive application process, background screening, and test readings before being approved. Profile pages include photo, detailed specialty listings, reading styles, and thousands of verified client reviews accumulated over decades of operation." />
          <ReviewSection icon={<CheckCircle2 className="w-6 h-6" />} title="Free Trial Sessions and Offerings"
            content="New customers receive their first 3 minutes free, followed by a heavily discounted introductory rate on their first session. This introductory pricing makes PsychicSource one of the most accessible premium platforms for first-time users. The satisfaction guarantee adds a further safety net: if your reading doesn't meet expectations, PsychicSource will offer a remedy." />
          <ReviewSection icon={<CreditCard className="w-6 h-6" />} title="PsychicSource's Pricing Model"
            content="PsychicSource operates on a variable per-minute model where advisors set their own rates. The platform supports both phone and chat readings. A satisfaction guarantee distinguishes it from most competitors: dissatisfied users can contact support for a refund or replacement reading." />
          <ReviewSection icon={<DollarSign className="w-6 h-6" />} title="PsychicSource Price Range"
            content="PsychicSource introductory pricing starts as low as $0.66 per minute for new users' first session. Standard rates range from approximately $1.00 to $15+ per minute depending on advisor experience and demand. The satisfaction guarantee partially offsets the premium pricing for higher-tier readers." />
          <ReviewSection icon={<Users className="w-6 h-6" />} title="Overall Credibility"
            content="Thirty-plus years in operation, a rigorous 2% acceptance rate for advisors, and a satisfaction guarantee make PsychicSource the most quality-assured platform on our list. If you prioritize certainty of quality above variety of choice, PsychicSource is the strongest option reviewed here." />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#4A00BF] text-center mb-8">What Our Community Says About Psychic Source</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: '"I\'ve used 4 different platforms over the years. PsychicSource readers are on another level. The quality is consistent every single time."', name: 'Donna L., verified via Psychic Source', stars: 5 },
              { quote: '"I was nervous to try a phone reading. My reader immediately made me feel safe. She said things about my mother\'s passing that made me cry — in the best way."', name: 'Keisha M., verified via Psychic Source', stars: 5 },
              { quote: '"The satisfaction guarantee was what convinced me to try it. I didn\'t need it — my reading was extraordinary — but knowing it existed made all the difference."', name: 'Judith A., verified via Psychic Source', stars: 4 },
            ].map(({ quote, name, stars }, i) => (
              <div key={i} className="rounded-2xl bg-white shadow-md border border-[#4A00BF]/20 p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#4A00BF] text-[#4A00BF]" />)}
                </div>
                <p className="text-base text-gray-700 leading-relaxed mb-3">{quote}</p>
                <p className="text-sm text-gray-500">— {name}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 italic text-center mt-8">Testimonials represent individual experiences. Results are not guaranteed.</p>
        </div>
      </section>

      {/* Pros/Cons */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-purple-50 to-white border-2 border-[#4A00BF]/20 shadow-lg p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#4A00BF] text-center mb-6">Psychic Source at a Glance</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <p className="text-[#4A00BF] font-bold text-base mb-3">The Strengths</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Strictest advisor screening — only 2% acceptance rate', '30+ years of operation — deepest industry track record', 'Satisfaction guarantee — money-back protection', 'Introductory rate as low as $0.66/min', 'Phone + chat reading options'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-600 font-bold text-base mb-3">Worth Noting</p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Smaller advisor pool due to strict vetting', 'Premium rates for top psychics can be steep', 'Less flexibility in pricing tiers'].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><Info className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F3E8FF] to-[#E9D5FF]">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-br from-[#4A00BF] via-[#7C3AED] to-[#A855F7] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Ready to Experience Psychic Source?</h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">First 3 minutes free. Backed by 30+ years and a satisfaction guarantee.</p>
          <Button size="lg" className="bg-white text-[#4A00BF] hover:bg-gray-100 px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300 font-bold"
            onClick={() => window.open('https://www.psychicsource.com', '_blank')}>
            Get Your Free 3 Minutes →
          </Button>
        </div>
      </section>

      <Footer onHome={onHome} onTerms={onTerms} onPrivacy={onPrivacy} onContact={onContact} />
    </div>
  );
}
