import { Hero } from "@/app/components/comparison/Hero";
import { HowWeRate } from "@/app/components/comparison/HowWeRate";
import { PlatformComparison } from "@/app/components/comparison/PlatformComparison";
import { HowWeChoose } from "@/app/components/comparison/HowWeChoose";
import { Footer } from "@/app/components/comparison/Footer";

interface ComparisonPageProps {
  onMediumchatReviewClick: () => void;
  onPsychicWorldReviewClick: () => void;
  onKeenReviewClick: () => void;
}

export function ComparisonPage({ onMediumchatReviewClick, onPsychicWorldReviewClick, onKeenReviewClick }: ComparisonPageProps) {
  return (
    <div className="min-h-screen bg-white pt-16 sm:pt-20">
      <Hero />
      <HowWeRate />
      <PlatformComparison 
        onMediumchatReviewClick={onMediumchatReviewClick}
        onPsychicWorldReviewClick={onPsychicWorldReviewClick}
        onKeenReviewClick={onKeenReviewClick}
      />
      <HowWeChoose />
      <Footer />
    </div>
  );
}