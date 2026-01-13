import React, { useState, useEffect } from 'react'
import { FaArrowLeft, FaWallet } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function WithDraw() {
    const [balance, setBalance] = useState(0.00)
    const [selectedBank, setSelectedBank] = useState('')
    const [amount, setAmount] = useState('')

    useEffect(() => {
        AOS.init({ duration: 700, once: true })
    }, [])

    const banks = [
        'Select Bank',
        'Bank of America',
        'Chase Bank',
        'Wells Fargo',
        'Citibank',
        'Deutsche Bank'
    ]

    const withdrawalConditions = [
        'Need to bet Rs0.00 to be able to withdraw',
        'Minimum withdrawal amount: Rs0.00',
        'Withdraw time 00:00 23:59',
        'Inday Remaining Withdrawal Times: 3',
        'Withdrawal amount range Rs500.00-Rs1,000,000.00',
        'Please confirm your beneficial amount information before withdrawing. If your information is incorrect, our company will not be liable for the amount of loss',
        'If your beneficial information is incorrect, please contact customer services'
    ]

    const handleWithdraw = (e) => {
        e.preventDefault()
        if (!selectedBank || selectedBank === 'Select Bank' || !amount) {
            alert('Please fill all fields')
            return
        }
        console.log('Withdrawal request:', { bank: selectedBank, amount })
    }

    return (
        <div className="min-h-screen p-4 md:p-8 pb-24">
            <Link to='/account'>
                <button
                    className="flex items-center gap-1 px-3 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#F0A500] hover:to-[#ff8c00] hover:text-[#0f0f13] transition-all duration-300 mb-6"
                >
                    <FaArrowLeft className='text-xs' />
                    Back
                </button>
            </Link>

            {/* Main Container */}
            <div className="w-full max-w-2xl mx-auto ">
                {/* Balance Card */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-primary)]/20 rounded-full blur-[50px]" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-neon-accent)]/20 rounded-full blur-[50px]" />
                <div
                    className="relative mb-8 animate-on-scroll"
                    data-aos="fade-up"
                >
                    <div className="glass-card rounded-lg p-6 md:p-8 relative overflow-hidden shadow-xl border border-[#CF7500]/30">
                        {/* Decorative corner glow */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#F0A500]/20 to-transparent rounded-bl-full"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-neon-primary)]/20 rounded-full blur-[50px]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--color-neon-accent)]/20 rounded-full blur-[50px]" />
                        {/* Balance Section */}
                        <div className="relative z-10">
                            <p className="text-[#F4F4F4] text-[13px]  tracking-widest font-semibold">Your Balance</p>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-[12px] md:text-[13px] font-black text-[#F0A500] drop-shadow-lg">
                                    Rs {balance.toFixed(2)}
                                </h2>
                                <div className="p-4 rounded-full bg-[#F0A500]/10 border border-[#F0A500]/30">
                                    <FaWallet className="text-[12px] md:text-[13px] text-[#F0A500]" />
                                </div>
                            </div>
                        </div>

                        <div className=' flex gap-4 absolute bottom-2 right-4'>
                            <span>****</span>
                            <span>****</span>
                        </div>
                    </div>
                </div>

                {/* Withdrawal Form Card */}
                <div
                    className="relative mb-8 animate-on-scroll"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="glass-card rounded-lg p-6 md:p-8 relative overflow-hidden shadow-xl border border-[#CF7500]/30">
                        {/* Decorative corner glow */}
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#CF7500]/20 to-transparent rounded-tr-full"></div>

                        <form onSubmit={handleWithdraw} className="relative z-10 space-y-6">
                            {/* Bank Selection */}
                            <div>
                                <label className="block text-[#F4F4F4] text-[12px] md:text-[13px] font-semibold uppercase tracking-widest mb-2">
                                    Select Bank
                                </label>
                                <select
                                    value={selectedBank}
                                    onChange={(e) => setSelectedBank(e.target.value)}
                                    className="w-full text-xs px-4 py-3 rounded-md bg-[#1A1C20] border border-[#CF7500]/50 text-[#F4F4F4] font-medium focus:outline-none focus:border-[#F0A500] transition-colors duration-300 hover:border-[#CF7500] cursor-pointer"
                                >
                                    {banks.map((bank, index) => (
                                        <option key={index} value={bank}>
                                            {bank}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Amount Input */}
                            <div>
                                <label className="block text-[#F4F4F4] text-[12px] md:text-[13px] font-semibold uppercase tracking-widest mb-2">
                                    Withdrawal Amount
                                </label>
                                <div className="flex gap-3">
                                    <div className="flex items-center justify-center h-10 w-10  rounded-md bg-[#1A1C20] border border-[#CF7500]/50 text-[#F0A500] font-bold text-[12px] md:text-[13px]">
                                        Rs
                                    </div>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="Enter amount"
                                        className="flex-1 h-10 w-10 text-xs rounded-md px-2 bg-[#1A1C20] border border-[#CF7500]/50 text-[#F4F4F4] font-medium placeholder-[#F4F4F4]/40 focus:outline-none focus:border-[#F0A500] transition-colors duration-300 hover:border-[#CF7500]"
                                    />
                                </div>
                            </div>

                            {/* Withdraw Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-[#F0A500] to-[#CF7500] text-[#0f0f13] hover:font-bold cursor-pointer uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(240,165,0,0.5)] hover:scale-[1.02] transition-all duration-300 border border-[#F0A500]/50 mt-2"
                            >
                                Withdraw Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Withdrawal Conditions */}
                <div
                    className="relative animate-on-scroll"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="glass-card rounded-lg p-6 md:p-8 relative overflow-hidden shadow-xl border border-[#CF7500]/30">
                        {/* Decorative corner glow */}
                        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#CF7500]/20 to-transparent rounded-br-full"></div>

                        <div className="relative z-10">
                            <h3 className="text-[#F0A500] text-[12px] font-black uppercase tracking-widest mb-6">
                                Withdrawal Terms & Conditions
                            </h3>

                            <ul className="space-y-3">
                                {withdrawalConditions.map((condition, index) => (
                                    <li
                                        key={index}
                                        className="flex  gap-3 p-3 rounded-lg border border-[#CF7500]/30 bg-[#1A1C20]/30 hover:border-[#F0A500]/50 transition-colors duration-300"
                                    >
                                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-[#F0A500] to-[#CF7500] flex items-center justify-center text-[#0f0f13] font-bold text-xs">
                                            {index + 1}
                                        </span>
                                        <span className="text-[#F4F4F4]/90 text-[12px] leading-relaxed">
                                            {condition}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
