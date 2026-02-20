import { useRef, useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Heart } from 'lucide-react';
import video1 from '@/assets/videos/video1.mp4';
import video2 from '@/assets/videos/video2.mp4';
import video3 from '@/assets/videos/video3.mp4';
import video4 from '@/assets/videos/video4.mp4';

const videoTestimonials = [
  {
    src: video1,
    name: 'Sarah M.',
    text: '"My Mediumchat tarot reading helped me see the spiritual purpose behind everything. I finally felt understood on a soul level."'
  },
  {
    src: video2,
    name: 'Jennifer L.',
    text: '"She helped me understand the divine timing of everything. For the first time in weeks, I felt held by something bigger than my fear."'
  },
  {
    src: video3,
    name: 'Maria T.',
    text: '"The reading gave me clarity I had been searching for. I felt a deep connection and left with renewed hope and direction."'
  },
  {
    src: video4,
    name: 'Rachel K.',
    text: '"I was skeptical at first, but the accuracy was undeniable. It was like speaking to someone who truly knew my soul."'
  }
];

const textTestimonials = [
  '"The insights about my soul path were beautiful."',
  '"The cosmic guidance helped me trust myself again."'
];

function VideoCard({ src, name, text }: { src: string; name: string; text: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden">
      <div className="relative aspect-video">
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/10"
            aria-label="Play video"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#4A00BF] rounded-full flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
            </div>
          </button>
        )}
      </div>
      <div className="p-6 sm:p-8">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">{text}</p>
        <p className="text-sm sm:text-base text-gray-500">— {name}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent mb-4">Stories From Kindred Spirits</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <VideoCard key={index} {...testimonial} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {textTestimonials.map((text, index) => (
            <div key={index} className="bg-[#4A00BF]/5 rounded-2xl p-6 sm:p-8">
              <div className="flex gap-3 sm:gap-4">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A00BF] flex-shrink-0 mt-1" fill="currentColor" />
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>

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
