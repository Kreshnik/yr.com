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
import { useFavicon } from '@/app/hooks/useFavicon';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type PageType = 'home' | 'comparison' | 'thankyou' | 'mediumchat-review' | 'psychicworld-review' | 'keen-review';

export default function App() {
  useFavicon();
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  
  const handleLogoClick = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handleComparisonClick = () => {
    setCurrentPage('comparison');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handleMediumchatReviewClick = () => {
    setCurrentPage('mediumchat-review');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handlePsychicWorldReviewClick = () => {
    setCurrentPage('psychicworld-review');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handleKeenReviewClick = () => {
    setCurrentPage('keen-review');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };
  
  const handleFormSubmit = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setCurrentPage('thankyou');
  };
  
  // Mystical fade animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };
  
  return (
    <>
      <Navbar onLogoClick={handleLogoClick} onComparisonClick={handleComparisonClick} />
      <AnimatePresence mode="wait">
        {currentPage === 'thankyou' && (
          <motion.div
            key="thankyou"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="pt-16 sm:pt-20"
          >
            <ThankYou />
          </motion.div>
        )}
        
        {currentPage === 'mediumchat-review' && (
          <motion.div
            key="mediumchat-review"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <MediumchatReviewPage onBack={handleComparisonClick} />
          </motion.div>
        )}
        
        {currentPage === 'psychicworld-review' && (
          <motion.div
            key="psychicworld-review"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <PsychicWorldReviewPage onBack={handleComparisonClick} />
          </motion.div>
        )}
        
        {currentPage === 'keen-review' && (
          <motion.div
            key="keen-review"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <KeenReviewPage onBack={handleComparisonClick} />
          </motion.div>
        )}
        
        {currentPage === 'comparison' && (
          <motion.div
            key="comparison"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ComparisonPage onMediumchatReviewClick={handleMediumchatReviewClick} onPsychicWorldReviewClick={handlePsychicWorldReviewClick} onKeenReviewClick={handleKeenReviewClick} />
          </motion.div>
        )}
        
        {currentPage === 'home' && (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-white pt-16 sm:pt-20"
          >
            <Hero />
            <Introduction />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <EntryForm onSubmitSuccess={handleFormSubmit} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}