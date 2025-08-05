'use client';
import { CollectionsGrid } from '@/components/CollectionsGrid';
import MyNFTs from '@/components/MyNFTs';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS_BY_OWNER } from '@/queries/collectionQueries';
import { GET_NFTS_BY_OWNER } from '@/queries/nftQueries';
import { useAccount } from 'wagmi';
import TableRow from '@/components/TableRow';

const Page = () => {
  const chainId = 10143;
  const { address } = useAccount();

  const { loading, error, data } = useQuery(GET_COLLECTIONS_BY_OWNER, {
    variables: { ownerAddress: address, chainId: String(chainId) },
    skip: !address,
  });

  const {
    loading: nftLoading,
    error: nftError,
    data: nftData,
  } = useQuery(GET_NFTS_BY_OWNER, {
    variables: { ownerAddress: address, chainId: String(chainId) },
    skip: !address,
  });



  if (loading || nftLoading) return <p>Loading...</p>;
  if (error || nftError) return <p>Error: {error?.message || nftError?.message}</p>;
  if (!data || !nftData) return <p>No data available</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-2xl font-bold mb-8 px-4 text-white">Mint Activity</div>

      {/* Responsive Table for Collections */}
      <div className="overflow-x-auto mb-12">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Token ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">CA</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Created</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {nftData.getNftsByOwner.map((collection: any) => (
                <TableRow 
                id={collection.id}
                 tokenId={collection.tokenId}
                 name={collection.name}
                 imageUrl={collection.imageUrl}
                 ca={collection.collectionAddress}
                 mintedAt={collection.mintedAt}
                />
              
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Retain or remove this grid */}
      <CollectionsGrid title="My Collections" collections={data.getCollectionsByOwner} />
      <MyNFTs title="My NFTs" NFTs={nftData.getNftsByOwner} />
    </div>
  );
};

export default Page;
