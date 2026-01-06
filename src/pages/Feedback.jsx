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
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-md p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Feedback</h3>
          <p className="text-gray-600">We value your input to improve our service</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Feedback Textarea */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="feedback">
              Your Feedback
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none">
                <FiMessageSquare className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="6"
                placeholder="Welcome to feedback! Please describe the problem in detail when providing feedback. For the best assistance, please attach a screenshot of the issue you encountered. We will process your feedback immediately!"
                required
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Rewards Info */}
          <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
                <FiGift className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Send helpful feedback</p>
                <p className="text-sm text-gray-600">Chance to win Mystery Rewards!</p>
              </div>
            </div>
            
            {/* Visual Reward Icon */}
            <div className="flex justify-center my-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <span className="text-white text-2xl">🎁</span>
                </div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  New!
                </div>
              </div>
            </div>
          </div>

          {/* Upload Hint */}
          <div className="mb-6 bg-gray-50 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 font-bold">💡</span>
              <p className="text-sm text-gray-600">
                For better assistance, you can attach screenshots by dragging and dropping images or pasting from clipboard
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
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
          <p className="text-xs text-gray-500 text-center mt-4">
            Your feedback is confidential and will only be used to improve our services.
          </p>
        </form>

        {/* Quick Tips */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-gray-700 mb-3">📝 Helpful Feedback Tips:</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✓</span>
              <span>Be specific about the issue you encountered</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✓</span>
              <span>Include steps to reproduce the problem</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✓</span>
              <span>Mention what you expected to happen</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-500">✓</span>
              <span>Attach screenshots when possible</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feedback;