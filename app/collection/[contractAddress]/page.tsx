 "use client"
import React from 'react';
import { collections } from '@/data/sampleCollections';
import { CollectionHeader } from '@/components/CollectionHeader';
import { CollectionStats } from '@/components/CollectionStats';
import { CollectionDescription } from '@/components/CollectionDescription';
import { MintButton } from '@/components/MintButton';
import { SuccessPopup } from '@/components/popups/SuccessPopup';
import { usePopup } from '@/hooks/usePopup';

const page: React.FC = () => {
    const { isOpen, openPopup, closePopup } = usePopup();
    const contractAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
    const collection = collections.find(
        (c) => c.contractAddress === contractAddress
    );

    //   if (!collection) {
    //     return <Navigate to="/" replace />;
    //   }

    return (
        <div className="min-h-screen bg-gray-900">
            <SuccessPopup isOpen={isOpen} onClose={closePopup} nftName="" imageUrl="" title='NFT Minted Successfully!' />
            <CollectionHeader
                name={collection.name}
                imageUrl={collection.imageUrl}
            />
            <div className="container mx-auto px-4 py-8 space-y-8">
                <CollectionStats
                    contractAddress={collection.contractAddress}
                    ownerAddress={collection.ownerAddress || '0xhjhuub1'}
                    createdAt={collection.createdAt}
                    price={collection.price}
                    mintedAmount={collection.mintedAmount}
                    totalSupply={collection.totalSupply}
                />
                <CollectionDescription description={collection.description} />
                <MintButton
                    price={collection.price}
                    disabled={collection.mintedAmount === collection.totalSupply}
                    openPopup={openPopup}
                />
            </div>
        </div>
    );
};

export default page;
