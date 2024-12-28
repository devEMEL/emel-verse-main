import React from 'react';
import { Plus, Wallet, User, Grid } from 'lucide-react';
import Link from 'next/link';



const Header = () => {

    return(
        <div className={`mt-6 mx-auto max-w-6xl px-5 py-6 lg:px-1`}>
            <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            {/* <Logo /> */}
            <Link href='/' className="uppercase text-white text-3xl font-bold tracking-tight">
              EmelVerse
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {/* Create Button */}
            <Link href="/create" className="text-white border border-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>Create</span>
            </Link>
            
            {/* Collections */}
            <Link href="/collections" className="text-white transition-colors flex items-center space-x-2 cursor-pointer">
              <Grid className="w-4 h-4" />
              <span>Collections</span>
            </Link>
            
            {/* Profile */}
            <Link href="/profile" className="text-white transition-colors flex items-center space-x-2 cursor-pointer">
              <User className="w-4 h-4" />
              <span>Profile</span>
            </Link>
            
            {/* Connect Wallet Button */}
            <Link href='/' className="bg-white hover:bg-gray-100 text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors cursor-pointer">
              <Wallet className="w-4 h-4" />
              <span className="font-medium">Connect Wallet</span>
            </Link>
            
          </div>
        </nav>
        </div>
    );
};

export default Header;
