import { MediumchatLogo } from '@/app/components/MediumchatLogo';

export function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-3 sm:space-y-4">
          <span className="text-base sm:text-lg text-gray-900 font-bold">Mediumchat</span>
          <p className="text-sm sm:text-base text-gray-500 text-center">
            Trusted spiritual guidance platform since 2020
          </p>
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}