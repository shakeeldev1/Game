import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaPhoneAlt, FaShieldAlt, FaEnvelope,
  FaCheckCircle, FaLock, FaKey
} from 'react-icons/fa';
import { FiZap, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';

const ForgotPage = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('phone');
  const [isSent, setIsSent] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden particles-bg">

      {/* Animated Background Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-[var(--color-neon-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[var(--color-neon-accent)]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative w-full max-w-sm animate-on-scroll">
        <div className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden">

          {/* Decorative */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[var(--color-neon-primary)]/20 to-transparent rounded-bl-full"></div>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl glass-card text-[var(--color-neon-text)]/60 hover:text-[var(--color-neon-primary)] mb-8 active:scale-90 transition-all"
          >
            <FaArrowLeft size={14} />
          </button>

          {!isSent ? (
            <>
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(240,165,0,0.4)] neon-glow">
                  <FaKey className="text-3xl text-[var(--color-neon-bg)]" />
                </div>
                <div>
                  <h2 className="text-3xl font-black text-[var(--color-neon-text)]">
                    Reset <span className="gradient-text">Password</span>
                  </h2>
                  <p className="text-sm font-medium text-[var(--color-neon-text)]/50 mt-1">Select recovery method</p>
                </div>
              </div>

              {/* Method Switcher */}
              <div className="glass-card p-1.5 rounded-xl mb-6 flex gap-1">
                <button
                  onClick={() => setMethod('phone')}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 ${method === 'phone'
                      ? 'btn-premium text-[var(--color-neon-bg)]'
                      : 'text-[var(--color-neon-text)]/50 hover:text-[var(--color-neon-text)]'
                    }`}
                >
                  <FiPhone /> Phone
                </button>
                <button
                  onClick={() => setMethod('email')}
                  className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 ${method === 'email'
                      ? 'btn-premium text-[var(--color-neon-bg)]'
                      : 'text-[var(--color-neon-text)]/50 hover:text-[var(--color-neon-text)]'
                    }`}
                >
                  <FiMail /> Email
                </button>
              </div>

              <form onSubmit={handleReset} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-[var(--color-neon-text)]/50 uppercase tracking-widest ml-1">
                    {method === 'phone' ? 'Registered Phone' : 'Registered Email'}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--color-neon-accent)] group-focus-within:text-[var(--color-neon-primary)] transition-colors">
                      {method === 'phone' ? <FaPhoneAlt size={14} /> : <FaEnvelope size={14} />}
                    </div>
                    <input
                      type={method === 'phone' ? 'tel' : 'email'}
                      required
                      placeholder={method === 'phone' ? 'Enter phone number' : 'Enter email address'}
                      className="w-full pl-11 pr-4 py-4 bg-[var(--color-neon-bg)]/50 text-[var(--color-neon-text)] placeholder-[var(--color-neon-text)]/30 rounded-xl border-2 border-[var(--color-neon-accent)]/20 focus:border-[var(--color-neon-primary)]/50 focus:shadow-[0_0_20px_rgba(240,165,0,0.2)] transition-all outline-none font-medium text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 btn-premium text-[var(--color-neon-bg)] font-black text-[11px] uppercase tracking-[0.2em] rounded-xl neon-glow flex items-center justify-center gap-2"
                >
                  <FiZap /> Send Recovery Link
                </button>
              </form>

              {/* Security Note */}
              <div className="mt-6 glass-card rounded-xl p-4 flex items-start gap-3">
                <FaShieldAlt className="text-[var(--color-neon-primary)] text-lg flex-shrink-0 mt-0.5" />
                <p className="text-[11px] text-[var(--color-neon-text)]/50 leading-relaxed">
                  A secure link will be sent to your registered {method}. Valid for 15 minutes.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center text-center py-4 animate-on-scroll">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-bounce">
                <FaCheckCircle size={48} />
              </div>
              <h2 className="text-2xl font-black text-[var(--color-neon-text)] mb-2">Check Your {method === 'phone' ? 'SMS' : 'Inbox'}</h2>
              <p className="text-sm font-medium text-[var(--color-neon-text)]/50 mb-8 leading-relaxed">
                We've sent a recovery {method === 'phone' ? 'code' : 'link'} to your registered {method}. Please check it.
              </p>

              <button
                onClick={() => navigate('/login')}
                className="w-full py-4 btn-premium text-[var(--color-neon-bg)] font-black text-[11px] uppercase tracking-[0.2em] rounded-xl neon-glow flex items-center justify-center gap-2"
              >
                Back to Login <FiArrowRight />
              </button>

              <button
                onClick={() => setIsSent(false)}
                className="mt-4 text-[10px] font-bold text-[var(--color-neon-text)]/40 uppercase tracking-widest hover:text-[var(--color-neon-primary)] transition-colors"
              >
                Didn't receive? Try again
              </button>
            </div>
          )}

          {!isSent && (
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/login')}
                className="text-[10px] font-black text-[var(--color-neon-text)]/40 uppercase tracking-[0.2em] hover:text-[var(--color-neon-primary)] transition-colors flex items-center gap-2 mx-auto"
              >
                <FaArrowLeft size={10} /> Return to Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;