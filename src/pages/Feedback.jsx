import React, { useState } from 'react';
import { FiMail, FiMessageSquare, FiSend, FiGift } from 'react-icons/fi';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your feedback!');
      setEmail('');
      setFeedback('');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto min-h-screen p-4 pb-24">
      <div className="bg-[#1a1033]/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/5 p-6 relative overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px]"></div>

        {/* Header */}
        <div className="text-center mb-8 relative z-10">
          <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">Feedback</h3>
          <p className="text-gray-400 text-sm">We value your input to improve our service</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10">
          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1" htmlFor="email">
              Your Email
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full pl-10 pr-3 py-3.5 bg-[#0f0720]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Feedback Textarea */}
          <div className="mb-6">
            <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-2 ml-1" htmlFor="feedback">
              Your Feedback
            </label>
            <div className="relative group">
              <div className="absolute top-3.5 left-3 pointer-events-none">
                <FiMessageSquare className="h-5 w-5 text-gray-500 group-focus-within:text-fuchsia-400 transition-colors" />
              </div>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="6"
                placeholder="Describe your issue or suggestion..."
                required
                className="w-full pl-10 pr-3 py-3 bg-[#0f0720]/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 resize-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Rewards Info */}
          <div className="mb-6 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/20 rounded-xl p-4">
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                <FiGift className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-cyan-400">Send helpful feedback</p>
                <p className="text-xs text-gray-400 mt-0.5">Chance to win Mystery Rewards!</p>
              </div>
            </div>

            {/* Visual Reward Icon */}
            <div className="flex justify-center my-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                  <span className="text-white text-3xl">🎁</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full animate-bounce shadow-md">
                  New!
                </div>
              </div>
            </div>
          </div>

          {/* Upload Hint */}
          <div className="mb-6 bg-white/5 border border-white/5 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <span className="text-yellow-400 font-bold text-lg">💡</span>
              <p className="text-xs text-gray-400 leading-relaxed">
                For better assistance, you can attach screenshots by dragging and dropping images or pasting from clipboard
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3.5 rounded-xl font-bold tracking-wide hover:from-cyan-500 hover:to-blue-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-400/20"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <FiSend className="h-5 w-5" />
                <span>Submit Feedback</span>
              </>
            )}
          </button>

          {/* Privacy Note */}
          <p className="text-[10px] text-gray-600 text-center mt-4">
            Your feedback is confidential and will only be used to improve our services.
          </p>
        </form>

        {/* Quick Tips */}
        <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
          <h4 className="font-bold text-gray-300 mb-4 text-sm uppercase tracking-wide">📝 Helpful Feedback Tips:</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Be specific about the issue you encountered</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Include steps to reproduce the problem</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Mention what you expected to happen</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Attach screenshots when possible</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedback;