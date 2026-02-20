import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onLogoClick: () => void;
  onComparisonClick: () => void;
}

export function Navbar({ onLogoClick, onComparisonClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: 'Home', onClick: () => { onLogoClick(); closeMenu(); } },
    { label: 'Top 5 Psychic Chats', onClick: () => { onComparisonClick(); closeMenu(); } },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-purple-100 shadow-[0_1px_12px_rgba(74,0,191,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <button
              onClick={onLogoClick}
              className="flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A00BF]/40 rounded-lg"
              aria-label="Go to homepage"
            >
              <MediumchatLogo className="h-8 sm:h-10 w-auto" variant="navbar" />
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#4A00BF] hover:bg-purple-50 rounded-lg transition-colors duration-150 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="https://mediumchat.com/start"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#3B0099] to-[#7C3AED] hover:from-[#2A0066] hover:to-[#6D28D9] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Start Free Trial
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#4A00BF] hover:bg-purple-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 sm:top-20 bg-black/20 z-30 md:hidden"
              onClick={closeMenu}
            />

            {/* Dropdown Panel */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-16 sm:top-20 left-0 right-0 z-40 md:hidden bg-white border-b border-purple-100 shadow-xl"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={link.onClick}
                    className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#4A00BF] hover:bg-purple-50 rounded-xl transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}

                <div className="pt-3 pb-1">
                  <a
                    href="https://mediumchat.com/start"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#3B0099] to-[#7C3AED] hover:from-[#2A0066] hover:to-[#6D28D9] text-white font-semibold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    Start Free Trial
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
