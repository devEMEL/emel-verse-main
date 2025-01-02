'use client';
import React from 'react';

interface MintButtonProps {
    price: number;
    disabled?: boolean;
    openPopup: () => void;
}

export const MintButton: React.FC<MintButtonProps> = ({
    price,
    disabled,
    openPopup,
}) => {
    const handleMint = () => {
        // Mint functionality would be implemented here
        console.log('Minting NFT...');
        //after minting
        openPopup();
    };

    return (
        <button
            onClick={handleMint}
            disabled={disabled}
            className="w-full bg-white text-black font-bold py-4 px-8 rounded-lg hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed transition-colors"
        >
            Mint for {price} ETH
        </button>
    );
};
