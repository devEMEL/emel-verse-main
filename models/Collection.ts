import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true,
        },
        chainId: { type: Number },
        name: { type: String },
        symbol: { type: String },
        description: { type: String },
        ownerAddress: { type: String },
        createdAt: { type: Number },
        price: { type: Number },
        imageUrl: { type: String },
        totalSupply: { type: Number },
        mintedAmount: { type: Number },
    },
    {
        _id: true,
    }
);

export const collectionModel =
    mongoose.models.Collection ||
    mongoose.model('Collection', collectionSchema);

// _id = contract address
