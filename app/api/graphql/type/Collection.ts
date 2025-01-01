import { gql } from '@apollo/client';

export const CollectionType = gql`
  type Collection {
    id: ID!
    name: String!
    description: String
    contractAddress: String!
    ownerAddress: String!
    createdAt: String!
    price: Float!
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
      name: String!
      description: String
      price: Float!
      totalSupply: Int!
      imageUrl: String!
    ): Collection
    
    updateCollection(
      id: ID!
      mintedAmount: Int!
    ): Collection
  }
`;

// create collection (after successfully creating a collection)
// mintNFT (after successfully minting nft)

// update collection minted amount after each nft minting