// @ts-nocheck

import { nftModel } from "@/models/NFT";

export const nftResolvers = {
    Query: {
        nfts: async (_, __, { dataSources }) => {
            return nftModel.find()
        },
        nft: async (_, { id }, { dataSources }) => {
            return nftModel.findById(id)
        },
    },
    Mutation: {
        createNFT: async (_, args, { dataSources }) => {
            const nft = new nftModel({
                chainId: args.chainId,
                name: args.name,
                symbol: args.symbol,
                description: args.description,
                collectionAddress: args.collectionAddress,
                tokenId: args.tokenId,
                ownerAddress: args.ownerAddress,
                mintedAt: args.mintedAt,
            });
            return nft.save();

        },
    },
};
