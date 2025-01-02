// <div className="bg-black/80 rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10">
//   <img
//     src={nft.imageUrl}
//     alt={nft.name}
//     className="w-full h-48 object-cover"
//   />
//   <div className="p-4 space-y-2">
//     <div className="flex items-center justify-between">
//       <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
//       <span className="text-sm text-white/60">{nft.symbol}</span>
//     </div>
//     <div className="space-y-1">
//       <p className="text-sm text-white/60">
//         Contract: <span className="text-white">{formatAddress(nft.contractAddress)}</span>
//       </p>
//       <p className="text-sm text-white/60">
//         Owner: <span className="text-white">{formatAddress(nft.owner)}</span>
//       </p>
//     </div>
//     </div>
//     </div>

// "@rainbow-me/rainbowkit": "^2.2.1", // 2.1.5


{ /***

mutation createNFT($chainId: Int!, $name: String!, $description: String!, $collectionAddress: String!, $tokenId: Int!, $ownerAddress: String!, $metadata: String!, $mintedAt: Int!) {
    createNFT(chainId: $chainId, name: $name, description: $description, collectionAddress: $collectionAddress, tokenId: $tokenId, ownerAddress: $ownerAddress, metadata: $metadata, mintedAt: $mintedAt) {
      id
      chainId
      name
      description
      collectionAddress
      tokenId
      ownerAddress
      metadata
      mintedAt

    }
  }

{
    "chainId": 111111,
    "name": "Bored Ape Yacht Club",
    "description": "This is a bored ape",
    "collectionAddress": "0xjd",
    "tokenId": 199,
    "ownerAddress": "0xgt67hgg",
    "metadata": "https://eme.com",
    "mintedAt": 40900899
  }



  mutation createCollection($id: ID!, $chainId: Int!, $name: String!, $description: String!, $ownerAddress: String!, $createdAt: String!, $price: Int!, $imageUrl: String!, $totalSupply: Int!, $mintedAmount: Int!) {
    createCollection(id: $id, chainId: $chainId, name: $name, description: $description, ownerAddress: $ownerAddress, createdAt: $createdAt, price: $price, imageUrl: $imageUrl, totalSupply: $totalSupply, mintedAmount: $mintedAmount) {
      id
      chainId
      name
      description
      ownerAddress
      createdAt
      price
      imageUrl
      totalSupply
      mintedAmount

    }
  }

{
    "id": "0xfabc",
    "chainId": 12111,
    "name": "Bored Ape Yacht Club",
    "description": "This is a bored ape",
    "ownerAddress": "0xjd",
    "createdAt": 11233999,
    "price": 23,
    "imageUrl": "https://eme.com",
    "totalSupply": 40900,
    "mintedAmount": 0,
  }


 */}