import { Button } from '@/app/components/ui/button';
import { Star, Award } from 'lucide-react';
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
  const starCount = rank <= 2 ? 5 : rank <= 3 ? 4 : 4;

  return (
    <div className={`bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${isTopRated ? 'border-[#4A00BF]' : 'border-gray-200'}`}>
      {isTopRated && (
        <div className="bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] text-white py-3 px-6 flex items-center justify-center gap-2">
          <Award className="w-6 h-6" />
          <span className="font-bold text-lg">Best Rated – Editor's Choice, {month} {year}</span>
        </div>
      )}

      <div className="p-6 sm:p-8 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
              {rankLabel(rank)}
            </span>
            {[...Array(starCount)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#4A00BF] text-[#4A00BF]" />
            ))}
          </div>
          {name === 'Psychicworld.com' ? (
            <div className="flex items-center justify-center py-2">
              <img src={psychicWorldLogo} alt="Psychic World" className="h-8 sm:h-10 w-auto" />
            </div>
          ) : name === 'Keen.com' ? (
            <div className="flex items-center justify-center py-2">
              <img src={keenLogo} alt="Keen" className="h-8 sm:h-10 w-auto" />
            </div>
          ) : (
            <h3 className="text-2xl sm:text-3xl font-bold text-[#4A00BF]">{name}</h3>
          )}
          <p className="text-sm text-gray-600">{website}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-[#4A00BF]/20">
                <th className="text-left py-3 px-2 text-sm font-bold text-[#4A00BF]">What's rated</th>
                <th className="text-center py-3 px-2 text-sm font-bold text-[#4A00BF]">Score</th>
                <th className="text-left py-3 px-2 text-sm font-bold text-[#4A00BF]">Why</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-4 px-2 text-sm font-medium text-gray-700">{row.criterion}</td>
                  <td className="py-4 px-2 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getScoreColor(row.score)}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="py-4 px-2 text-sm text-gray-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-br from-[#4A00BF]/10 via-[#A855F7]/5 to-[#4A00BF]/5 rounded-xl p-6 border border-[#4A00BF]/20">
          <h4 className="font-bold text-lg text-[#4A00BF] mb-3">Our Conclusion</h4>
          <p className="text-base text-gray-700 leading-relaxed">{conclusion}</p>
        </div>

        {ctaText && ctaUrl && (
          <div className="text-center space-y-3">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-8 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
              onClick={() => window.open(ctaUrl, '_blank')}
            >
              {ctaText}
            </Button>
            {onLearnMore && (
              <div>
                <button
                  onClick={onLearnMore}
                  className="text-[#4A00BF] hover:text-[#3B0099] font-semibold text-base underline underline-offset-4 hover:underline-offset-8 transition-all"
                >
                  {learnMoreText || 'Learn More →'}
                </button>
              </div>
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
    <section id="comparison" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F3E8FF]">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <PlatformCard {...mediumchat} />
        <PlatformCard {...psychicworld} />

        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-8">
            Other valuable psychic contact platforms
          </h3>
        </div>

        <PlatformCard {...keen} />
        <PlatformCard {...kasamba} />
        <PlatformCard {...psychicSource} />
      </div>
    </section>
  );
}
