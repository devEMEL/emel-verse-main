import { gql } from '@apollo/client';

export const NFTType = gql`
    type NFT {
        id: ID!
        chainId: Int!
        name: String!
        symbol: String!
        description: String
        collectionAddress: String!
        tokenId: Int!
        ownerAddress: String!
        mintedAt: Int!
        imageUrl: String!
    }

    extend type Query {
        nfts: [NFT!]!
        nft(id: ID!): NFT
    }

    extend type Mutation {
        createNFT(
            chainId: Int!
            name: String!
            symbol: String!
            description: String
            collectionAddress: String!
            tokenId: Int!
            ownerAddress: String!
            mintedAt: Int!
            imageUrl: String!
        ): NFT
    }
`;
// since id = collection id

