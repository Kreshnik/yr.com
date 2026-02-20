import { useEffect, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Dialog, DialogContent } from '@/app/components/ui/dialog';
import { Users, ShieldCheck, Lock, Star } from 'lucide-react';
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-2 sm:pb-4 bg-gradient-to-b from-[#E9D5FF] to-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 -mt-20 sm:-mt-28 lg:-mt-32">
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

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            The answers you're seeking aren't in logic — they're in the cards, your intuition, and the universe's guidance.
          </p>

          {/* Scarcity line above the fold */}
          <p className="text-xl sm:text-2xl font-bold text-[#4A00BF] max-w-3xl mx-auto px-4">
            <strong>10 beautiful souls</strong> will be chosen this Monday. Is one of them you?
          </p>

          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Not everything is meant to be solved. Some things are meant to be{' '}
            <button
              onClick={scrollToForm}
              className="underline font-bold text-gray-600 hover:text-[#4A00BF] transition-colors cursor-pointer bg-transparent border-none p-0 inline"
            >
              revealed
            </button>.
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
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center items-center text-sm text-gray-500 pt-1">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#4A00BF]" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#4A00BF]" /> Your privacy is sacred</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#4A00BF] fill-[#4A00BF]" /> Since 2020</span>
          </div>
        </div>
      </section>

      {/* Exit-intent dialog */}
      <Dialog open={showExitDialog} onOpenChange={setShowExitDialog}>
        <DialogContent className="max-w-md text-center space-y-4 p-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
            Wait — your reading invitation is still open.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Don't close before entering. <strong>10 souls are chosen this Monday.</strong> It takes 30 seconds.
          </p>
          <Button
            className="w-full bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white h-12 shadow-lg"
            onClick={() => { setShowExitDialog(false); scrollToForm(); }}
          >
            Enter the Giveaway
          </Button>
          <button
            onClick={() => setShowExitDialog(false)}
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            No thanks
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
}
