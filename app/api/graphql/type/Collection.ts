import { gql } from '@apollo/client';

export const CollectionType = gql`
    type Collection {
        id: ID!
        chainId: String!
        name: String!
        symbol: String!
        description: String
        ownerAddress: String!
        createdAt: String!
        price: String!
        imageUrl: String!
        totalSupply: String!
        mintedAmount: String!
    }

    extend type Query {
        collections: [Collection!]!
        collection(id: ID!): Collection
    }

    extend type Mutation {
        createCollection(
            id: ID!
            chainId: String!
            name: String!
            symbol: String!
            description: String
            ownerAddress: String!
            createdAt: String!
            price: String!
            totalSupply: String!
            imageUrl: String!
            mintedAmount: String!
        ): Collection

        updateCollection(id: ID!, mintedAmount: String!): Collection
    }
`;

// removed     contractAddress: String!, since is represented by _id
// create collection (after successfully creating a collection)
// mintNFT (after successfully minting nft)

// update collection minted amount after each nft minting

