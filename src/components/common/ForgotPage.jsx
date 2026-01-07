import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPhoneAlt,
  FaShieldAlt,
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa';

const ForgotPage = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState('phone'); // 'phone' or 'email'
  const [isSent, setIsSent] = useState(false);

  const handleReset = (e) => {
    e.preventDefault();
    // Logic to send reset code
    setIsSent(true);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 bg-[#f8fafc] overflow-hidden font-sans">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-cyan-100/40 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-fuchsia-100/40 rounded-full blur-[100px]"></div>

      <div className="relative w-full max-w-sm">
        <div className="bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white p-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 border border-slate-100 shadow-sm mb-8 active:scale-90 transition-all"
          >
            <FaArrowLeft size={14} />
          </button>

          {!isSent ? (
            <>
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <div className="w-16 h-16 bg-cyan-50 rounded-[1.5rem] flex items-center justify-center text-cyan-600 shadow-inner">
                  <FaShieldAlt size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight text-slate-900">
                    Reset <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-600">Access</span>
                  </h2>
                  <p className="text-sm font-medium text-slate-400 mt-1">Select a recovery method</p>
                </div>
              </div>

              {/* Method Switcher */}
              <div className="flex bg-slate-100/50 p-1 rounded-xl mb-6 border border-slate-100">
                <button 
                  onClick={() => setMethod('phone')}
                  className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${method === 'phone' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}
                >
                  Phone
                </button>
                <button 
                  onClick={() => setMethod('email')}
                  className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all ${method === 'email' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}
                >
                  Email
                </button>
              </div>

              <form onSubmit={handleReset} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    {method === 'phone' ? 'Registered Phone' : 'Registered Email'}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-300 group-focus-within:text-cyan-500 transition-colors">
                      {method === 'phone' ? <FaPhoneAlt size={14} /> : <FaEnvelope size={14} />}
                    </div>
                    <input
                      type={method === 'phone' ? 'tel' : 'email'}
                      required
                      placeholder={method === 'phone' ? 'Enter phone number' : 'Enter email address'}
                      className="w-full pl-11 pr-4 py-4 bg-slate-50/50 text-slate-900 rounded-2xl border border-slate-100 focus:border-cyan-500/50 focus:bg-white focus:ring-4 focus:ring-cyan-500/5 transition-all outline-none font-medium text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl bg-slate-900 hover:bg-slate-800 shadow-xl shadow-slate-200 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  Send Recovery Link
                </button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <FaCheckCircle size={40} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Check Your {method === 'phone' ? 'SMS' : 'Inbox'}</h2>
              <p className="text-sm font-medium text-slate-400 mb-8 leading-relaxed">
                We've sent a recovery {method === 'phone' ? 'code' : 'link'} to your registered {method}. Please check it to continue.
              </p>
              <button
                onClick={() => navigate('/login')}
                className="w-full py-4 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl bg-slate-900 active:scale-95 transition-all"
              >
                Back to Login
              </button>
            </div>
          )}

          {!isSent && (
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/login')}
                className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors"
              >
                Return to Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;