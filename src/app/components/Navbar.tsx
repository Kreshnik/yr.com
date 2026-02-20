import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onLogoClick: () => void;
  onComparisonClick: () => void;
}

export function Navbar({ onLogoClick, onComparisonClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button 
              onClick={onLogoClick}
              className="flex items-center gap-2 hover:brightness-75 transition-all cursor-pointer"
              aria-label="Go to homepage"
            >
              <MediumchatLogo className="h-7 sm:h-9 w-auto" variant="navbar" />
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#4A00BF] hover:bg-[#4A00BF]/10 rounded-lg transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-16 sm:top-20 bg-gradient-to-b from-white via-[#F3E8FF] to-[#E9D5FF] z-40 flex flex-col"
          >
            <motion.div 
              className="flex-1 px-6 py-8 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <motion.button
                onClick={() => {
                  onLogoClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-4 text-xl font-semibold text-gray-700 hover:bg-white/60 hover:text-[#4A00BF] rounded-xl transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                Home
              </motion.button>
              
              <div className="h-px bg-gradient-to-r from-transparent via-[#4A00BF]/30 to-transparent my-2" />
              
              <motion.button
                onClick={() => {
                  onComparisonClick();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-4 text-xl font-semibold text-gray-700 hover:bg-white/60 hover:text-[#4A00BF] rounded-xl transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.02, x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                Top 5 Psychic Chats
              </motion.button>
            </motion.div>
            
            {/* Free Trial Link at Bottom */}
            <motion.div 
              className="p-6 border-t border-[#4A00BF]/20 bg-white/40 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <motion.a
                href="https://mediumchat.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-8 py-4 bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Free Trial ✨
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}