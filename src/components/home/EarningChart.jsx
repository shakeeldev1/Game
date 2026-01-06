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
        <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300'>
            {/* Header */}
            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-gray-800'>Top Earners</h2>
                <p className='text-sm text-gray-500 mt-1'>Today's Earning Chart</p>
            </div>

            {/* Podium Chart */}
            <div className='flex items-end justify-center gap-4 mb-6'>
                {winners.map((winner) => (
                    <div
                        key={winner.position}
                        className='flex flex-col items-center group cursor-pointer'
                    >
                        {/* Medal Icon */}
                        <div className='text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300'>
                            {winner.position === 1 ? '👑' : winner.position === 2 ? '🥈' : '🥉'}
                        </div>

                        {/* Winner Card */}
                        <div className={`${winner.gradient} ${winner.height} w-24 sm:w-28 rounded-xl shadow-lg 
                            flex flex-col justify-around items-center p-4 text-white transform 
                            group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                            <div className='text-center'>
                                <div className='font-bold text-sm'>{winner.name}</div>
                                <div className='text-xs font-semibold mt-2 mb-3'>{winner.earnings}</div>
                            </div>
                            <div className='bg-white bg-opacity-30 rounded-full w-12 h-12 flex items-center 
                                justify-center font-bold text-xl border-2 border-white'>
                                <img src="https://pakgame.net/pak_game/upload/avtar/man.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer Stats */}
            <div className='border-t pt-4 grid grid-cols-3 gap-4 text-center'>
                <div className='group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300'>
                    <p className='text-sm text-gray-600 group-hover:text-blue-600'>Winner</p>
                    <p className='font-bold text-gray-800'>Player 1</p>
                </div>
                <div className='group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300'>
                    <p className='text-sm text-gray-600 group-hover:text-blue-600'>Total Earnings</p>
                    <p className='font-bold text-gray-800'>Rs-150,000</p>
                </div>
                <div className='group hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300'>
                    <p className='text-sm text-gray-600 group-hover:text-blue-600'>Participants</p>
                    <p className='font-bold text-gray-800'>3</p>
                </div>
            </div>
        </div>
    )
}
