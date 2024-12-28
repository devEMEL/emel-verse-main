"use client"
import { useState } from 'react';
import CollectionSort from './CollectionSort';
import { CollectionsGrid } from './CollectionsGrid';

const CollectionsPage = () => {
  const [activeSort, setActiveSort] = useState('all');

  const handleSort = (sortType) => {
    setActiveSort(sortType);
    // Add your sorting logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        {/* <h1 className="text-3xl font-bold text-white mb-4">Collections</h1> */}
        <CollectionSort onSort={handleSort} activeSort={activeSort} />
      </div>
      
      {/* Your collections grid/list will go here */}
      <CollectionsGrid />
    </div>
  );
};

export default CollectionsPage;
