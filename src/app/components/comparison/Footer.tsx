interface FooterProps {
  onTerms?: () => void;
  onPrivacy?: () => void;
  onContact?: () => void;
  onHome?: () => void;
}

export function Footer({ onTerms, onPrivacy, onContact, onHome }: FooterProps) {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5">
          <span className="text-base sm:text-lg text-gray-900 font-bold">YourReading.com</span>
          <p className="text-sm sm:text-base text-gray-600 text-center">
            In partnership with Mediumchat — trusted spiritual guidance since 2020
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-600">
            {onHome && (
              <button onClick={onHome} className="hover:text-[#4A00BF] transition-colors underline-offset-4 hover:underline">
                Home
              </button>
            )}
            {onTerms && (
              <button onClick={onTerms} className="hover:text-[#4A00BF] transition-colors underline-offset-4 hover:underline">
                Terms of Service
              </button>
            )}
            {onPrivacy && (
              <button onClick={onPrivacy} className="hover:text-[#4A00BF] transition-colors underline-offset-4 hover:underline">
                Privacy Policy
              </button>
            )}
            {onContact && (
              <button onClick={onContact} className="hover:text-[#4A00BF] transition-colors underline-offset-4 hover:underline">
                Contact
              </button>
            )}
          </div>

          <p className="text-xs text-gray-600 text-center max-w-2xl">
            YourReading.com is an independent review and lead generation website. We may receive affiliate compensation from platforms featured on this site. This does not affect our editorial integrity. Results from psychic readings vary. For entertainment purposes.
          </p>
          <p className="text-xs sm:text-sm text-gray-600 text-center">
            © 2026 YourReading.com · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
