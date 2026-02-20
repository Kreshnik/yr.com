import { Hero } from "@/app/components/comparison/Hero";
import { HowWeRate } from "@/app/components/comparison/HowWeRate";
import { PlatformComparison } from "@/app/components/comparison/PlatformComparison";
import { HowWeChoose } from "@/app/components/comparison/HowWeChoose";
import { Footer } from "@/app/components/comparison/Footer";
import { Button } from "@/app/components/ui/button";

interface ComparisonPageProps {
  onMediumchatReviewClick: () => void;
  onPsychicWorldReviewClick: () => void;
  onKeenReviewClick: () => void;
  onKasambaReviewClick: () => void;
  onPsychicSourceReviewClick: () => void;
  onHomeClick: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
}

export function ComparisonPage({
  onMediumchatReviewClick,
  onPsychicWorldReviewClick,
  onKeenReviewClick,
  onKasambaReviewClick,
  onPsychicSourceReviewClick,
  onHomeClick,
  onTerms,
  onPrivacy,
  onContact
}: ComparisonPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <HowWeRate />
      <PlatformComparison
        onMediumchatReviewClick={onMediumchatReviewClick}
        onPsychicWorldReviewClick={onPsychicWorldReviewClick}
        onKeenReviewClick={onKeenReviewClick}
        onKasambaReviewClick={onKasambaReviewClick}
        onPsychicSourceReviewClick={onPsychicSourceReviewClick}
      />
      <HowWeChoose />

      {/* Home CTA Banner */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-2xl mx-auto w-full bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] rounded-3xl p-10 sm:p-16 text-center shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            Haven't entered our weekly free reading giveaway yet?
          </h2>
          <p className="text-lg text-white/85 mt-4 leading-relaxed">
            10 souls are chosen every Monday. It's free and takes 30 seconds.
          </p>
          <Button
            className="mt-8 bg-white text-[#4A00BF] font-bold hover:bg-gray-50 px-10 h-12 sm:h-14 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
            onClick={onHomeClick}
          >
            Enter the Free Reading Giveaway →
          </Button>
        </div>
      </section>

      <Footer
        onHome={onHomeClick}
        onTerms={onTerms}
        onPrivacy={onPrivacy}
        onContact={onContact}
      />
    </div>
  );
}
