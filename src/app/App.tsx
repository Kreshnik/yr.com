import { Hero } from '@/app/components/Hero';
import { Introduction } from '@/app/components/Introduction';
import { HowItWorks } from '@/app/components/HowItWorks';
import { Testimonials } from '@/app/components/Testimonials';
import { FAQ } from '@/app/components/FAQ';
import { EntryForm } from '@/app/components/EntryForm';
import { Footer } from '@/app/components/Footer';
import { ThankYou } from '@/app/components/ThankYou';
import { Navbar } from '@/app/components/Navbar';
import { ComparisonPage } from '@/app/components/ComparisonPage';
import { MediumchatReviewPage } from '@/app/components/MediumchatReviewPage';
import { PsychicWorldReviewPage } from '@/app/components/PsychicWorldReviewPage';
import { KeenReviewPage } from '@/app/components/KeenReviewPage';
import { KasambaReviewPage } from '@/app/components/KasambaReviewPage';
import { PsychicSourceReviewPage } from '@/app/components/PsychicSourceReviewPage';
import { TermsPage } from '@/app/components/TermsPage';
import { PrivacyPage } from '@/app/components/PrivacyPage';
import { ContactPage } from '@/app/components/ContactPage';
import { useFavicon } from '@/app/hooks/useFavicon';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type PageType =
  | 'home'
  | 'comparison'
  | 'thankyou'
  | 'mediumchat-review'
  | 'psychicworld-review'
  | 'keen-review'
  | 'kasamba-review'
  | 'psychicsource-review'
  | 'terms'
  | 'privacy'
  | 'contact';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
};

export default function App() {
  useFavicon();
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const pageMeta: Record<PageType, { title: string; description: string }> = {
    home: {
      title: 'Free Psychic Reading Giveaway — Win a 15-Minute Love Reading | YourReading.com',
      description: 'Enter our free weekly psychic reading giveaway. 10 souls chosen every Monday for a 15-minute tarot or love reading. No credit card required. Join 49,598+ seekers.',
    },
    comparison: {
      title: 'Best Psychic Chat Platforms 2026 — Top 5 Compared | YourReading.com',
      description: 'Expert comparison of the top 5 psychic platforms: Mediumchat, Psychicworld, Keen, Kasamba & Psychic Source. Find the best free trial, pricing, and reader quality.',
    },
    thankyou: {
      title: "You're In! Start Your Free Reading Now | YourReading.com",
      description: "You've entered the free psychic reading giveaway. While you wait, start a free 3-minute reading with Mediumchat right now — no credit card required.",
    },
    'mediumchat-review': {
      title: 'Mediumchat.com Review 2026 — Our #1 Psychic Platform | YourReading.com',
      description: 'Honest Mediumchat review: 3-min free trial, flat $1.99/min pricing, 300+ coaches. Our top-rated psychic platform for love and tarot readings. Full analysis inside.',
    },
    'psychicworld-review': {
      title: 'PsychicWorld.com Review 2026 — 10 Free Minutes Offer | YourReading.com',
      description: 'Complete Psychicworld.com review. Get 10 free minutes on first top-up. 160+ coaches active since 2017. Our #2 rated psychic platform. Full analysis inside.',
    },
    'keen-review': {
      title: 'Keen.com Review 2026 — 5 Minutes for $1 | YourReading.com',
      description: 'Honest Keen.com review: 1,300+ coaches since 2006, 5 minutes for $1 intro offer. Best psychic platform for variety and long-term track record.',
    },
    'kasamba-review': {
      title: 'Kasamba.com Review 2026 — 3 Free Minutes per Psychic | YourReading.com',
      description: 'Complete Kasamba review: 2,000+ advisors since 1999, 3 free minutes with every new reader. Largest psychic roster online. Our honest verdict inside.',
    },
    'psychicsource-review': {
      title: 'PsychicSource.com Review 2026 — 30 Years of Excellence | YourReading.com',
      description: 'PsychicSource review: Only 2% of applicants accepted. 100% satisfaction guarantee. 30+ years operating. Best quality assurance in online psychic readings.',
    },
    terms: {
      title: 'Terms of Service | YourReading.com',
      description: 'Read the Terms of Service governing use of YourReading.com and our free psychic reading giveaway program.',
    },
    privacy: {
      title: 'Privacy Policy | YourReading.com',
      description: 'Learn how YourReading.com protects your personal data and reading privacy. We are committed to keeping your information safe.',
    },
    contact: {
      title: 'Contact Us | YourReading.com',
      description: 'Get in touch with the YourReading.com team. Questions about our free psychic reading giveaway or platform reviews? We are here to help.',
    },
  };

  const go = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const { title, description } = pageMeta[currentPage];
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);
  }, [currentPage]);

  const handleLogoClick = () => go('home');
  const handleComparisonClick = () => go('comparison');
  const handleMediumchatReviewClick = () => go('mediumchat-review');
  const handlePsychicWorldReviewClick = () => go('psychicworld-review');
  const handleKeenReviewClick = () => go('keen-review');
  const handleKasambaReviewClick = () => go('kasamba-review');
  const handlePsychicSourceReviewClick = () => go('psychicsource-review');
  const handleTermsClick = () => go('terms');
  const handlePrivacyClick = () => go('privacy');
  const handleContactClick = () => go('contact');
  const handleFormSubmit = () => go('thankyou');
  const handleHomeClick = () => {
    go('home');
    setTimeout(() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' }), 300);
  };

  const footerProps = {
    onTerms: handleTermsClick,
    onPrivacy: handlePrivacyClick,
    onContact: handleContactClick,
    onComparison: handleComparisonClick,
  };

  const reviewFooterProps = {
    onTerms: handleTermsClick,
    onPrivacy: handlePrivacyClick,
    onContact: handleContactClick,
    onHome: handleLogoClick,
  };

  return (
    <>
      <Navbar onLogoClick={handleLogoClick} onComparisonClick={handleComparisonClick} />
      <AnimatePresence mode="wait">

        {currentPage === 'home' && (
          <motion.div key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit"
            className="min-h-screen">
            <Hero />
            <Introduction />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <EntryForm onSubmitSuccess={handleFormSubmit} />
            <Footer {...footerProps} />
          </motion.div>
        )}

        {currentPage === 'thankyou' && (
          <motion.div key="thankyou" variants={pageVariants} initial="initial" animate="animate" exit="exit"
            className="pt-16 sm:pt-20">
            <ThankYou />
          </motion.div>
        )}

        {currentPage === 'comparison' && (
          <motion.div key="comparison" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ComparisonPage
              onMediumchatReviewClick={handleMediumchatReviewClick}
              onPsychicWorldReviewClick={handlePsychicWorldReviewClick}
              onKeenReviewClick={handleKeenReviewClick}
              onKasambaReviewClick={handleKasambaReviewClick}
              onPsychicSourceReviewClick={handlePsychicSourceReviewClick}
              onHomeClick={handleHomeClick}
              onTerms={handleTermsClick}
              onPrivacy={handlePrivacyClick}
              onContact={handleContactClick}
            />
          </motion.div>
        )}

        {currentPage === 'mediumchat-review' && (
          <motion.div key="mediumchat-review" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <MediumchatReviewPage onBack={handleComparisonClick} {...reviewFooterProps} />
          </motion.div>
        )}

        {currentPage === 'psychicworld-review' && (
          <motion.div key="psychicworld-review" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <PsychicWorldReviewPage onBack={handleComparisonClick} {...reviewFooterProps} />
          </motion.div>
        )}

        {currentPage === 'keen-review' && (
          <motion.div key="keen-review" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <KeenReviewPage onBack={handleComparisonClick} {...reviewFooterProps} />
          </motion.div>
        )}

        {currentPage === 'kasamba-review' && (
          <motion.div key="kasamba-review" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <KasambaReviewPage onBack={handleComparisonClick} {...reviewFooterProps} />
          </motion.div>
        )}

        {currentPage === 'psychicsource-review' && (
          <motion.div key="psychicsource-review" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <PsychicSourceReviewPage onBack={handleComparisonClick} {...reviewFooterProps} />
          </motion.div>
        )}

        {currentPage === 'terms' && (
          <motion.div key="terms" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <TermsPage {...footerProps} />
          </motion.div>
        )}

        {currentPage === 'privacy' && (
          <motion.div key="privacy" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <PrivacyPage {...footerProps} />
          </motion.div>
        )}

        {currentPage === 'contact' && (
          <motion.div key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ContactPage {...footerProps} />
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}
