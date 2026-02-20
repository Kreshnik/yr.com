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

  const go = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

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
