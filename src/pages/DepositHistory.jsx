import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function DepositHistory() {
  // Sample transactions; replace with real data source
  const transactions = [
    {
      type: 'Deposit',
      merchant: 'Billion Digit',
      amount: 10.0,
      processor: 'Wallets Traders',
      datetime: '03/01/2026 11:50',
      orderNumber: '—',
      cnicLast6: '3410132509565',
    },
    {
      type: 'Deposit',
      merchant: 'Prime Wallet',
      amount: 250.0,
      processor: 'Wallets Traders',
      datetime: '05/01/2026 09:22',
      orderNumber: 'ORD-10293',
      cnicLast6: '123456',
    },
  ]

  const totalRs = transactions.reduce((sum, t) => sum + (t.amount || 0), 0)

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      {/* Page Title */}
      <Link to="/deposit">
        <button
          className="flex items-center gap-2  px-2 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px]  uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] ml-3 hover:text-[#0f0f13] transition-all duration-300  mb-2"
        >
          <FaArrowLeft className='text-[10px] ' />
          Back
        </button>
      </Link>
      <h1 className="text-sm md:text-base font-bold text-[var(--color-neon-text)] mb-4">
        Total Transactions = Rs <span className="text-[var(--color-neon-primary)]">{totalRs.toFixed(2)}</span>
      </h1>

      {/* Transaction Cards */}
      <div className="grid grid-cols-1  gap-4">
        {transactions.map((tx, idx) => (
          <div
            key={idx}
            className="glass-card rounded-md p-4 border border-[var(--color-neon-accent)]/20 shadow-[0_0_12px_rgba(240,165,0,0.08)]"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between mb-3">
              <Link to="/deposit">
                <span className="text-xs md:text-sm font-bold px-3 py-1 rounded-md bg-[var(--color-neon-bg)]/60 text-[var(--color-neon-text)] border border-[var(--color-neon-accent)]/30">
                  {tx.type}
                </span>
              </Link>
              <span className="text-xs md:text-sm font-bold text-[var(--color-neon-primary)]">
                {tx.merchant}
              </span>
            </div>

            <div className="border-t border-[var(--color-neon-accent)]/20 my-2" />

            {/* Table-like rows */}
            <div className="space-y-2">
              <Row label="Deposit Amount" value={`Rs${tx.amount?.toFixed(2)}`} highlight />
              <Row label="Processor" value={tx.processor} />
              <Row label="Date & Time" value={tx.datetime} />
              <Row label="Order number" value={tx.orderNumber || '—'} />
              <Row label="CNIC last 6 digits" value={tx.cnicLast6 || '—'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Row({ label, value, highlight = false }) {
  return (
    <div className="grid grid-cols-2 items-center">
      <span className="text-[11px] md:text-xs font-semibold text-[var(--color-neon-text)]/70">
        {label}
      </span>
      <span
        className={`${highlight
          ? 'text-[var(--color-neon-primary)]'
          : 'text-[var(--color-neon-text)]'
          } text-[11px] md:text-xs font-bold text-right`}
      >
        {value}
      </span>
    </div>
  )
}
