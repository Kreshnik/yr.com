import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import { Heart, Clock } from 'lucide-react';

interface EntryFormProps {
  onSubmitSuccess: () => void;
}

export function EntryForm({ onSubmitSuccess }: EntryFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    nickname: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onSubmitSuccess();
  };

  return (
    <section id="entry-form" className="pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, -25px) rotate(-3deg); }
          75% { transform: translate(-15px, -10px) rotate(4deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-12px, -20px) rotate(-4deg); }
          66% { transform: translate(8px, -15px) rotate(3deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(15px, -10px) rotate(6deg); }
          40% { transform: translate(5px, -25px) rotate(-2deg); }
          60% { transform: translate(-10px, -20px) rotate(4deg); }
          80% { transform: translate(-8px, -8px) rotate(-3deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-18px, -18px) rotate(-5deg); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
      `}</style>
      
      {/* Fondo decorativo de corazones */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-10 left-[5%] w-12 h-12 text-purple-200 fill-purple-200 opacity-35 animate-float1" />
        <Heart className="absolute top-16 right-[8%] w-10 h-10 text-violet-200 fill-violet-200 opacity-30 animate-float2" />
        <Heart className="absolute top-32 left-[15%] w-14 h-14 text-purple-100 fill-purple-100 opacity-25 animate-float3" />
        <Heart className="absolute top-20 right-[20%] w-8 h-8 text-violet-100 fill-violet-100 opacity-32 animate-float4" />
        <Heart className="absolute top-[8%] left-[8%] w-10 h-10 text-purple-200 fill-purple-200 opacity-28 animate-float2" />
        <Heart className="absolute top-[10%] right-[12%] w-11 h-11 text-violet-100 fill-violet-100 opacity-28 animate-float1" />
        <Heart className="absolute top-[12%] left-[18%] w-9 h-9 text-purple-100 fill-purple-100 opacity-30 animate-float4" />
        <Heart className="absolute top-[15%] right-[5%] w-13 h-13 text-violet-200 fill-violet-200 opacity-25 animate-float3" />
        <Heart className="absolute top-[18%] left-[25%] w-10 h-10 text-purple-200 fill-purple-200 opacity-32 animate-float2" />
        <Heart className="absolute top-[22%] right-[15%] w-12 h-12 text-violet-100 fill-violet-100 opacity-30 animate-float1" />
        <Heart className="absolute top-[28%] left-[3%] w-9 h-9 text-purple-100 fill-purple-100 opacity-28 animate-float3" />
        <Heart className="absolute top-[32%] right-[25%] w-11 h-11 text-violet-200 fill-violet-200 opacity-30 animate-float4" />
        <Heart className="absolute top-[38%] left-[22%] w-8 h-8 text-purple-200 fill-purple-200 opacity-32 animate-float1" />
        <Heart className="absolute top-[42%] right-[6%] w-13 h-13 text-violet-100 fill-violet-100 opacity-25 animate-float2" />
        <Heart className="absolute top-[48%] left-[12%] w-10 h-10 text-purple-100 fill-purple-100 opacity-30 animate-float4" />
        <Heart className="absolute top-[52%] right-[18%] w-9 h-9 text-violet-200 fill-violet-200 opacity-28 animate-float3" />
        <Heart className="absolute top-[58%] left-[28%] w-11 h-11 text-purple-200 fill-purple-200 opacity-32 animate-float1" />
        <Heart className="absolute top-[62%] right-[10%] w-12 h-12 text-violet-100 fill-violet-100 opacity-28 animate-float2" />
        <Heart className="absolute top-[68%] left-[6%] w-10 h-10 text-purple-100 fill-purple-100 opacity-30 animate-float4" />
        <Heart className="absolute top-[72%] right-[22%] w-14 h-14 text-violet-200 fill-violet-200 opacity-25 animate-float3" />
        <Heart className="absolute top-[78%] left-[20%] w-9 h-9 text-purple-200 fill-purple-200 opacity-30 animate-float1" />
        <Heart className="absolute bottom-32 left-[15%] w-11 h-11 text-violet-100 fill-violet-100 opacity-30 animate-float2" />
        <Heart className="absolute bottom-28 right-[8%] w-10 h-10 text-purple-100 fill-purple-100 opacity-28 animate-float4" />
        <Heart className="absolute bottom-20 right-[20%] w-13 h-13 text-violet-200 fill-violet-200 opacity-25 animate-float3" />
        <Heart className="absolute bottom-16 left-[10%] w-12 h-12 text-purple-200 fill-purple-200 opacity-32 animate-float1" />
        <Heart className="absolute bottom-24 right-[14%] w-8 h-8 text-violet-100 fill-violet-100 opacity-32 animate-float2" />
      </div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <MediumchatLogo className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent font-bold text-center">
            Your Heart Already Knows
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            You've read this far because your soul is ready for answers.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
            Maybe you're wondering if this person is your twin flame. Maybe you're seeking clarity about divine timing.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Whatever your soul is asking, the answer is waiting.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg relative z-20">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">
              <strong className="text-[#4A00BF]">10 beautiful souls</strong> will receive a free reading this Monday. And every Monday after.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Right now, your chances have never been bigger.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#4A00BF]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              <p className="text-lg sm:text-xl font-bold">
                It takes just <span className="bg-gradient-to-r from-[#4A00BF] to-[#A855F7] bg-clip-text text-transparent">30 seconds</span> to enter
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm sm:text-base text-gray-700">
                First Name *
              </label>
              <Input
                id="firstName"
                type="text"
                required
                placeholder="Your first name"
                className="w-full h-12 sm:h-14 text-base"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm sm:text-base text-gray-700">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full h-12 sm:h-14 text-base"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="nickname" className="block text-sm sm:text-base text-gray-700">
                Nickname *
              </label>
              <Input
                id="nickname"
                type="text"
                required
                placeholder="A nickname that feels right to you"
                className="w-full h-12 sm:h-14 text-base"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white h-12 sm:h-14 text-base sm:text-lg shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
            >
              Claim Your Free Psychic Reading
            </Button>

            <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
              No credit card required. Your privacy is sacred to us.
            </p>
          </form>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-[#4A00BF]/5 rounded-2xl p-6 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <strong className="text-[#4A00BF]">P.S.</strong> If you're still here, your intuition is speaking to you. You deserve to understand what's unfolding in your love life. You deserve clarity. This sacred opportunity is here for you now. Trust what you're feeling. Enter now, while this gentle door is open.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}