import { gql } from '@apollo/client';

export const GET_NFTS = gql`
    query getNFTs {
        nfts {
            id
            chainId
            name
            symbol
            description
            collectionAddress
            tokenId
            ownerAddress
            mintedAt
        }
    }
`;

export const GET_NFT = gql`
    query getNFT($collectionAddress: String!) {
        nft(collectionAddress: $collectionAddress) {
            id
            chainId
            name
            symbol
            description
            collectionAddress
            tokenId
            ownerAddress
            mintedAt
        }
    }
`;
