import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Users, ShieldCheck, Lock, Star, Sparkles } from 'lucide-react';
import logoGif from '../../assets/266e7e78d6a2b6fa5f58d0780794f689fed17502.png';
import { CelestialBackground } from '@/app/components/CelestialBackground';

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
        <CelestialBackground />

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
