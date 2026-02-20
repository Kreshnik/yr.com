import { Button } from '@/app/components/ui/button';
import { Sparkles } from 'lucide-react';

export function Introduction() {
  return (
    <section className="pt-0 sm:pt-0 sm:pb-24 lg:pt-0 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-white pb-16">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 text-[16px]">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          In collaboration with <strong className="text-[#4A00BF]">Mediumchat</strong>, the fastest-growing spiritual guidance platform established in 2020, we're offering something special: a complete <strong>15-minute reading</strong> with one of our experienced psychic coaches.
        </p>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Every Monday, we randomly select <strong className="text-[#4A00BF]">10 lucky winners</strong> to receive a free reading. Completely anonymously. In a safe, judgment-free space.
        </p>
        <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 border border-[#4A00BF]/20 shadow-lg">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium text-center sm:text-left">
            Your reading can help you:
          </p>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4A00BF] mt-1 flex-shrink-0" />
              <span>Understand the deeper spiritual meaning of your love life</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4A00BF] mt-1 flex-shrink-0" />
              <span>Receive clarity about soul connections and twin flame energy</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4A00BF] mt-1 flex-shrink-0" />
              <span>Trust your intuition and next steps with confidence</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4A00BF] mt-1 flex-shrink-0" />
              <span>Know whether divine timing is working in your favor right now</span>
            </li>
          </ul>
        </div>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
