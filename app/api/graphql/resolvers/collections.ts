// @ts-nocheck

export const collectionResolvers = {
    Query: {
      collections: async (_, __, { dataSources }) => {
        // return "Hello collections"
        // return dataSources.collections.getAll();

        return [{
            id: "100",
            name: "Dom",
            description: "DOM",
            contractAddress: "DOM",
            ownerAddress: "DOM",
            createdAt: "DOM",
            price: 100,
            imageUrl: "DOM",
            totalSupply: 45000,
            mintedAmount: 450
        },
        {
            id: "1001",
            name: "Dom",
            description: "DOM",
            contractAddress: "DOM",
            ownerAddress: "DOM",
            createdAt: "DOM",
            price: 100,
            imageUrl: "DOM",
            totalSupply: 45000,
            mintedAmount: 450
        }]
      },
      collection: async (_, { id }, { dataSources }) => {
        // return "Hello collection"
        // return dataSources.collections.getById(id);
        return {
            id: "100",
            name: "Dom",
            description: "DOM",
            contractAddress: "DOM",
            ownerAddress: "DOM",
            createdAt: "DOM",
            price: 100,
            imageUrl: "DOM",
            totalSupply: 45000,
            mintedAmount: 450
        }
      },
    },
    Mutation: {
      createCollection: async (_, args, { dataSources }) => {
        return "Hello create collection"
        // return dataSources.collections.create(args);
      },
      updateCollection: async (_, args, { dataSources }) => {
        return "Hello update collection"
        // return dataSources.collections.update(args);
      },
    },
  };