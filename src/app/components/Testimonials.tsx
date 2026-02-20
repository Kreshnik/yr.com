import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import { Heart, Star } from 'lucide-react';
import { MovingTestimonials } from '@/app/components/MovingTestimonials';
import video1 from '@/assets/videos/video1.mp4';
import video2 from '@/assets/videos/video2.mp4';
import video3 from '@/assets/videos/video3.mp4';
import video4 from '@/assets/videos/video4.mp4';
import thumb1 from '@/assets/thumbnails/thumb1.jpg';
import thumb2 from '@/assets/thumbnails/thumb2.jpg';
import thumb3 from '@/assets/thumbnails/thumb3.jpg';
import thumb4 from '@/assets/thumbnails/thumb4.jpg';

const videoTestimonials = [
  {
    src: video1,
    poster: thumb1,
    name: 'Sarah M.',
    text: '"My Mediumchat tarot reading helped me see the spiritual purpose behind everything. I finally felt understood on a soul level."'
  },
  {
    src: video2,
    poster: thumb2,
    name: 'Jennifer L.',
    text: '"She helped me understand the divine timing of everything. For the first time in weeks, I felt held by something bigger than my fear."'
  },
  {
    src: video3,
    poster: thumb3,
    name: 'Maria T.',
    text: '"The reading gave me clarity I had been searching for. I felt a deep connection and left with renewed hope and direction."'
  },
  {
    src: video4,
    poster: thumb4,
    name: 'Rachel K.',
    text: '"I was skeptical at first, but the accuracy was undeniable. It was like speaking to someone who truly knew my soul."'
  }
];


function StarRow() {
  return (
    <div className="flex gap-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#4A00BF] text-[#4A00BF]" />
      ))}
    </div>
  );
}

function VideoCard({ src, poster, name, text }: { src: string; poster: string; name: string; text: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <motion.div
      className="bg-gray-50 rounded-2xl overflow-hidden"
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(74,0,191,0.10)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="relative aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/10 cursor-pointer"
            aria-label="Play video"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#4A00BF] rounded-full flex items-center justify-center shadow-lg"
            >
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
            </motion.div>
          </button>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <StarRow />
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">{text}</p>
        <p className="text-sm sm:text-base text-gray-600">— {name}</p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-4">Stories From Kindred Spirits</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
            >
              <VideoCard {...testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mb-8 sm:mb-12 -mx-4 sm:-mx-6 lg:-mx-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <MovingTestimonials />
        </motion.div>

        {/* Social proof anchor */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-3 bg-purple-50 rounded-2xl px-6 py-4">
            <Heart className="w-5 h-5 text-[#A855F7]" fill="currentColor" />
            <p className="text-sm sm:text-base text-gray-600">Joined by <strong className="text-[#4A00BF]">49,598 seekers</strong> who trusted the process</p>
          </div>
        </motion.div>

        <div className="text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white px-6 sm:px-12 text-base sm:text-lg h-12 sm:h-14 shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('entry-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Claim Your Free Psychic Reading
          </Button>
        </div>
      </div>
    </section>
  );
}
