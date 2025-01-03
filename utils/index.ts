import { ethers} from 'ethers';

import { FileObject, PinataSDK } from 'pinata';

const IMAGE_SAMPLE =
    'https://maroon-major-crawdad-175.mypinata.cloud/ipfs/bafkreiaiqqqnwyvi5gksqfwsqihdt7izf5fklnbehal7elyusducquwq6i';

const pinata = new PinataSDK({
    pinataJwt: process.env.NEXT_PUBLIC_PINATA_JWT,
    pinataGateway: 'maroon-major-crawdad-175.mypinata.cloud',
});


export const truncateAddress = (
    address: string,
    startLength = 6,
    endLength = 4
) => {
    if (!address) return '';
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};

export const imageURIToSrc = (imageURI: string) => {
    let imageSrc;
    if (imageURI.includes('//')) {
        imageSrc = `https://maroon-major-crawdad-175.mypinata.cloud/ipfs/${
            imageURI.split('//')[1]
        }`;
    } else {
        imageSrc = IMAGE_SAMPLE;
    }

    return imageSrc;
};

export const etherToWei = (amountInEther: string) => {
    return ethers.parseEther(amountInEther);
};

export const weiToEther = (amountInWei: string) => {
    return ethers.formatEther(amountInWei);
};

export const getImageURI = async (imageFile: FileObject) => {
    const upload = await pinata.upload.file(imageFile);
    return `ipfs://${upload.cid}`;
};

export const getTokenURI = async (metadata: object) => {
    const upload = await pinata.upload.json(metadata);
    return `ipfs://${upload.cid}`;
};
