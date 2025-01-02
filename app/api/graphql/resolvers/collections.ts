// @ts-nocheck

import { collectionModel } from '@/models/Collection';

export const collectionResolvers = {
    Query: {
        collections: async (_, __, { dataSources }) => {
            return collectionModel.find()

        },
        collection: async (_, { id }, { dataSources }) => {
            return collectionModel.findById(id)
            
        },
    },
    Mutation: {
        createCollection: async (_, args, { dataSources }) => {

            const collection = new collectionModel({
                _id: args.id,
                chainId: args.chainId,
                name: args.name,
                symbol: args.symbol,
                description: args.description,
                ownerAddress: args.ownerAddress,
                createdAt: args.createdAt,
                price: args.price,
                imageUrl: args.imageUrl,
                totalSupply: args.totalSupply,
                mintedAmount: args.mintedAmount,
            });
            return collection.save();
        },
        updateCollection: async (_, args, { dataSources }) => {
            return collectionModel.findByIdAndUpdate(args.id, {mintedAmount: args.mintedAmount}, {new: true})
        },
    },
};
