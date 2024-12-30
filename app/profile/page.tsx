'use client';
import { CollectionsGrid } from '@/components/CollectionsGrid';
import MyNFTs from '@/components/MyNFTs';
import { collections } from '@/data/sampleCollections';
import { NFTs } from '../../data/sampleCollections';
import React, { useEffect } from 'react';

const page = () => {
    // lets assume this element is my only collection
    const contractAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';
    const collection = collections.filter(
        (c) => c.contractAddress === contractAddress
    );
    console.log(collection);

    useEffect(() => {
        console.log({ collection });
    }, []);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Your collections grid/list will go here */}
            <CollectionsGrid title="My Collections" collections={collection} />
            <MyNFTs title="My NFTs" NFTs={NFTs} />
        </div>
    );
};

export default page;
