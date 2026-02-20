import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Star, Trophy, ArrowRight } from 'lucide-react';
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
  stars: number; // out of 5
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
    case 'Best':  return 'bg-gradient-to-r from-[#4A00BF] to-[#7C3AED] text-white';
    case 'Great': return 'bg-gradient-to-r from-[#A855F7] to-[#C084FC] text-white';
    case 'Good':  return 'bg-[#EDE9FE] text-[#3B0099]';
    case 'No':    return 'bg-gray-100 text-gray-600';
    default:      return 'bg-gray-100 text-gray-700';
  }
};

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < count ? 'fill-[#A855F7] text-[#A855F7]' : 'fill-gray-200 text-gray-200'}`}
        />
      ))}
    </div>
  );
}

function PlatformCard({ rank, name, website, stars, isTopRated, comparison, conclusion, ctaText, ctaUrl, onLearnMore, learnMoreText }: PlatformProps) {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: false, margin: '-80px 0px' });

  const currentDate = new Date();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const year = currentDate.getFullYear();

  const card = (
    <div className={`relative bg-white rounded-2xl border ${isTopRated ? 'border-[#4A00BF] shadow-lg shadow-purple-100' : 'border-gray-200 shadow-sm'}`}>

      {/* Winning ribbon banner */}
      {isTopRated && (
        <div className="relative rounded-t-2xl overflow-hidden bg-gradient-to-r from-[#150033] via-[#3B0099] to-[#150033] px-6 py-5">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
          <div className="relative flex items-center justify-center gap-3 sm:gap-5">
            <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
              <Star className="w-3 h-3 fill-yellow-200 text-yellow-200 opacity-60" />
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            </div>
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0" />
            <div className="text-center">
              <div className="text-base sm:text-xl font-black text-white tracking-[0.15em] uppercase leading-none">
                Editor's Choice
              </div>
              <div className="text-[11px] sm:text-xs text-yellow-200/90 mt-1.5 tracking-widest uppercase font-medium">
                Reviewed {month} {year} · 40+ hours of testing
              </div>
            </div>
            <Trophy className="w-7 h-7 sm:w-8 sm:h-8 text-yellow-300 flex-shrink-0" />
            <div className="hidden sm:flex items-center gap-1.5 flex-shrink-0">
              <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
              <Star className="w-3 h-3 fill-yellow-200 text-yellow-200 opacity-60" />
            </div>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-7">

        {/* Card header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#3B0099] to-[#7C3AED] text-white text-sm font-bold shadow-sm">
            {rank}
          </span>
          <div className="min-w-0 flex-1">
            {/* Normalised logo/name — same fixed height for all */}
            <div className="h-8 flex items-center">
              {name === 'Psychicworld.com' ? (
                <img src={psychicWorldLogo} alt="Psychic World" className="h-full w-auto object-contain" />
              ) : name === 'Keen.com' ? (
                <img src={keenLogo} alt="Keen" className="h-full w-auto object-contain" />
              ) : (
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-none">{name}</h3>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-1">{website}</p>
          </div>
          <StarRating count={stars} />
        </div>

        {/* ── Verdict — ABOVE the table so scanners see it first ── */}
        <div className="mb-4 px-4 py-3 rounded-xl bg-purple-50 border-l-4 border-[#4A00BF]">
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#4A00BF]">Verdict: </span>{conclusion}
          </p>
        </div>

        {/* Comparison table — desktop */}
        <div className="hidden sm:block rounded-xl border border-gray-100 overflow-hidden">
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

        {/* Comparison list — mobile (no horizontal scroll) */}
        <div className="sm:hidden rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
          {comparison.map((row, index) => (
            <div key={index} className="px-4 py-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-sm font-medium text-gray-700">{row.criterion}</span>
                <span className={`flex-shrink-0 inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${getScoreColor(row.score)}`}>
                  {row.score}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{row.why}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        {ctaText && ctaUrl && (
          <div className="mt-5 flex flex-col items-center gap-2">
            <motion.div
              ref={ctaRef}
              animate={isTopRated && isInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
              transition={isTopRated && isInView ? { duration: 1.8, repeat: Infinity, repeatDelay: 0.6, ease: 'easeInOut' } : { duration: 0.3 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="default"
                className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] to-[#7C3AED] hover:from-[#2A0066] hover:to-[#6D28D9] text-white px-8 h-11 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer rounded-full"
                onClick={() => window.open(ctaUrl, '_blank')}
              >
                {ctaText}
              </Button>
            </motion.div>
            {onLearnMore && (
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#4A00BF] transition-colors cursor-pointer mt-0.5"
              >
                {learnMoreText?.replace(' →', '') || 'Learn more'}
                <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Fix 5: scale + elevated shadow on #1 card
  if (isTopRated) {
    return (
      <div className="transform scale-[1.01] sm:scale-[1.02] transition-transform origin-top">
        {card}
      </div>
    );
  }

  return card;
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
    stars: 5,
    isTopRated: true,
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Most readers have profile photo + video for trust' },
      { criterion: 'Free trial session', score: 'Best', why: '3-minute trial chat offered, no credit card required' },
      { criterion: 'Pricing model',      score: 'Best', why: 'Flat fee per minute for every coach — easy & transparent' },
      { criterion: 'Price range',        score: 'Great', why: 'Between $1.85 and $1.99 per minute' },
      { criterion: 'Overall credibility',score: 'Great', why: '300+ coaches, active since 2020, plenty of recent reviews' }
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
    stars: 5,
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Some readers have profile photo + video for trust' },
      { criterion: 'Free trial session', score: 'No',    why: 'Instead: 10 free minutes at first top-up' },
      { criterion: 'Pricing model',      score: 'Good',  why: 'Every coach offers a different price per minute' },
      { criterion: 'Price range',        score: 'Great', why: 'Between $1 and $6 per minute' },
      { criterion: 'Overall credibility',score: 'Great', why: '160+ coaches, active since 2017, plenty of recent reviews' }
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
    stars: 4,
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Extensive reader profiles, no photo/video resemblance' },
      { criterion: 'Free trial session', score: 'No',    why: 'Instead: 5 minutes for $1' },
      { criterion: 'Pricing model',      score: 'Good',  why: 'Every coach offers a different price per minute' },
      { criterion: 'Price range',        score: 'Good',  why: 'Prices range between $1.99 and $19.99 per minute' },
      { criterion: 'Overall credibility',score: 'Great', why: '1,300+ coaches, active since 2006, plenty of recent reviews' }
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
    stars: 4,
    comparison: [
      { criterion: 'Reader credibility', score: 'Great', why: 'Detailed profiles, chat history, customer feedback ratings' },
      { criterion: 'Free trial session', score: 'Good',  why: '3 free minutes with every new psychic you try' },
      { criterion: 'Pricing model',      score: 'Good',  why: 'Variable per-minute pricing set by each advisor' },
      { criterion: 'Price range',        score: 'Good',  why: 'From $1.99 to $12+ per minute; broader range' },
      { criterion: 'Overall credibility',score: 'Great', why: '2,000+ advisors, active since 1999, massive review base' }
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
    stars: 4,
    comparison: [
      { criterion: 'Reader credibility', score: 'Best',  why: 'Highly screened advisors; only 2 in 100 applicants accepted' },
      { criterion: 'Free trial session', score: 'Good',  why: 'New user promo: first 3 minutes free + discounted rate' },
      { criterion: 'Pricing model',      score: 'Good',  why: 'Per-minute variable pricing; satisfaction guarantee on file' },
      { criterion: 'Price range',        score: 'Good',  why: 'From $0.66 introductory to $15+ per minute' },
      { criterion: 'Overall credibility',score: 'Best',  why: 'Over 30 years operating, 100% satisfaction guarantee, highly regulated' }
    ],
    conclusion: 'The most rigorously screened platform on our list. Best for seekers who want the highest quality assurance.',
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

        {/* Fix 4: section divider with horizontal rules */}
        <div className="flex items-center gap-4 pt-2 pb-1">
          <div className="flex-1 h-px bg-gray-200" />
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
            Also worth considering
          </p>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <PlatformCard {...keen} />
        <PlatformCard {...kasamba} />
        <PlatformCard {...psychicSource} />
      </div>
    </section>
  );
}
