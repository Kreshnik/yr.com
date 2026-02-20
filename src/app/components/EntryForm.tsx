import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MediumchatLogo } from '@/app/components/MediumchatLogo';
import { Heart, Clock } from 'lucide-react';

interface EntryFormProps {
  onSubmitSuccess: () => void;
}

export function EntryForm({ onSubmitSuccess }: EntryFormProps) {
  const [formData, setFormData] = useState({ firstName: '', email: '', nickname: '' });
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setLoading(true);
    try {
      await fetch('https://api.leadconnectorhq.com/hooks/WEBHOOK_ID_PLACEHOLDER', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          email: formData.email,
          nickname: formData.nickname
        })
      });
      onSubmitSuccess();
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="entry-form" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Heart className="absolute top-10 left-[5%] w-12 h-12 text-purple-200 fill-purple-200 opacity-30 animate-[float_8s_ease-in-out_infinite]" />
        <Heart className="absolute top-[20%] right-[6%] w-10 h-10 text-violet-200 fill-violet-200 opacity-25 animate-[float_11s_ease-in-out_infinite_1.5s]" />
        <Heart className="absolute top-[45%] left-[3%] w-9 h-9 text-purple-100 fill-purple-100 opacity-25 animate-[float_9s_ease-in-out_infinite_3s]" />
        <Heart className="absolute top-[50%] right-[4%] w-11 h-11 text-violet-100 fill-violet-100 opacity-20 animate-[float_13s_ease-in-out_infinite_0.5s]" />
        <Heart className="absolute bottom-24 left-[8%] w-10 h-10 text-purple-200 fill-purple-200 opacity-25 animate-[float_10s_ease-in-out_infinite_2s]" />
        <Heart className="absolute bottom-16 right-[10%] w-8 h-8 text-violet-200 fill-violet-200 opacity-20 animate-[float_12s_ease-in-out_infinite_4s]" />
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

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-purple-200 relative z-20">
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
            <div className="space-y-1">
              <label htmlFor="firstName" className="block text-sm sm:text-base text-gray-700 font-medium">
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
              <p className="text-xs text-gray-600">This is how we'll greet you if you're chosen.</p>
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-medium">
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
              <p className="text-xs text-gray-600">We only send your weekly drawing result and occasional spiritual insights. Unsubscribe anytime.</p>
            </div>

            <div className="space-y-1">
              <label htmlFor="nickname" className="block text-sm sm:text-base text-gray-700 font-medium">
                Your Reading Nickname *
              </label>
              <Input
                id="nickname"
                type="text"
                required
                placeholder="A name that feels sacred to you"
                className="w-full h-12 sm:h-14 text-base"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
              />
              <p className="text-xs text-gray-600">Winners are announced publicly by nickname only. Your full identity is always protected.</p>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#3B0099] via-[#4A00BF] to-[#A855F7] hover:from-[#2A0066] hover:via-[#3A0099] hover:to-[#9333EA] text-white h-12 sm:h-14 text-base sm:text-lg shadow-lg hover:shadow-xl md:hover:scale-105 transition-all duration-300"
            >
              {loading ? 'Entering...' : 'Claim Your Free Psychic Reading'}
            </Button>

            {submitError && (
              <p className="text-red-500 text-sm text-center">{submitError}</p>
            )}

            <p className="text-xs sm:text-sm text-gray-600 text-center leading-relaxed">
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
