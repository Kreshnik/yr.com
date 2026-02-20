import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import { motion } from 'motion/react';

export function Hero() {
  // Sparkle positions - distributed around the text
  const sparkles = [
    { x: -80, y: -30, delay: 0, size: 35 },
    { x: 120, y: -40, delay: 1.2, size: 30 },
    { x: -60, y: 60, delay: 2.4, size: 32 },
    { x: 140, y: 50, delay: 1.8, size: 28 },
    { x: 20, y: -50, delay: 0.6, size: 30 },
    { x: -100, y: 20, delay: 3, size: 26 },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col bg-gradient-to-b from-[#E9D5FF] to-white">
      <div className="h-16 sm:h-20 flex-shrink-0" />
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
        <div className="relative inline-block">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl px-4 leading-tight font-extrabold tracking-tight drop-shadow-sm relative">
            <span className="relative z-10 bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">
              Top 5 Psychic Chat Platforms Compared
            </span>
            
            {/* Star-shaped glowing sparkles */}
            {sparkles.map((sparkle, index) => (
              <motion.div
                key={index}
                className="absolute pointer-events-none z-0"
                style={{
                  left: `50%`,
                  top: `50%`,
                  width: `${sparkle.size}px`,
                  height: `${sparkle.size}px`,
                  marginLeft: `${sparkle.x}px`,
                  marginTop: `${sparkle.y}px`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: sparkle.delay,
                  ease: 'easeInOut',
                }}
              >
                {/* Star shape with multiple blur layers for glow */}
                <div className="absolute inset-0">
                  {/* Vertical beam */}
                  <div className="absolute left-1/2 top-0 w-[3px] h-full bg-white blur-sm transform -translate-x-1/2" />
                  {/* Horizontal beam */}
                  <div className="absolute top-1/2 left-0 h-[3px] w-full bg-white blur-sm transform -translate-y-1/2" />
                  {/* Diagonal beam 1 */}
                  <div className="absolute left-1/2 top-1/2 w-[3px] h-full bg-white blur-sm transform -translate-x-1/2 -translate-y-1/2 rotate-45 origin-center" />
                  {/* Diagonal beam 2 */}
                  <div className="absolute left-1/2 top-1/2 w-[3px] h-full bg-white blur-sm transform -translate-x-1/2 -translate-y-1/2 -rotate-45 origin-center" />
                  
                  {/* Heavy blur layers for glow effect */}
                  <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-90" />
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-70" style={{ transform: 'scale(1.5)' }} />
                  <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50" style={{ transform: 'scale(2)' }} />
                </div>
              </motion.div>
            ))}
          </h1>
        </div>
        <p className="text-xl sm:text-2xl text-[#4A00BF] px-4">
          Discover which platform offers the best clarity, authenticity, and guidance you're seeking.
        </p>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 font-medium">
          Love Reading – Tarot Reading – Medium Reading
        </p>
      </div>
      </div>
    </section>
  );
}