import { Button } from '@/app/components/ui/button';
import { Sparkles, Heart, ShieldCheck, Users, Zap, CircleDot } from 'lucide-react';

export function ThankYou() {
  const openMediumchat = () => window.open('https://mediumchat.com/start', '_blank');

  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">

          {/* Header */}
          <div className="text-center space-y-6 relative py-8">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-96 h-96 bg-gradient-to-br from-[#4A00BF]/10 to-purple-200/20 rounded-full blur-3xl"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] bg-clip-text text-transparent">
              You're In! But Why Wait?
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
              Your First Reading Can Start{' '}
              <a
                href="https://mediumchat.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#4A00BF] decoration-2 bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent hover:from-[#4A00BF] hover:via-[#6B21A8] hover:to-[#A855F7] transition-all cursor-pointer"
              >
                Right Now
              </a>
            </h2>
          </div>

          {/* Confirmation Message */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-2 border-[#4A00BF]/30 rounded-2xl p-6 sm:p-8 space-y-4 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4A00BF]/10 to-transparent rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-200/20 to-transparent rounded-full blur-2xl"></div>
            <div className="relative z-10 text-center mb-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl text-[#4A00BF] font-bold mb-2 flex items-center justify-center gap-2 sm:gap-3">
                <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 flex-shrink-0" />
                Congratulations!
                <Sparkles className="w-7 h-7 sm:w-9 sm:h-9 text-yellow-400 flex-shrink-0" />
              </h3>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                You've been entered into this Monday's raffle!
              </p>
            </div>
            <div className="relative z-10 space-y-3 sm:space-y-4">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Every Monday morning, we select <strong>10 souls</strong> to receive a complete 15-minute reading. You're automatically entered for the next <strong>3 months</strong> — that's <strong>12–13 chances to win</strong>.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Check your email Monday morning to see if you're one of the chosen ones.
              </p>
              <p className="text-sm text-gray-500 italic text-center">
                You just joined <strong>49,598 souls</strong> who trusted the process. Welcome to the community.
              </p>
            </div>
          </div>

          {/* Special Offer Section */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#4A00BF] font-bold leading-tight">
              But Here's Something Special...
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              What if you didn't have to wait until Monday?
            </p>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Right now, you could be connecting with an experienced tarot reader, getting the clarity your heart is asking for.
            </p>

            {/* Urgency card */}
            <div className="inline-block border border-[#4A00BF]/20 rounded-xl px-5 py-4 bg-white shadow-sm text-left">
              <p className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-800">
                <CircleDot className="w-4 h-4 text-green-500 flex-shrink-0 animate-pulse" fill="currentColor" />
                <strong>47 readers are online right now.</strong>
              </p>
              <p className="text-sm text-gray-600 mt-1 ml-6">This moment — the one where clarity finally arrives — is available to you immediately.</p>
            </div>
          </div>

          {/* CTA Button 1 */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-6 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={openMediumchat}
            >
              Start Your Free 3-Minute Reading Right Now
            </Button>
          </div>

          {/* How it works */}
          <div className="space-y-6">
            <div className="text-center space-y-3 mb-8">
              <h4 className="text-3xl sm:text-4xl lg:text-5xl text-[#4A00BF] font-bold bg-gradient-to-r from-[#4A00BF] via-[#6B21A8] to-[#4A00BF] bg-clip-text text-transparent">
                Here's how it works:
              </h4>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4A00BF] to-transparent mx-auto rounded-full"></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: 'Choose any available psychic or tarot reader who resonates with you' },
                { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />, text: <><strong>No credit card required</strong> — completely free for 3 minutes</> },
                { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />, text: <><strong>No subscription, no commitment</strong> — just genuine guidance</> },
                { icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="white" />, text: <><strong>Start immediately</strong> — your reader is waiting</> },
              ].map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#4A00BF]/10">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#4A00BF] to-[#A855F7] flex items-center justify-center">
                      {item.icon}
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed pt-2">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h4 className="text-2xl sm:text-3xl text-[#4A00BF] font-bold text-center">
              In just 3 minutes, you can:
            </h4>
            <div className="space-y-4">
              {[
                <><strong>Get a clear answer to the question keeping you up at night</strong> — stop wondering, stop guessing, start knowing</>,
                <><strong>Know whether to hold on or let go</strong> — the cards reveal the truth about where this is really heading</>,
                <><strong>See what the universe is demanding you understand</strong> — about your path, your timing, your next move</>,
                <><strong>Stop suffering alone in your confusion</strong> — connect with a guide who's walked thousands of people through exactly what you're facing</>,
                <><strong>Walk away with clarity instead of chaos</strong> — the cosmic direction your heart has been desperately craving</>,
                <><strong>Discover if this connection is karmic, a soul contract, or something the universe is asking you to release</strong> — no more guessing</>,
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#4A00BF] text-xl flex-shrink-0">✓</span>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center space-y-6">
            <div className="inline-block border border-[#4A00BF]/30 rounded-lg px-5 py-3 bg-white shadow-sm text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl text-[#4A00BF] font-bold leading-tight flex items-center gap-2 sm:gap-3">
                <CircleDot className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 animate-pulse" fill="currentColor" />
                <span>Your Reader Is Available Right Now</span>
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Don't let another day go by wondering. The cards are ready. The cosmic guidance is waiting.
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF] leading-relaxed max-w-3xl mx-auto">
              Your 3 free minutes start the moment you click below.
            </p>
            <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border-2 border-[#4A00BF]/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto shadow-lg">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#4A00BF] to-[#A855F7] flex items-center justify-center shadow-md">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-base sm:text-lg text-[#4A00BF] font-bold text-center leading-relaxed">
                  No credit card. No risk. Just real answers from real psychic guides who care.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button 2 */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-lg sm:text-xl h-14 sm:h-16 font-semibold shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={openMediumchat}
            >
              Start My Free 3-Minute Reading Now
            </Button>
          </div>

          {/* P.S. */}
          <div className="bg-purple-50 rounded-lg p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong className="text-[#4A00BF]">P.S.</strong> You're already in the raffle — that's taken care of. But why sit with uncertainty when clarity is available right now? Your 3 free minutes are waiting. Trust that.
            </p>
          </div>

          {/* CTA Button 3 */}
          <div className="text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-lg sm:text-xl h-14 sm:h-16 font-semibold shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={openMediumchat}
            >
              Start My Free 3-Minute Reading Now
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
