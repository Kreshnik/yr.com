import { useRef } from 'react';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, Gift, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'motion/react';

export function HowWeChoose() {
  const tryNowRef = useRef(null);
  const tryNowInView = useInView(tryNowRef, { once: false, margin: '-80px 0px' });

  return (
    <>
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
        {/* How We Choose Section */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent text-center">
            How We Choose the Best Psychic Platforms for You
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            <p className="text-justify">
              At YourReading.com, we believe that finding the right psychic platform should be simple, transparent, and risk-free. That's why we've developed a comprehensive rating system based on five key criteria: reader credibility, free trial access, pricing transparency, price range, and overall platform reliability.
            </p>
            
            <p className="text-justify">
              Every platform on this list has been personally evaluated by our team. We don't accept payment for placement, and our ratings reflect our genuine experience and commitment to helping you find the clarity you deserve.
            </p>
            
            <div className="relative bg-gradient-to-br from-[#4A00BF] via-[#6B21A8] to-[#4A00BF] rounded-3xl p-8 sm:p-12 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#A855F7]/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D8B4FE]/5 rounded-full blur-3xl"></div>
              
              {/* Badge */}
              <div className="relative z-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 mb-6">
                <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-sm sm:text-base font-semibold text-white tracking-wide uppercase">Top Recommendation</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Why Mediumchat.com is our #1 choice
                </h3>
                <p className="text-lg sm:text-xl text-white/95 leading-relaxed mb-6 text-justify">
                  It combines the most transparent pricing model (flat-fee per minute), rigorous reader verification, and a generous 3-minute free trial. For most of our community members seeking love and relationship guidance, it's the best combination of quality, affordability, and ease of use.
                </p>
                
                {/* Key features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">9.8</div>
                    <div className="text-sm text-white/80">Overall Score</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">3 min</div>
                    <div className="text-sm text-white/80">Free Trial</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">$1.99</div>
                    <div className="text-sm text-white/80">Starting Price</div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-8 flex justify-center">
                  <motion.div
                    ref={tryNowRef}
                    animate={tryNowInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                    transition={tryNowInView ? { duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' } : { duration: 0.3 }}
                  >
                  <a
                    href="https://mediumchat.com/start"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block relative group"
                  >
                    {/* Rotating border with bright shimmer */}
                    <div className="absolute -inset-[2px] rounded-full overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 0%, transparent 88%, rgba(255,255,255,0.5) 90%, rgba(255,255,255,1) 94%, rgba(255,255,255,0.5) 98%, transparent 100%)',
                          filter: 'blur(1px)'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      />
                    </div>
                    
                    {/* Button */}
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-[#4A00BF] via-[#6B21A8] to-[#4A00BF] text-white hover:from-[#5B11D0] hover:via-[#7C2BB9] hover:to-[#5B11D0] font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border-2 border-white"
                    >
                      Try now! ✨
                    </Button>
                  </a>
                  </motion.div>
                </div>
              </div>
            </div>

            <p className="text-justify">
              But here's what matters most: The best platform is the one that resonates with you. We recommend starting with a free trial on your top choice. Most platforms offer steep discounts for first-time customers, giving you a chance to experience their readers and style before committing to full-price readings.
            </p>
            
            <p className="text-justify">
              Choosing a psychic platform is just the first step. The real magic happens when you connect with a reader who understands your situation and can provide genuine insight.
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* Ready to Get Your Answers — full-height section */}
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto w-full space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            Ready to Get Your Answers?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Here's how to get started:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#4A00BF]/20 space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-lg font-bold text-[#4A00BF]">Review & Compare</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Review the comparison table above to see which platform aligns best with your budget and preferences.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#4A00BF]/20 space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-lg font-bold text-[#4A00BF] flex items-center gap-2">
              Try Free <Gift className="w-5 h-5" />
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Take advantage of free trials. Every platform listed offers introductory minutes—use them to test the experience and find a reader you connect with.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#4A00BF]/20 space-y-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-lg font-bold text-[#4A00BF] flex items-center gap-2">
              Go Deeper <TrendingUp className="w-5 h-5" />
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Once you've found your reader, invest in a full session. Most of our community members report that a 15-20 minute reading provides enough time for real clarity and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* "But here's the thing" card — full-height CTA section */}
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-200 shadow-xl text-center space-y-6">
          <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-medium">
            You don't have to wait. If you're eager to get answers right now, our top-rated platform, <strong className="text-[#4A00BF]">Mediumchat.com</strong>, offers a 3-minute free trial that you can start immediately.
          </p>
          <p className="text-base text-gray-600">
            No credit card required.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-10 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open('https://mediumchat.com/start', '_blank')}
          >
            Start Your Free Reading Now
          </Button>
        </div>
      </div>
    </section>
    </>
  );
}
