// @ts-nocheck

import { nftModel } from "@/models/NFT";

export const nftResolvers = {
    Query: {
        nfts: async (_, __, { dataSources }) => {
            return dataSources.nfts.getAll();
        },
        nft: async (_, { id }, { dataSources }) => {
            return dataSources.nfts.getById(id);
        },
    },
    Mutation: {
        createNFT: async (_, args, { dataSources }) => {
            const nft = new nftModel({
                chainId: args.chainId,
                name: args.name,
                description: args.description,
                collectionAddress: args.collectionAddress,
                tokenId: args.tokenId,
                ownerAddress: args.ownerAddress,
                metadata: args.metadata,
                mintedAt: args.mintedAt,
            });
            return nft.save();

        },
    },
};
