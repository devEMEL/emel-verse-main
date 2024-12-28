// import React from 'react';
// import { Plus, Wallet, User, Grid } from 'lucide-react';
// import Link from 'next/link';



// const Header = () => {

//     return(
//         <div className={`mt-6 mx-auto max-w-6xl px-5 py-6 lg:px-1`}>
//             <nav className="flex justify-between items-center mb-8">
//           <div className="flex items-center space-x-3">
//             {/* <Logo /> */}
//             <Link href='/' className="uppercase text-white text-3xl font-bold tracking-tight">
//               EmelVerse
//             </Link>
//           </div>
          
//           <div className="flex items-center space-x-6">
//             {/* Create Button */}
//             <Link href="/create" className="text-white border border-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
//               <Plus className="w-4 h-4" />
//               <span>Create</span>
//             </Link>
            
//             {/* Collections */}
//             <Link href="/collections" className="text-white transition-colors flex items-center space-x-2 cursor-pointer">
//               <Grid className="w-4 h-4" />
//               <span>Collections</span>
//             </Link>
            
//             {/* Profile */}
//             <Link href="/profile" className="text-white transition-colors flex items-center space-x-2 cursor-pointer">
//               <User className="w-4 h-4" />
//               <span>Profile</span>
//             </Link>
            
//             {/* Connect Wallet Button */}
//             <Link href='/' className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
//               <Wallet className="w-4 h-4" />
//               <span className="font-medium">Connect Wallet</span>
//             </Link>
            
//           </div>
//         </nav>
//         </div>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import { Logo } from './Logo';
import { Plus, Wallet, User, Grid } from 'lucide-react';
import Link from 'next/link';
import { ProfileDropdown } from './ProfileDropdown';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/collections" className="text-white hover:text-white/80">
              Collections
            </Link>
            <Link href="/create" className="text-white hover:text-white/80">
              + Create
            </Link>
            <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white hover:text-white/80"
      >
        <span>Profile</span>
        <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>

        {isOpen && <ProfileDropdown className="absolute right-0 mt-10 w-48 bg-white rounded-lg shadow-xl py-2 z-10" />}
      </button>

                 <Link href='/' className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
             <Wallet className="w-4 h-4" />
              <span className="font-medium">Connect Wallet</span>
      </Link>

            
         

          

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/collections"
              className="block text-white hover:text-white/80 px-3 py-2"
            >
              Collections
            </Link>
            <Link
              href="/create"
              className="block text-white hover:text-white/80 px-3 py-2"
            >
              + Create
            </Link>
            {/* {isConnected ? (
              <>
                <Link
                  href="/profile/nfts"
                  className="block text-white hover:text-white/80 px-3 py-2"
                >
                  My NFTs
                </Link>
                <Link
                  href="/profile/collections"
                  className="block text-white hover:text-white/80 px-3 py-2"
                >
                  My Collections
                </Link>
              </>
            ) : (
                <Link href='/' className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
               <Wallet className="w-4 h-4" />
               <span className="font-medium">Connect Wallet</span>
               </Link>
     
            )} */}

<button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white hover:text-white/80 px-3 py-2"
      >
        <span>Profile</span>
        <svg className="ml-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
        
      </button>
      {isOpen && <ProfileDropdown className="w-full bg-white rounded-lg shadow-xl py-2 z-10" />}


                 <Link href='/' className="bg-white hover:bg-gray-100 text-black rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer px-3 py-2">
             <Wallet className="w-4 h-4" />
              <span className="font-medium">Connect Wallet</span>
      </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;