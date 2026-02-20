import { Button } from '@/app/components/ui/button';

const steps = [
  {
    number: '1',
    title: 'Share Just Three Things',
    subtitle: '(30 Seconds)',
    description: 'Your first name, email, and a nickname. No credit card. No pressure. Just you and the universe.'
  },
  {
    number: '2',
    title: 'The Universe Holds Your Space for 3 Months',
    subtitle: '',
    description: 'Every Monday for 3 months, your name flows into the sacred selection. You don\'t need to do anything else. Just wait, trust, and watch your inbox.'
  },
  {
    number: '3',
    title: 'If Chosen, We\'ll Reach Out',
    subtitle: '',
    description: 'Winners are honored anonymously — by nickname and first 3 letters of email only. You\'ll receive a private email with simple instructions to claim your 15-minute reading with one of Mediumchat\'s gifted tarot readers, numerologists, or intuitive coaches.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-4 sm:mb-6">How This Works</h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 sm:left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#4A00BF]/30 via-[#A855F7]/20 to-transparent hidden sm:block" />

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5 sm:gap-7">
                {/* Step badge */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#3B0099] to-[#7C3AED] text-white flex items-center justify-center text-lg sm:text-xl font-semibold shadow-md shadow-purple-200 z-10">
                    {step.number}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-purple-100 shadow-sm mb-1">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl text-gray-900">{step.title}</h3>
                      {step.subtitle && (
                        <span className="text-sm font-medium text-[#4A00BF] bg-purple-50 px-2 py-0.5 rounded-full">{step.subtitle}</span>
                      )}
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
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
