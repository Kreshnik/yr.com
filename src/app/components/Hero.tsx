import { Button } from '@/app/components/ui/button';
import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import logoGif from '../../assets/266e7e78d6a2b6fa5f58d0780794f689fed17502.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-2 sm:pb-4 bg-gradient-to-b from-[#E9D5FF] to-white">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 -mt-20 sm:-mt-28 lg:-mt-32">
        <div className="inline-flex items-center justify-center mb-1 sm:mb-2">
          <img src={logoGif} alt="Mediumchat Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl px-4 leading-tight font-bold tracking-tight bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
          What Do the Cards Want to Tell You About Your Love Story?
        </h1>
        <p className="text-xl sm:text-2xl text-[#4A00BF] px-4">
          This is an invitation for Your <strong>Free</strong> Reading
        </p>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          The answers you're seeking aren't in logic, they're in the cards, your intuition, and the universe's guidance.
        </p>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          Not everything is meant to be solved. Some things are meant to be <button 
            onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="underline font-bold text-gray-600 hover:text-[#4A00BF] transition-colors cursor-pointer bg-transparent border-none p-0 inline"
          >
            revealed
          </button>.
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#4A00BF] max-w-3xl mx-auto px-4 mt-6">
          You're not alone.
        </p>
        <div className="pt-2 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-6 sm:px-8 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Claim Your Free Psychic Reading
          </Button>
        </div>
      </div>
    </section>
  );
}