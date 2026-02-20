import { CheckCircle2, ClipboardCheck } from 'lucide-react';

export function HowWeRate() {
  const criteria = [
    {
      number: 1,
      title: 'Reader credibility',
      description: 'how transparent are the readers presented on the site.'
    },
    {
      number: 2,
      title: 'Free trial session',
      description: 'does the site offer a free trial session for you to evaluate?'
    },
    {
      number: 3,
      title: 'Pricing model',
      description: 'flat fee versus price per coach'
    },
    {
      number: 4,
      title: 'Price range',
      description: 'the range of pricing per minute'
    },
    {
      number: 5,
      title: 'Overall credibility',
      description: 'Judged the number of coaches, reviews and history of the website'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto w-full space-y-6 sm:space-y-8">
        <div className="text-center space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent flex items-center justify-center gap-3">
            <ClipboardCheck className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#4A00BF]" />
            How we rate
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We rate on 5 criteria and share our genuine experiences.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-2xl p-6 sm:p-8 lg:p-10 space-y-4 border border-[#4A00BF]/20 shadow-lg">
          {criteria.map((item) => (
            <div key={item.number} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#4A00BF] mt-1 flex-shrink-0" />
              <div>
                <span className="text-base sm:text-lg text-gray-800 font-semibold">
                  {item.number}. {item.title}:
                </span>{' '}
                <span className="text-base sm:text-lg text-gray-700">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}