'use client';
import { useState } from 'react';
import CollectionSort from './CollectionSort';
import { CollectionsGrid } from './CollectionsGrid';
import { collections } from '@/data/sampleCollections';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from '@/queries/collectionQueries';

const CollectionsPage = () => {
    const [activeSort, setActiveSort] = useState('all');
    const { loading, data, error } = useQuery(GET_COLLECTIONS);

    const handleSort = (sortType) => {
        setActiveSort(sortType);
        // Add your sorting logic here
    };

    if (loading) return <p>Loading...</p>; // Loading Spinner
    if (error) return <p>Error : {error.message}</p>

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
                {/* <h1 className="text-3xl font-bold text-white mb-4">Collections</h1> */}
                <CollectionSort onSort={handleSort} activeSort={activeSort} />
            </div>

            {/* Your collections grid/list will go here */}
            {
                !loading && !error && (
                    <CollectionsGrid
                        title="NFT Collections"
                        collections={data.collections}
                    />
                )
            }
            
        </div>
    );
};

export default CollectionsPage;
