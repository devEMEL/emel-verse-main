'use client';
import React from 'react';
import { CollectionHeader } from '@/components/CollectionHeader';
import { CollectionStats } from '@/components/CollectionStats';
import { CollectionDescription } from '@/components/CollectionDescription';
import { MintButton } from '@/components/MintButton';
import { SuccessPopup } from '@/components/popups/SuccessPopup';
import { usePopup } from '@/hooks/usePopup';
import { useQuery } from '@apollo/client';
import { GET_COLLECTION } from '@/queries/collectionQueries';
import { useImageLoader } from '@/hooks/useImageLoader';




const page: React.FC = ({ params }) => {
    const { id } = params;
    const { isOpen, openPopup, closePopup } = usePopup();
    const { loading, data: collection, error } = useQuery(GET_COLLECTION, {
        variables: { id }
    });

    const { imageSrc, isLoading, } = useImageLoader(collection?.collection?.imageUrl);


    if (loading) return <p>Loading...</p>; // Loading Spinner
    if (error) return <p>Error : {error.message}</p>

    return (
        <div className="min-h-screen bg-gray-900">
            <SuccessPopup
                isOpen={isOpen}
                onClose={closePopup}
                nftName=""
                imageUrl=""
                title="NFT Minted Successfully!"
            />
            <CollectionHeader
                name={collection?.collection?.name}
                imageUrl={imageSrc}
            />
            <div className="container mx-auto px-4 py-8 space-y-8">
                <CollectionStats
                    contractAddress={collection?.collection?.id}
                    ownerAddress={collection?.collection?.ownerAddress}
                    createdAt={collection?.collection?.createdAt}
                    price={collection?.collection?.price}
                    mintedAmount={collection?.collection?.mintedAmount}
                    totalSupply={collection?.collection?.totalSupply}
                />
                <CollectionDescription description={collection?.collection?.description} />
                <MintButton
                    collection={collection?.collection}
                    isOpen={isOpen}
                    onClose={closePopup}
                    disabled={
                        collection?.collection?.mintedAmount === collection?.collection?.totalSupply
                    }
                    openPopup={openPopup}
                />
            </div>
        </div>
    );
};

export default page;
