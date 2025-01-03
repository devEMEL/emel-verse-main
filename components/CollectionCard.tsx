import React from 'react';
import { truncateAddress, weiToEther } from '../utils/index';
import type { Collection } from '../data/sampleCollections';
import Link from 'next/link';
import { useImageLoader } from '@/hooks/useImageLoader';

interface CollectionCardProps {
    collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
    collection,
}) => {

    
    const { imageSrc, isLoading, error } = useImageLoader(collection.imageUrl);

    const formatRelativeTime = (timestamp: any): any => {
        const now = Date.now();
        const diffInSeconds = Math.floor((now - timestamp * 1000) / 1000);
      
        if (diffInSeconds < 60) {
          return `${diffInSeconds} seconds ago`;
        }
      
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        if (diffInMinutes < 60) {
          return `${diffInMinutes} minutes ago`;
        }
      
        const diffInHours = Math.floor(diffInMinutes / 60);
        if (diffInHours < 24) {
          return `${diffInHours} ${diffInHours === 1 ? 'hr' : 'hrs'} ago`;
        }
      
        const diffInDays = Math.floor(diffInHours / 24);
        return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
      };
    return (
        <div className="bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
            <Link
                href={`/id/${collection.id}`}
                className="block bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
                <img
                    src={imageSrc}
                    alt={collection.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                        {collection.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-1">
                        Contract: {truncateAddress(collection.id)}
                    </p>
                    <p className="text-sm text-white/80 mb-1">
                        Created:{' '}
                        {/* {new Date(collection.createdAt).toLocaleDateString()} */}
                        {formatRelativeTime(collection.createdAt)}
                    </p>
                    <p className="text-sm font-medium text-white">
                        {weiToEther(String(collection.price))} ETH
                    </p>
                </div>
            </Link>
        </div>
    );
};
