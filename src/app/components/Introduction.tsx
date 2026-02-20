import { Button } from '@/app/components/ui/button';
import { Heart, Eye, Compass, Clock } from 'lucide-react';

export function Introduction() {
  return (
    <section className="pt-8 sm:pt-16 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-[16px]">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          In collaboration with <strong className="text-[#4A00BF]">Mediumchat</strong>, the fastest-growing spiritual guidance platform established in 2020, we're offering something special: a complete <strong>15-minute reading</strong> with one of our experienced psychic coaches.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Every Monday, we randomly select <strong className="text-[#4A00BF]">10 lucky winners</strong> to receive a free reading. Completely anonymously. In a safe, judgment-free space.
        </p>
        <div className="space-y-4">
          <p className="text-base sm:text-lg text-gray-800 font-semibold">
            Your reading can help you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A00BF] to-[#7C3AED] flex items-center justify-center shadow-sm">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Love &amp; Relationships</p>
                <p className="text-sm text-gray-600 leading-relaxed">Understand the deeper spiritual meaning of your love life</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A00BF] to-[#7C3AED] flex items-center justify-center shadow-sm">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Soul Connections</p>
                <p className="text-sm text-gray-600 leading-relaxed">Receive clarity about soul connections and twin flame energy</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A00BF] to-[#7C3AED] flex items-center justify-center shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Intuition &amp; Confidence</p>
                <p className="text-sm text-gray-600 leading-relaxed">Trust your intuition and next steps with confidence</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-2xl p-5 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A00BF] to-[#7C3AED] flex items-center justify-center shadow-sm">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">Divine Timing</p>
                <p className="text-sm text-gray-600 leading-relaxed">Know whether divine timing is working in your favor right now</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center">
          Enter once, and you're included in every weekly drawing for <strong className="text-[#4A00BF]">3 months</strong>.
        </p>
        <div className="text-center pt-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-6 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Claim Your Free Psychic Reading
          </Button>
        </div>
      </div>
    </section>
  );
}
