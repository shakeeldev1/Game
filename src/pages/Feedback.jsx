import React, { useState } from 'react';
import { FiMail, FiMessageSquare, FiSend, FiGift, FiStar, FiHeart } from 'react-icons/fi';
import { FaRocket, FaGem } from 'react-icons/fa';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your feedback!');
      setEmail('');
      setFeedback('');
      setRating(0);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-24 particles-bg">
      <div className="glass-card rounded-3xl shadow-2xl p-6 relative overflow-hidden animate-on-scroll">

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-neon-accent)]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }}></div>

        {/* Header with Icon */}
        <div className="text-center mb-8 relative z-10">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] rotate-3 hover:rotate-0 transition-transform duration-500">
            <FiMessageSquare className="text-3xl text-[var(--color-neon-bg)]" />
          </div>
          <h3 className="text-3xl font-black gradient-text mb-2">Share Feedback</h3>
          <p className="text-[var(--color-neon-text)]/60 text-sm">Help us improve your experience</p>
        </div>

        {/* Rating Stars */}
        <div className="mb-6 relative z-10">
          <p className="text-[var(--color-neon-text)]/60 text-xs font-bold uppercase tracking-wider mb-3 text-center">Rate Your Experience</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-3xl transition-all duration-300 hover:scale-125 ${rating >= star
                    ? 'text-[var(--color-neon-primary)] drop-shadow-[0_0_10px_rgba(240,165,0,0.5)]'
                    : 'text-[var(--color-neon-text)]/20 hover:text-[var(--color-neon-primary)]/50'
                  }`}
              >
                <FiStar className={rating >= star ? 'fill-current' : ''} />
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 stagger-children">
          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-[var(--color-neon-text)]/60 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
              Your Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full pl-12 pr-4 py-4 bg-[var(--color-neon-bg)]/50 border-2 border-[var(--color-neon-accent)]/20 rounded-xl text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 focus:outline-none focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all duration-300"
              />
            </div>
          </div>

          {/* Feedback Textarea */}
          <div className="mb-6">
            <label className="block text-[var(--color-neon-text)]/60 text-xs font-bold uppercase tracking-wider mb-2 ml-1">
              Your Feedback
            </label>
            <div className="relative group">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="5"
                placeholder="Tell us what you think..."
                required
                className="w-full px-4 py-4 bg-[var(--color-neon-bg)]/50 border-2 border-[var(--color-neon-accent)]/20 rounded-xl text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 focus:outline-none focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] resize-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Rewards Card */}
          <div className="mb-6 gradient-border rounded-2xl p-4 card-hover-lift">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <FaGem className="text-2xl text-[var(--color-neon-bg)]" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-[var(--color-neon-primary)] flex items-center gap-2">
                  <FaRocket /> Earn Rewards!
                </p>
                <p className="text-xs text-[var(--color-neon-text)]/60">Get bonus coins for helpful feedback</p>
              </div>
              <div className="text-3xl animate-bounce">🎁</div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-premium text-[var(--color-neon-bg)] py-4 rounded-xl font-bold tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 neon-glow"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[var(--color-neon-bg)] border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FiSend className="h-5 w-5" />
                <span>Submit Feedback</span>
              </>
            )}
          </button>
        </form>

        {/* Quick Tips */}
        <div className="mt-8 pt-6 border-t border-[var(--color-neon-accent)]/20 relative z-10">
          <h4 className="font-bold text-[var(--color-neon-text)]/80 mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
            <FiHeart className="text-[var(--color-neon-primary)]" />
            Pro Tips
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {['Be specific', 'Add details', 'Share ideas', 'Report bugs'].map((tip, i) => (
              <div key={i} className="glass-card rounded-lg p-3 text-center text-xs text-[var(--color-neon-text)]/70 card-hover-lift">
                ✓ {tip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;