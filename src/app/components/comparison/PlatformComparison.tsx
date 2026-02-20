import { Button } from '@/app/components/ui/button';
import { Star, Award, Trophy } from 'lucide-react';
import psychicWorldLogo from '../../../assets/99166b2fdb82cc81617a29b6cafe281411a223c2.png';
import keenLogo from '../../../assets/567a57a976440ed636e52ab68862971d87e32b57.png';

interface ComparisonRow {
  criterion: string;
  score: 'Best' | 'Great' | 'Good' | 'No';
  why: string;
}

interface PlatformProps {
  rank: number;
  name: string;
  website: string;
  isTopRated?: boolean;
  comparison: ComparisonRow[];
  conclusion: string;
  ctaText?: string;
  ctaUrl?: string;
  onLearnMore?: () => void;
  learnMoreText?: string;
}

const getScoreColor = (score: string) => {
  switch (score) {
    case 'Best': return 'bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] text-white';
    case 'Great': return 'bg-gradient-to-r from-[#A855F7] to-[#C084FC] text-white';
    case 'Good': return 'bg-gradient-to-r from-[#C084FC] to-[#E9D5FF] text-[#4A00BF]';
    case 'No': return 'bg-gray-200 text-gray-600';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const rankLabel = (rank: number) => {
  if (rank === 1) return '1st';
  if (rank === 2) return '2nd';
  if (rank === 3) return '3rd';
  return `${rank}th`;
};

function PlatformCard({ rank, name, website, isTopRated, comparison, conclusion, ctaText, ctaUrl, onLearnMore, learnMoreText }: PlatformProps) {
  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className={`relative bg-white rounded-2xl border ${isTopRated ? 'border-[#4A00BF] shadow-sm' : 'border-gray-200 shadow-sm'}`}>

      {/* Winning ribbon banner */}
      {isTopRated && (
        <div className="relative rounded-t-2xl overflow-hidden bg-gradient-to-r from-[#150033] via-[#3B0099] to-[#150033] px-6 py-5">
          {/* Subtle shimmer overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          <div className="relative flex items-center justify-center gap-3 sm:gap-5">
            {/* Left decoration */}
            <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-yellow-200 text-yellow-200 opacity-60" />
              <Star className="w-4.5 h-4.5 fill-yellow-300 text-yellow-300" />
            </div>

            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0 drop-shadow-sm" />

            <div className="text-center">
              <div className="text-base sm:text-xl font-black text-white tracking-[0.15em] uppercase leading-none drop-shadow-sm">
                Editor's Choice
              </div>
              <div className="text-[11px] sm:text-xs text-yellow-200/90 mt-1.5 tracking-widest uppercase font-medium">
                #1 Rated Psychic Platform · {month} {year}
              </div>
            </div>

            <Award className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0 drop-shadow-sm" />

            {/* Right decoration */}
            <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
              <Star className="w-4.5 h-4.5 fill-yellow-300 text-yellow-300" />
              <Star className="w-3.5 h-3.5 fill-yellow-200 text-yellow-200 opacity-60" />
            </div>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-7">
        {/* Card header — rank badge + name + stars stacked */}
        <div className="flex items-start gap-3 mb-5">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#3B0099] to-[#7C3AED] text-white text-sm font-bold shadow-sm mt-0.5">
            {rank}
          </span>
          <div className="min-w-0">
            {name === 'Psychicworld.com' ? (
              <img src={psychicWorldLogo} alt="Psychic World" className="h-7 w-auto" />
            ) : name === 'Keen.com' ? (
              <img src={keenLogo} alt="Keen" className="h-7 w-auto" />
            ) : (
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">{name}</h3>
            )}
            <p className="text-xs text-gray-600 mt-0.5 mb-2">{website}</p>
            <div className="flex gap-1">
              {[...Array(rank <= 2 ? 5 : 4)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#A855F7] text-[#A855F7]" />
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Criterion</th>
                <th className="text-center py-2.5 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wide w-20">Score</th>
                <th className="text-left py-2.5 px-3 text-xs font-semibold text-gray-600 uppercase tracking-wide">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {comparison.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-3 px-3 text-sm font-medium text-gray-700 whitespace-nowrap">{row.criterion}</td>
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getScoreColor(row.score)}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-sm text-gray-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="mt-4 px-4 py-3 rounded-xl bg-purple-50 border-l-4 border-[#4A00BF]">
          <p className="text-sm text-gray-700 leading-relaxed"><span className="font-semibold text-[#4A00BF]">Verdict: </span>{conclusion}</p>
        </div>

        {/* CTAs */}
        {ctaText && ctaUrl && (
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="default"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] to-[#7C3AED] hover:from-[#2A0066] hover:to-[#6D28D9] text-white px-6 h-11 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              onClick={() => window.open(ctaUrl, '_blank')}
            >
              {ctaText}
            </Button>
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="text-sm text-[#4A00BF] hover:text-[#3B0099] font-semibold underline underline-offset-4 transition-colors cursor-pointer"
              >
                {learnMoreText || 'Learn More →'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface PlatformComparisonProps {
  onMediumchatReviewClick: () => void;
  onPsychicWorldReviewClick: () => void;
  onKeenReviewClick: () => void;
  onKasambaReviewClick: () => void;
  onPsychicSourceReviewClick: () => void;
}

export function PlatformComparison({
  onMediumchatReviewClick,
  onPsychicWorldReviewClick,
  onKeenReviewClick,
  onKasambaReviewClick,
  onPsychicSourceReviewClick
}: PlatformComparisonProps) {

  const mediumchat: PlatformProps = {
    rank: 1,
    name: 'Mediumchat.com',
    website: 'mediumchat.com',
    isTopRated: true,
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Most readers have profile photo + video for trust' },
      { criterion: 'Free trial session', score: 'Best', why: '3-minute trial chat offered, no credit card required' },
      { criterion: 'Pricing model', score: 'Best', why: 'Flat fee per minute for every coach — easy & transparent' },
      { criterion: 'Price range', score: 'Great', why: 'Between $1.85 and $1.99 per minute' },
      { criterion: 'Overall credibility', score: 'Great', why: '300+ coaches, active since 2020, plenty of recent reviews' }
    ],
    conclusion: 'Best value for money experience. The only platform with a 100% free trial and flat-rate transparent pricing.',
    ctaText: 'Try Mediumchat Free Now',
    ctaUrl: 'https://mediumchat.com/start',
    onLearnMore: onMediumchatReviewClick,
    learnMoreText: 'Learn More About Mediumchat →'
  };

  const psychicworld: PlatformProps = {
    rank: 2,
    name: 'Psychicworld.com',
    website: 'psychicworld.com',
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Some readers have profile photo + video for trust' },
      { criterion: 'Free trial session', score: 'No', why: 'Instead: 10 free minutes at first top-up' },
      { criterion: 'Pricing model', score: 'Good', why: 'Every coach offers a different price per minute' },
      { criterion: 'Price range', score: 'Great', why: 'Between $1 and $6 per minute' },
      { criterion: 'Overall credibility', score: 'Great', why: '160+ coaches, active since 2017, plenty of recent reviews' }
    ],
    conclusion: 'Great overall experience. The runner up!',
    ctaText: 'Get 10 Free Minutes',
    ctaUrl: 'https://psychicworld.com',
    onLearnMore: onPsychicWorldReviewClick,
    learnMoreText: 'Learn More About PsychicWorld →'
  };

  const keen: PlatformProps = {
    rank: 3,
    name: 'Keen.com',
    website: 'keen.com',
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Extensive reader profiles, no photo/video resemblance' },
      { criterion: 'Free trial session', score: 'No', why: 'Instead: 5 minutes for $1' },
      { criterion: 'Pricing model', score: 'Good', why: 'Every coach offers a different price per minute' },
      { criterion: 'Price range', score: 'Good', why: 'Prices range between $1.99 and $19.99 per minute' },
      { criterion: 'Overall credibility', score: 'Great', why: '1,300+ coaches, active since 2006, plenty of recent reviews' }
    ],
    conclusion: 'Delivers high quality readings for a long time. Best choice for variety.',
    ctaText: 'Get 5 Minutes for $1',
    ctaUrl: 'https://keen.com',
    onLearnMore: onKeenReviewClick,
    learnMoreText: 'Learn More About Keen →'
  };

  const kasamba: PlatformProps = {
    rank: 4,
    name: 'Kasamba.com',
    website: 'kasamba.com',
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Detailed profiles, chat history, customer feedback ratings' },
      { criterion: 'Free trial session', score: 'Good', why: '3 free minutes with every new psychic you try' },
      { criterion: 'Pricing model', score: 'Good', why: 'Variable per-minute pricing set by each advisor' },
      { criterion: 'Price range', score: 'Good', why: 'From $1.99 to $12+ per minute; broader range' },
      { criterion: 'Overall credibility', score: 'Great', why: '2,000+ advisors, active since 1999, massive review base' }
    ],
    conclusion: 'A veteran platform with the largest advisor roster and decades of trust. Best for variety and longevity.',
    ctaText: 'Start Your Free 3 Minutes',
    ctaUrl: 'https://www.kasamba.com',
    onLearnMore: onKasambaReviewClick,
    learnMoreText: 'Learn More About Kasamba →'
  };

  const psychicSource: PlatformProps = {
    rank: 5,
    name: 'PsychicSource.com',
    website: 'psychicsource.com',
    comparison: [
      { criterion: 'Reader credibility', score: 'Best', why: 'Highly screened advisors; only 2 in 100 applicants accepted' },
      { criterion: 'Free trial session', score: 'Good', why: 'New user promo: first 3 minutes free + discounted rate' },
      { criterion: 'Pricing model', score: 'Good', why: 'Per-minute variable pricing; satisfaction guarantee on file' },
      { criterion: 'Price range', score: 'Good', why: 'From $0.66 introductory to $15+ per minute' },
      { criterion: 'Overall credibility', score: 'Best', why: 'Over 30 years operating, 100% satisfaction guarantee, highly regulated' }
    ],
    conclusion: 'The most rigorously screened platform on our list. Best for seekers who want the highest quality assurance and a satisfaction guarantee.',
    ctaText: 'Get Your First 3 Minutes Free',
    ctaUrl: 'https://www.psychicsource.com',
    onLearnMore: onPsychicSourceReviewClick,
    learnMoreText: 'Learn More About Psychic Source →'
  };

  return (
    <section id="comparison" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
      <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
        <PlatformCard {...mediumchat} />
        <PlatformCard {...psychicworld} />

        <div className="pt-4 pb-1">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest text-center">Also worth considering</p>
        </div>

        <PlatformCard {...keen} />
        <PlatformCard {...kasamba} />
        <PlatformCard {...psychicSource} />
      </div>
    </section>
  );
}
