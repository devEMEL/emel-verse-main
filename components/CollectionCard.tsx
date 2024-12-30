import React from 'react';
import { formatAddress } from '../utils/index';
import type { Collection } from '../data/sampleCollections';
import Link from 'next/link';

interface CollectionCardProps {
    collection: Collection;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
    collection,
}) => {
    return (
        <div className="bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1">
            <Link
                href={`/collection/${collection.contractAddress}`}
                className="block bg-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
            >
                <img
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-white">
                        {collection.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-1">
                        Contract: {formatAddress(collection.contractAddress)}
                    </p>
                    <p className="text-sm text-white/80 mb-1">
                        Created:{' '}
                        {new Date(collection.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-sm font-medium text-white">
                        {collection.price} ETH
                    </p>
                </div>
            </Link>
        </div>
    );
};
