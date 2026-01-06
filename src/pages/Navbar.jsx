import React from 'react'
import { FaDownload, FaSearch } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'

export default function Navbar() {
    return (
        <div className='p-2 sticky top-0 bg-green-300 z-1000'>
            <div className='flex justify-between items-center'>
                <h1>Navbar</h1>
                <div className='flex gap-10'>
                    <FaSearch />
                    <FaMessage />
                    <FaDownload />
                </div>
            </div>
        </div>
    )
}
