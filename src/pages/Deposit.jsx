import { RefreshCw, Info } from 'lucide-react'
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export default function Deposit() {
    const [amount, setAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(null);

    const amountOptions = [500, 1000, 2000, 3000, 4000, 5000];

    const rechargeInstructions = [
        "If the transfer time is up, please fill out the deposit form again",
        "The transfer amount must match the order you created, otherwise the money cannot be credited successfully.",
        "If you transfer the wrong amount, our company will not be responsible for lost amount!",
        "Note: do not cancel deposit order after the money has been transferred"
    ];

    const handleAmountClick = (value) => {
        setSelectedAmount(value);
        setAmount(value);
    };

    const [selectedBank, setSelectedBank] = useState(null);

    const banks = [
        {
            id: 1,
            name: "JazzCash",
            type: "mobile_wallet",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/JazzCash_Logo.svg/2560px-JazzCash_Logo.svg.png"
        },
        {
            id: 2,
            name: "Easypaisa",
            type: "mobile_wallet",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Easypaisa_logo.svg/2560px-Easypaisa_logo.svg.png"
        },
        {
            id: 3,
            name: "P2P Agent",
            type: "p2p_service",
            image: "https://cdn-icons-png.flaticon.com/512/4400/4400438.png"
        },
        {
            id: 4,
            name: "USDT",
            type: "crypto",
            image: "https://cryptologos.cc/logos/tether-usdt-logo.png"
        },
        {
            id: 5,
            name: "Bank System",
            type: "bank",
            image: "https://cdn-icons-png.flaticon.com/512/2784/2784459.png",
            note: "Coming Soon"
        },
        {
            id: 6,
            name: "UBL",
            type: "bank",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/United_Bank_Limited_logo.svg/1280px-United_Bank_Limited_logo.svg.png"
        }
    ];
    return (
        <div>
            <Link to="/safebox">
                <button
                    className="flex items-center gap-2  px-3 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px] md:text-xs uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] ml-3 hover:text-[#0f0f13] transition-all duration-300  mb-2"
                >
                    <FaArrowLeft className='text-[10px] md:text-xs' />
                    Back
                </button>
            </Link>

            <div className="relative overflow-hidden w-[90%] h-[30vh] mx-auto mt-2 rounded-2xl bg-gradient-to-br from-[var(--color-neon-bg)] to-[#2a2520] p-8 shadow-2xl mb-6 border border-[var(--color-neon-primary)]/20 card-hover-lift animate-on-scroll">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-primary)]/20 rounded-full blur-[50px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-neon-accent)]/20 rounded-full blur-[50px]" />

                <div className="relative z-10">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="md:text-[9px] text-[7px] font-black text-[#f4f4f4] uppercase tracking-[0.2em] mb-1">Available Balance</p>
                            <h2 className="text-[10px] md:text-lg font-black text-[var(--color-neon-text)] tracking-tighter gradient-text">Rs 0.00</h2>
                        </div>
                        <button className="h-8 w-8 md:w-10 md:h-10 rounded-md glass-card flex items-center justify-center text-[var(--color-neon-text)] hover:text-[var(--color-neon-primary)] hover:rotate-180 transition-all duration-700">
                            <RefreshCw className='text-[4px] md:text-xs' size={12} />
                        </button>
                    </div>


                </div>
                <div className=' flex gap-4 absolute bottom-2 right-4'>
                    <span>****</span>
                    <span>****</span>
                </div>
            </div>

            {/* Banks Section */}
            <div className="mt-8 w-[90%] mx-auto mb-2">
                <h3 className="text-[#F4F4F4] text-base md:text-lg font-bold mb-4">Select Payment Method</h3>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                    {banks.map((bank) => (
                        <button
                            key={bank.id}
                            onClick={() => setSelectedBank(bank.id)}
                            className={`relative p-2 rounded-lg border transition-all duration-300 ${selectedBank === bank.id
                                ? 'bg-[#F0A500]/10 border-[#F0A500] shadow-lg shadow-[#F0A500]/20'
                                : 'bg-[#1A1C20] border-[#CF7500]/50 hover:border-[#CF7500] hover:bg-[#1A1C20]/80'
                                }`}
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg overflow-hidden p-1">
                                    <img
                                        src={bank.image}
                                        alt={bank.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="text-[#F4F4F4] font-semibold text-xs md:text-sm">
                                    {bank.name}
                                </span>
                                {bank.note && (
                                    <span className="text-[#F0A500] text-[10px] font-medium">
                                        {bank.note}
                                    </span>
                                )}
                            </div>
                            {selectedBank === bank.id && (
                                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] flex items-center justify-center">
                                    <span className="text-[#0f0f13] text-xs font-bold">✓</span>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>


            <div className="w-[90%] mx-auto mt-6 mb-6">
                <h2 className="text-[#F4F4F4] text-lg md:text-xl font-bold mb-4">Deposit</h2>

                {/* Amount Boxes */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {amountOptions.map((value) => (
                        <button
                            key={value}
                            onClick={() => handleAmountClick(value)}
                            className={`h-12 rounded-md border font-bold text-sm md:text-base transition-all duration-300 ${selectedAmount === value
                                ? 'bg-[#F0A500] border-[#F0A500] text-[#1A1C20]'
                                : 'bg-[#1A1C20] border-[#CF7500]/50 text-[#F4F4F4] hover:border-[#CF7500]'
                                }`}
                        >
                            {value >= 1000 ? `${value / 1000}k` : value}
                        </button>
                    ))}
                </div>

                {/* Custom Amount Entry */}
                <div className="flex gap-3 mb-2">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-[#1A1C20] border border-[#CF7500]/50 text-[#F0A500] font-bold text-[12px] md:text-[13px]">
                        Rs
                    </div>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value);
                            setSelectedAmount(null);
                        }} className='flex-1 h-10 w-10 text-xs rounded-md px-2 bg-[#1A1C20] border border-[#CF7500]/50 text-[#F4F4F4] font-medium placeholder-[#F4F4F4]/40 focus:outline-none focus:border-[#F0A500] transition-colors duration-300 hover:border-[#CF7500]' />

                </div>
                <div className='mb-3'>
                    <button
                        type="submit"
                        className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#F0A500] to-[#CF7500] text-[#0f0f13] hover:font-bold cursor-pointer uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(240,165,0,0.5)] hover:scale-[1.02] transition-all duration-300 border border-[#F0A500]/50 mt-2"
                    >
                        Deposit Now
                    </button>
                </div>
                <div className='flex  gap-2'>
                    <h5 className="flex items-center gap-2 text-[#F4F4F4] font-bold mb-4 text-sm md:text-base">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500]">
                            <Info className="text-[#0f0f13]" size={14} />
                        </div>
                    </h5>
                    <h5> Recharge instructions</h5>
                </div>
                <ul className="space-y-3">
                    {rechargeInstructions.map((instruction, index) => (
                        <li
                            key={index}
                            className="flex gap-3 p-3 rounded-lg border border-[#CF7500]/30 bg-[#1A1C20]/30 hover:border-[#F0A500]/50 transition-colors duration-300"
                        >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] flex items-center justify-center text-[#0f0f13] font-bold text-xs">
                                {index + 1}
                            </span>
                            <span className="text-[#F4F4F4]/90 text-[12px] leading-relaxed">
                                {instruction}
                            </span>
                        </li>
                    ))}

                </ul>



            </div>
        </div>

    )
}
