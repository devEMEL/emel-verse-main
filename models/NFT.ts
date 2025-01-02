import mongoose from 'mongoose';

const nftSchema = new mongoose.Schema(
    {
        chainId: { type: Number },
        name: { type: String },
        description: { type: String },
        collectionAddress: {
            type: String,
            required: true,
            ref: 'Collection',
        },
        tokenId: { type: Number },
        ownerAddress: { type: String },
        metadata: { type: String },
        mintedAt: { type: Number}
    },
    {
        timestamps: true,
    }
);

export const nftModel = mongoose.models.NFT || mongoose.model('NFT', nftSchema);