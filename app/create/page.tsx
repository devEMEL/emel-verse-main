'use client';

import React, { useState, FormEvent } from 'react';
import { FormInput } from '@/components/forms/FormInput';
import { FormTextArea } from '@/components/forms/FormTextArea';
import { ImagePreview } from '@/components/forms/ImagePreview';
import { usePopup } from '@/hooks/usePopup';
import { SuccessPopup } from '@/components/popups/SuccessPopup';
import { etherToWei, getImageURI } from '@/utils';
import { useErrorPopup } from '@/hooks/useErrorPopup';
import { ErrorPopup } from '@/components/popups/ErrorPopup';

const page: React.FC = () => {
    const { isOpen, openPopup, closePopup } = usePopup();
    const { isOpen: isErrorOpen, openPopup: openErrorPopup, closePopup: closeErrorPopup } = useErrorPopup();
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        description: '',
        price: '',
        totalSupply: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero optio adipisci eos atque culpa corporis error eum maxime suscipit quibusdam, veritatis et laborum pariatur quod, alias in nobis magnam.");

    const handleCreateCollection = async(name: string, symbol: string, description: string, price: bigint, totalSupply: string, imageFile: File) => {
        // Handle form submission here
        // console.log('Form data:', formData);
        // console.log('Image file:', imageFile);

        // use as BigInt(totalSupply)

        // pin to ipfs and stuffs
        const imageURI = await getImageURI(imageFile);
        // create contract obj
        
        // make txn
        // read event log
        // make createcollection request
    }

    const createCollection = async(e: FormEvent) => {
        e.preventDefault();

        if (
            !(
                formData.name &&
                formData.symbol &&
                formData.description &&
                formData.price &&
                formData.totalSupply &&
                imageFile
            )
        )
        return;

        const priceInWei = etherToWei(formData.price);
        console.log({name: formData.name, symbol: formData.symbol, description: formData.description, price: priceInWei, totalSupply: formData.totalSupply});

        try {
            await handleCreateCollection(formData.name, formData.symbol, formData.description, priceInWei, formData.totalSupply, imageFile )
        } catch(err) {

        }
  
        // after form submission
        setFormData({
            name: '',
            symbol: '',
            description: '',
            price: '',
            totalSupply: '',
        })
        setImageFile(null)
        openPopup();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 py-12">
            <div className="container mx-auto px-4 max-w-2xl">
                <h1 className="text-2xl font-bold text-white mb-8">
                    Create New Collection
                </h1>
                {/* <button onClick={openErrorPopup}>open error popup</button> */}
                <SuccessPopup
                    isOpen={isOpen}
                    onClose={closePopup}
                    nftName=""
                    imageUrl=""
                    title="NFT Collection Created Successfully!"
                />
                <ErrorPopup
                    isOpen={isErrorOpen}
                    onClose={closeErrorPopup}
                    message={errorMessage}
                 />
                <form
                    onSubmit={createCollection}
                    className="bg-black/80 p-6 rounded-lg"
                >
                    <FormInput
                        label="Collection Name"
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        required
                    />

                    <FormInput
                        label="Symbol"
                        type="text"
                        id="symbol"
                        value={formData.symbol}
                        onChange={(e) =>
                            setFormData({ ...formData, symbol: e.target.value })
                        }
                        required
                    />

                    <FormTextArea
                        label="Description"
                        id="description"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        required
                    />

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white mb-2">
                            Collection Image
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full text-white"
                            required
                        />
                        <ImagePreview file={imageFile} />
                    </div>

                    <FormInput
                        label="Price (ETH)"
                        type="number"
                        id="price"
                        value={formData.price}
                        onChange={(e) =>
                            setFormData({ ...formData, price: e.target.value })
                        }
                        required
                        min={0}
                        step="0.000001"
                    />

                    <FormInput
                        label="Total Supply"
                        type="number"
                        id="totalSupply"
                        value={formData.totalSupply}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                totalSupply: e.target.value,
                            })
                        }
                        required
                        min={1}
                    />

                    <button
                        type="submit"
                        // onClick={createCollection}
                        className="w-full bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-white/90 transition-colors mt-6"
                    >
                        Create Collection
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;
