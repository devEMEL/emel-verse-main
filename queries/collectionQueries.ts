import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
    query getCollections {
        collections {
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

export const GET_COLLECTION = gql`
    query getCollection($id: ID!) {
        collection(id: $id) {
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
