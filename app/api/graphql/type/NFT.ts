import { gql } from '@apollo/client';

export const NFTType = gql`
  type NFT {
    id: ID!
    tokenId: Int!
    collectionId: ID!
    owner: String!
    metadata: String
  }

  extend type Query {
    nfts: [NFT!]!
    nft(id: ID!): NFT
  }

  extend type Mutation {
    mintNFT(
      collectionId: ID!
    ): NFT
  }
`;