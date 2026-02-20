import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Users, ShieldCheck, Lock, Star, Sparkles } from 'lucide-react';
import logoGif from '../../assets/266e7e78d6a2b6fa5f58d0780794f689fed17502.png';

export function Hero() {
  const [showExitDialog, setShowExitDialog] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5) setShowExitDialog(true);
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const scrollToForm = () => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#E9D5FF] to-white overflow-hidden">
        {/* Celestial SVG pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* 4-pointed sparkle stars */}
          <g fill="#6D28D9">
            {/* Star 1 */}
            <path opacity="0.13" transform="translate(120, 140)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
              <animate attributeName="opacity" values="0.13;0.22;0.13" dur="4s" begin="0s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 120 140" to="360 120 140" dur="18s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 2 */}
            <path opacity="0.10" transform="translate(380, 80)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
              <animate attributeName="opacity" values="0.10;0.18;0.10" dur="5s" begin="1.3s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 380 80" to="360 380 80" dur="22s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 3 */}
            <path opacity="0.15" transform="translate(700, 50)" d="M0-11 L2.7-2.7 L11 0 L2.7 2.7 L0 11 L-2.7 2.7 L-11 0 L-2.7-2.7Z">
              <animate attributeName="opacity" values="0.15;0.26;0.15" dur="3.5s" begin="2.1s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 700 50" to="360 700 50" dur="20s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 4 */}
            <path opacity="0.09" transform="translate(980, 110)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
              <animate attributeName="opacity" values="0.09;0.16;0.09" dur="6s" begin="0.7s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 980 110" to="360 980 110" dur="25s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 5 */}
            <path opacity="0.12" transform="translate(1260, 170)" d="M0-10 L2.5-2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5-2.5Z">
              <animate attributeName="opacity" values="0.12;0.20;0.12" dur="4.5s" begin="3.2s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 1260 170" to="360 1260 170" dur="16s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 6 */}
            <path opacity="0.08" transform="translate(60, 480)" d="M0-8 L2-2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2-2Z">
              <animate attributeName="opacity" values="0.08;0.15;0.08" dur="5.5s" begin="1.8s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 60 480" to="360 60 480" dur="28s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 7 */}
            <path opacity="0.11" transform="translate(1380, 400)" d="M0-9 L2.2-2.2 L9 0 L2.2 2.2 L0 9 L-2.2 2.2 L-9 0 L-2.2-2.2Z">
              <animate attributeName="opacity" values="0.11;0.19;0.11" dur="4s" begin="4.5s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 1380 400" to="360 1380 400" dur="21s" repeatCount="indefinite" additive="sum" />
            </path>
            {/* Star 8 */}
            <path opacity="0.10" transform="translate(820, 820)" d="M0-7 L1.7-1.7 L7 0 L1.7 1.7 L0 7 L-1.7 1.7 L-7 0 L-1.7-1.7Z">
              <animate attributeName="opacity" values="0.10;0.17;0.10" dur="3.8s" begin="2.9s" repeatCount="indefinite" />
              <animateTransform attributeName="transform" type="rotate" from="0 820 820" to="360 820 820" dur="19s" repeatCount="indefinite" additive="sum" />
            </path>
          </g>

          {/* Crescent moons */}
          <g fill="#7C3AED" fillRule="evenodd">
            {/* Moon 1 */}
            <g opacity="0.09" transform="translate(230, 300)">
              <circle cx="0" cy="0" r="12" />
              <circle cx="7" cy="-3" r="10" fill="#E9D5FF" />
              <animateTransform attributeName="transform" type="rotate" from="0 230 300" to="360 230 300" dur="40s" repeatCount="indefinite" additive="sum" />
              <animate attributeName="opacity" values="0.09;0.15;0.09" dur="7s" begin="0.5s" repeatCount="indefinite" />
            </g>
            {/* Moon 2 */}
            <g opacity="0.07" transform="translate(1150, 250)">
              <circle cx="0" cy="0" r="16" />
              <circle cx="9" cy="-4" r="14" fill="#E9D5FF" />
              <animateTransform attributeName="transform" type="rotate" from="0 1150 250" to="360 1150 250" dur="50s" repeatCount="indefinite" additive="sum" />
              <animate attributeName="opacity" values="0.07;0.13;0.07" dur="8s" begin="3s" repeatCount="indefinite" />
            </g>
            {/* Moon 3 */}
            <g opacity="0.08" transform="translate(500, 750)">
              <circle cx="0" cy="0" r="14" />
              <circle cx="8" cy="-3" r="12" fill="#F3E8FF" />
              <animateTransform attributeName="transform" type="rotate" from="0 500 750" to="360 500 750" dur="45s" repeatCount="indefinite" additive="sum" />
              <animate attributeName="opacity" values="0.08;0.14;0.08" dur="6s" begin="1.5s" repeatCount="indefinite" />
            </g>
            {/* Moon 4 */}
            <g opacity="0.06" transform="translate(1300, 650)">
              <circle cx="0" cy="0" r="10" />
              <circle cx="6" cy="-2" r="8.5" fill="#F3E8FF" />
              <animateTransform attributeName="transform" type="rotate" from="0 1300 650" to="360 1300 650" dur="55s" repeatCount="indefinite" additive="sum" />
              <animate attributeName="opacity" values="0.06;0.11;0.06" dur="9s" begin="5s" repeatCount="indefinite" />
            </g>
          </g>

          {/* Small dot stars */}
          <g fill="#A855F7">
            <circle cx="200" cy="220" r="2.5" opacity="0.18">
              <animate attributeName="opacity" values="0.18;0.05;0.18" dur="3s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="460" cy="160" r="2" opacity="0.14">
              <animate attributeName="opacity" values="0.14;0.04;0.14" dur="4.2s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="620" cy="290" r="3" opacity="0.12">
              <animate attributeName="opacity" values="0.12;0.22;0.12" dur="2.8s" begin="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="860" cy="180" r="2" opacity="0.16">
              <animate attributeName="opacity" values="0.16;0.05;0.16" dur="3.6s" begin="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="1050" cy="340" r="2.5" opacity="0.10">
              <animate attributeName="opacity" values="0.10;0.20;0.10" dur="5s" begin="1.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="1200" cy="90" r="2" opacity="0.14">
              <animate attributeName="opacity" values="0.14;0.04;0.14" dur="3.2s" begin="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="1360" cy="530" r="2.5" opacity="0.09">
              <animate attributeName="opacity" values="0.09;0.18;0.09" dur="4.8s" begin="0.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="100" cy="680" r="2" opacity="0.11">
              <animate attributeName="opacity" values="0.11;0.04;0.11" dur="3.4s" begin="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="320" cy="600" r="3" opacity="0.08">
              <animate attributeName="opacity" values="0.08;0.16;0.08" dur="4s" begin="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="750" cy="700" r="2" opacity="0.13">
              <animate attributeName="opacity" values="0.13;0.04;0.13" dur="3.8s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="1100" cy="770" r="2.5" opacity="0.10">
              <animate attributeName="opacity" values="0.10;0.19;0.10" dur="5.2s" begin="4.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="940" cy="520" r="2" opacity="0.09">
              <animate attributeName="opacity" values="0.09;0.17;0.09" dur="2.6s" begin="1.4s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>

        {/* Spacer that sits behind the fixed navbar */}
        <div className="h-16 sm:h-20 flex-shrink-0" />
        {/* Content centered in remaining viewport height */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center justify-center mb-1 sm:mb-2">
            <img src={logoGif} alt="YourReading Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
          </div>

          {/* Social proof pill */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-white border border-[#4A00BF]/30 rounded-full px-4 py-2 shadow-sm text-sm font-semibold text-[#4A00BF]">
              <Users className="w-4 h-4 text-[#A855F7]" />
              49,598 souls have already found clarity
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl px-4 leading-tight font-bold tracking-tight bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            What Do the Cards Want to Tell You About Your Love Story?
          </h1>

          <p className="text-xl sm:text-2xl text-[#4A00BF] px-4">
            This is an invitation for Your <strong>Free</strong> Reading
          </p>

          {/* Scarcity line */}
          <p className="text-base sm:text-lg font-semibold text-[#4A00BF] max-w-2xl mx-auto px-4">
            <strong>10 souls</strong> are chosen every Monday — enter once, stay in for 3 months.
          </p>

          <div className="pt-2 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-6 sm:px-8 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={scrollToForm}
            >
              Claim Your Free Psychic Reading
            </Button>
          </div>

          {/* Trust micro-bar */}
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center text-sm text-gray-600 pt-1">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#4A00BF]" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#4A00BF]" /> Your privacy is sacred</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#4A00BF] fill-[#4A00BF]" /> Since 2020</span>
          </div>
        </div>
        </div>
      </section>

      {/* Exit-intent dialog */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent className="max-w-sm overflow-hidden p-0 border-0 shadow-2xl">
          {/* Gradient header */}
          <div className="bg-gradient-to-br from-[#1A0044] via-[#3B0099] to-[#6B21A8] px-7 pt-8 pb-7 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="relative">
              <img src={logoGif} alt="YourReading" className="w-14 h-14 object-contain mx-auto mb-4" />
              <div className="inline-flex items-center gap-1.5 bg-white/15 rounded-full px-3 py-1 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                <span className="text-xs font-semibold text-white tracking-wide">Your spot is still open</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Wait — your reading invitation is still open.
              </h2>
            </div>
          </div>

          {/* Body */}
          <div className="bg-white px-7 py-6 text-center space-y-5">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-[#4A00BF]">10 souls are chosen this Monday.</strong> Enter once and you're in for 3 months. It takes 30 seconds.
            </p>
            <Button
              className="w-full bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white h-12 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-semibold cursor-pointer"
              onClick={() => { setShowExitDialog(false); scrollToForm(); }}
            >
              Claim My Free Reading
            </Button>
            <button
              onClick={() => setShowExitDialog(false)}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              No thanks, I'll pass
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
