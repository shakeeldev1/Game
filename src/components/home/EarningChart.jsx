import React from 'react'

export default function EarningChart() {
    const winners = [
        {
            position: 2,
            name: 'Player 2',
            earnings: 'Rs-45,000',
            gradient: 'bg-gradient-to-tr from-cyan-400 to-blue-500',
            height: 'h-32'
        },
        {
            position: 1,
            name: 'Player 1',
            earnings: 'Rs-75,000',
            gradient: 'bg-gradient-to-tr from-yellow-400 to-orange-500',
            height: 'h-42'
        },
        {
            position: 3,
            name: 'Player 3',
            earnings: 'Rs-30,000',
            gradient: 'bg-gradient-to-tr from-purple-400 to-pink-500',
            height: 'h-32'
        }
    ]

    return (
        <div className='bg-[#1a1033]/60 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 hover:shadow-[0_0_40px_rgba(124,58,237,0.2)] transition-shadow duration-300 border border-white/5 ring-1 ring-purple-500/20'>
            {/* Header */}
            <div className='mb-6 text-center'>
                <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 flex items-center justify-center gap-2'>
                    <span className="w-8 h-[2px] bg-gradient-to-r from-transparent to-fuchsia-500"></span>
                    Top Earners
                    <span className="w-8 h-[2px] bg-gradient-to-l from-transparent to-cyan-500"></span>
                </h2>
                <p className='text-[10px] font-bold text-purple-300/80 mt-1 uppercase tracking-[0.2em]'>Today's Leaderboard</p>
            </div>

            {/* Podium Chart */}
            <div className='flex items-end justify-center gap-4 mb-8'>
                {winners.map((winner) => (
                    <div
                        key={winner.position}
                        className='flex flex-col items-center group cursor-pointer'
                    >
                        {/* Medal Icon */}
                        <div className='text-4xl mb-3 transform group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]'>
                            {winner.position === 1 ? '👑' : winner.position === 2 ? '🥈' : '🥉'}
                        </div>

                        {/* Winner Card */}
                        <div className={`
                            ${winner.position === 1 ? 'bg-gradient-to-b from-yellow-500 to-orange-600 shadow-[0_0_30px_rgba(251,191,36,0.4)]' : ''}
                            ${winner.position === 2 ? 'bg-gradient-to-b from-slate-300 to-slate-500 shadow-[0_0_20px_rgba(203,213,225,0.3)]' : ''}
                            ${winner.position === 3 ? 'bg-gradient-to-b from-amber-700 to-orange-900 shadow-[0_0_20px_rgba(146,64,14,0.3)]' : ''}
                            ${winner.height} w-24 sm:w-28 rounded-t-xl
                            flex flex-col justify-between items-center p-3 text-white transform 
                            group-hover:scale-105 transition-all duration-300 border-t border-white/30 relative overflow-hidden
                        `}>
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700"></div>

                            <div className='text-center z-10 w-full'>
                                <div className='font-bold text-sm drop-shadow-md truncate w-full'>{winner.name}</div>
                                <div className='text-[10px] font-bold mt-1 bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm inline-block'>{winner.earnings}</div>
                            </div>

                            <div className='bg-white/20 backdrop-blur-md rounded-full w-10 h-10 flex items-center 
                                justify-center border border-white/40 shadow-inner z-10 mb-2'>
                                <img src="https://pakgame.net/pak_game/upload/avtar/man.png" alt="" className="drop-shadow-sm w-8 h-8 rounded-full" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Stats */}
            <div className='border-t border-purple-500/20 pt-4 grid grid-cols-3 gap-2 text-center'>
                <div className='group hover:bg-purple-500/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-purple-400 group-hover:text-cyan-400 transition-colors uppercase font-bold tracking-wider mb-1'>Winner</p>
                    <p className='font-bold text-gray-200 text-sm'>Player 1</p>
                </div>
                <div className='group hover:bg-purple-500/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-purple-400 group-hover:text-cyan-400 transition-colors uppercase font-bold tracking-wider mb-1'>Total</p>
                    <p className='font-bold text-green-400 text-sm drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]'>Rs-150,000</p>
                </div>
                <div className='group hover:bg-purple-500/10 p-2 rounded-lg transition-colors duration-300'>
                    <p className='text-[10px] text-purple-400 group-hover:text-cyan-400 transition-colors uppercase font-bold tracking-wider mb-1'>Users</p>
                    <p className='font-bold text-gray-200 text-sm'>3</p>
                </div>
            </div>
        </div>
    )
}
