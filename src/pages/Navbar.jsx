import React from 'react';
import logo from '../assets/download.png';
function Navbar() {
  return (
    <div className="bg-gray-50 py-2 sticky top-0 z-1000">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-lg shadow-sm">
            <nav className="flex items-center justify-between p-4">
              {/* Logo */}
              <a href="/" className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="Logo"
                  className="h-8 w-20"
                />
              </a>
              
              {/* Right side icons */}
              <div className="flex items-center space-x-6">
                {/* Search button */}
                <button 
                  className="text-[#f95c5c] hover:text-[#d94b4b] transition-colors" 
                  aria-label="Search" 
                  title="Search"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                {/* Messages/Inbox icon */}
                <a 
                  className="text-[#f95c5c] hover:text-[#d94b4b] transition-colors" 
                  href="#" 
                  aria-label="Inbox or Messages" 
                  title="Inbox or Messages"
                >
                  <svg width="21" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                
                {/* Download APK icon */}
                <a 
                  className="bg-[#f95c5c] text-white p-2 rounded-md hover:bg-[#d94b4b] transition-colors" 
                  href="pakgame.net/Downloads/Pak Game.apk" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Download Pak Game APK" 
                  title="Download Pak Game APK"
                >
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.4167 7.13344H14.5833V0.217255H5.83333V7.13344H0L10.2083 15.2023L20.4167 7.13344ZM0 17.5077V19.8131H20.4167V17.5077H0Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;