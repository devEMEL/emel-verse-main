import { collectionResolvers } from './resolvers/collections';
import { nftResolvers } from './resolvers/nfts';
import { merge } from 'lodash';

export const resolvers = merge({}, collectionResolvers, nftResolvers);