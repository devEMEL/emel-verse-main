import { gql } from '@apollo/client';

export const CREATE_COLLECTION = gql`
    mutation createCollection($id: ID!, $chainId: Int!, $name: String!, $symbol: String!, $description: String!, $ownerAddress: String!, $createdAt: String!, $price: Int!, $imageUrl: String!, $totalSupply: Int!, $mintedAmount: Int!) {
        createCollection(id: $id, chainId: $chainId, name: $name, symbol: $symbol, description: $description, ownerAddress: $ownerAddress, createdAt: $createdAt, price: $price, imageUrl: $imageUrl, totalSupply: $totalSupply, mintedAmount: $mintedAmount) {
            id
            chainId
            name
            symbol
            description
            ownerAddress
            createdAt
            price
            imageUrl
            totalSupply
            mintedAmount

        }
    }
`;
