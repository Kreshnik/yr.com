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
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
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
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Haven't entered our weekly free reading giveaway yet?
          </h2>
          <p className="text-lg text-white/90 mt-3">
            10 souls are chosen every Monday. It's free and takes 30 seconds.
          </p>
          <Button
            className="mt-6 bg-white text-[#4A00BF] font-bold hover:bg-gray-100 px-8 h-12 rounded-xl"
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
