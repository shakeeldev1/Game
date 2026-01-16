import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function DepositHistory() {
    return (
        <div>
            <Link to="/deposit">
                <button
                    className="flex items-center gap-2  px-2 py-2 bg-gradient-to-br from-[#232529] to-[#1A1C20] border border-[#CF7500] rounded-md text-[#f4f4f4] text-xs font-bold text-[10px]  uppercase tracking-wider hover:bg-gradient-to-r hover:from-[#ffd700] hover:to-[#ff8c00] ml-3 hover:text-[#0f0f13] transition-all duration-300  mb-2"
                >
                    <FaArrowLeft className='text-[10px] ' />
                    Back
                </button>
            </Link>

            <div className='mx-auto w-[90%]'>
                <h2 className='text-white font-bold text-[12px] mb-4 mt-3'>Deposit History</h2>
                <div className='bg-[#1A1C20] p-2 rounded border border-[#CF7500]/50'>
                    <p className='text-[#F4F4F4] text-[10px]'>You have no deposit history yet.</p>
                </div>


                <div className=' bg-white flex items-center justify-center rounded w-full h-[40vh]'>
                    <img src="https://cdn-icons-png.freepik.com/512/15573/15573868.png" alt="missing" className='h-full' />
                </div>
            </div>


        </div>
    )
}
