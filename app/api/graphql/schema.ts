import { gql } from '@apollo/client';
import { CollectionType } from './type/Collection';
import { NFTType } from './type/NFT';

const baseSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }
`;

export const typeDefs = [baseSchema, CollectionType, NFTType];
