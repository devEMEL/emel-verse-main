import { ApolloServer } from '@apollo/server';
import { gql } from '@apollo/client';
import { makeExecutableSchema} from "@graphql-tools/schema"
import { startServerAndCreateNextHandler} from '@as-integrations/next'
import { CollectionType } from './type/Collection';
import { NFTType } from './type/NFT';
import { resolvers } from './resolvers';

const baseSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

export const typeDefs = [baseSchema, CollectionType, NFTType];



