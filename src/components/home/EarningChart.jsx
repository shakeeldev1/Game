import React from 'react'

export default function EarningChart() {
    const winners = [
        {
            position: 2,
            name: 'Player 2',
            earnings: 'Rs-45,000',
            height: ' h-25'
        },
        {
            position: 1,
            name: 'Player 1',
            earnings: 'Rs-75,000',
            height: ' h-32'
        },
        {
            position: 3,
            name: 'Player 3',
            earnings: 'Rs-30,000',
            height: ' h-28'
        }
    ]

    return (
        <div className='bg-[var(--color-neon-bg)]/80 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(240,165,0,0.2)] p-2 hover:shadow-[0_0_40px_rgba(240,165,0,0.4)] transition-shadow duration-300 border border-[var(--color-neon-accent)]/30 ring-1 ring-[var(--color-neon-primary)]/20'>
            {/* Header */}
            <div className='mb-3 md:mb-6 text-center'>
                <h2 className='text-[12px]  font-bold text-transparent bg-clip-text bg-gradient-to-r text-white from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] flex items-center justify-center gap-2 '>
                    <span className="w-8 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-neon-primary)] to-transparent rounded-full"></span>
                    Top Earners
                    <span className="w-8 h-[2px] bg-gradient-to-l from-transparent via-[var(--color-neon-accent)] to-transparent rounded-full"></span>
                </h2>
                <p className='text-[7px]  font-bold text-[#F0A500] mt-1 uppercase tracking-[0.2em]'>Today's Leaderboard</p>
            </div>

            {/* Podium Chart */}
            <div className='flex items-end justify-center gap-2 mb-1'>
                {winners.map((winner) => (
                    <div
                        key={winner.position}
                        className='flex flex-col items-center group cursor-pointer'
                    >
                        {/* Medal Icon */}
                        <div className='text-lg transform group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(240,165,0,0.5)]'>
                            {winner.position === 1 ? '👑' : winner.position === 2 ? '🥈' : '🥉'}
                        </div>

                        {/* Winner Card */}
                        <div className={` flex flex-col gap-2
                            ${winner.position === 1 ? 'bg-gradient-to-b from-[var(--color-neon-primary)] to-[var(--color-neon-accent)] shadow-[0_0_30px_rgba(240,165,0,0.5)]' : ''}
                            ${winner.position === 2 ? 'bg-gradient-to-br from-[#232529] to-[#1A1C20] text-white shadow-[0_0_20px_rgba(192,192,192,0.3)]' : ''}
                            ${winner.position === 3 ? 'bg-gradient-to-br from-[#232529] to-[#1A1C20] text-white shadow-[0_0_20px_rgba(205,127,50,0.3)]' : ''}
                            ${winner.height} w-24  rounded-t-xl
                            flex flex-col justify-between items-center p-3 text-[var(--color-neon-bg)] transform
                            group-hover:scale-110 transition-all duration-300 border-t border-[var(--color-neon-bg)]/30 relative overflow-hidden
                        `}>
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700"></div>

                            <div className='text-center z-10 w-full'>
                                <div className='font-bold text-[12px]  drop-shadow-md truncate w-full'>{winner.name}</div>
                                <div className='text-[8px] font-bold mt-1 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm inline-block'>{winner.earnings}</div>
                            </div>

                            <div className='bg-white/20  backdrop-blur-md rounded-full w-7 h-7 flex items-center 
                                justify-center border border-white/40 shadow-inner z-10 mb-2'>
                                <img src="https://pakgame.net/pak_game/upload/avtar/man.png" alt="" className="drop-shadow-sm w-6 h-6 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Stats */}
            <div className='border-t border-[var(--color-neon-accent)]/30  grid grid-cols-3 gap-2 text-center'>
                <div className='group hover:bg-[var(--color-neon-primary)]/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-[var(--color-neon-accent)] group-hover:text-[var(--color-neon-primary)] transition-colors uppercase font-bold tracking-wider mb-1'>Winner</p>
                    <p className='font-bold text-[var(--color-neon-text)] text-[10px]'>Player 1</p>
                </div>
                <div className='group hover:bg-[var(--color-neon-primary)]/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-[var(--color-neon-accent)] group-hover:text-[var(--color-neon-primary)] transition-colors uppercase font-bold tracking-wider mb-1'>Total</p>
                    <p className='font-bold text-white drop-shadow-[0_0_5px_rgba(240,165,0,0.5)] text-[10px]'>Rs-150,000</p>
                </div>
                <div className='group hover:bg-[var(--color-neon-primary)]/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-[var(--color-neon-accent)] group-hover:text-[var(--color-neon-primary)] transition-colors uppercase font-bold tracking-wider mb-1'>Users</p>
                    <p className='font-bold text-white text-[10px]'>3</p>
                </div>
            </div>
        </div>
    )
}
