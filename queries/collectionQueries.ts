import { gql } from '@apollo/client';

export const GET_COLLECTIONS = gql`
    query getCollections ($orderBy: String!, $orderDirection: String!) {
        collections(orderBy: $orderBy, orderDirection: $orderDirection) {
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

export const GET_COLLECTIONS_BY_OWNER = gql`

    query GetCollectionsByOwner($ownerAddress: String!) {
        getCollectionsByOwner(ownerAddress: $ownerAddress) {
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

