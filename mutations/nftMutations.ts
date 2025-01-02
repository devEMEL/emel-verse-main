import { gql } from "@apollo/client";


export const CREATE_NFT = gql`
    mutation createNFT($chainId: Int!, $name: String!, $symbol: String!, $description: String!, $collectionAddress: String!, $tokenId: Int!, $ownerAddress: String!, $mintedAt: Int!) {
        createNFT(chainId: $chainId, name: $name, symbol: $symbol, description: $description, collectionAddress: $collectionAddress, tokenId: $tokenId, ownerAddress: $ownerAddress, mintedAt: $mintedAt) {
            id
            chainId
            name
            symbol
            description
            collectionAddress
            tokenId
            ownerAddress
            mintedAt
        }
    }
`;