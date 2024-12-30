import React from 'react';
import type { NFT } from '../data/sampleCollections';
import NFTCard from './NFTCard';

interface MyNFTsProps {
    title: String;
    NFTs: NFT[];
}

const MyNFTs: React.FC<MyNFTsProps> = ({ title, NFTs }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-8">{title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {NFTs.map((nft, i) => (
                    <NFTCard key={i} nft={nft} />
                ))}
            </div>
        </div>
    );
};

export default MyNFTs;