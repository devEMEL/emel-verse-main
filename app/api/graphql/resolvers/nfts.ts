// @ts-nocheck

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
      mintNFT: async (_, { collectionId }, { dataSources }) => {
        const nft = await dataSources.nfts.mint(collectionId);
        
        const collection = await dataSources.collections.getById(collectionId);
        await dataSources.collections.update({
          id: collectionId,
          mintedAmount: collection.mintedAmount + 1
        });
        
        return nft;
      },
    },
  };