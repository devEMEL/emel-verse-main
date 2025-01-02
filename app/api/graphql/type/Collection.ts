import { gql } from '@apollo/client';

export const CollectionType = gql`
    type Collection {
        id: ID!
        chainId: Int!
        name: String!
        symbol: String!
        description: String
        ownerAddress: String!
        createdAt: Int!
        price: Int!
        imageUrl: String!
        totalSupply: Int!
        mintedAmount: Int!
    }

    extend type Query {
        collections: [Collection!]!
        collection(id: ID!): Collection
    }

    extend type Mutation {
        createCollection(
            id: ID!
            chainId: Int!
            name: String!
            symbol: String!
            description: String
            ownerAddress: String!
            createdAt: Int!
            price: Int!
            totalSupply: Int!
            imageUrl: String!
            mintedAmount: Int!
        ): Collection

        updateCollection(id: ID!, mintedAmount: Int!): Collection
    }
`;

// removed     contractAddress: String!, since is represented by _id
// create collection (after successfully creating a collection)
// mintNFT (after successfully minting nft)

// update collection minted amount after each nft minting

