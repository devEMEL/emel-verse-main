import React from 'react';
import type { NFT } from '@/data/sampleCollections';
import { truncateAddress } from '@/utils';

interface NFTProps {
    nft: NFT;
}

const NFTCard: React.FC<NFTProps> = ({ nft }) => {
    return (
        <div className="bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
            <div className="block bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
                <img
                    src={nft.imageUrl}
                    alt={nft.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                        {nft.name}
                    </h3>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                        {nft.symbol}
                    </h3>
                    <p className="text-sm text-white/80 mb-1">
                        Contract: {truncateAddress(nft.contractAddress)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NFTCard;
