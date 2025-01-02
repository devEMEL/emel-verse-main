'use client';

import React, { useState, FormEvent } from 'react';
import { FormInput } from '@/components/forms/FormInput';
import { FormTextArea } from '@/components/forms/FormTextArea';
import { ImagePreview } from '@/components/forms/ImagePreview';
import { usePopup } from '@/hooks/usePopup';
import { SuccessPopup } from '@/components/popups/SuccessPopup';

const page: React.FC = () => {
    const { isOpen, openPopup, closePopup } = usePopup();
    const [formData, setFormData] = useState({
        name: '',
        symbol: '',
        description: '',
        price: '',
        totalSupply: '',
    });
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form data:', formData);
        console.log('Image file:', imageFile);
        // after form submission
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
                <SuccessPopup
                    isOpen={isOpen}
                    onClose={closePopup}
                    nftName=""
                    imageUrl=""
                    title="NFT Collection Created Successfully!"
                />
                <form
                    onSubmit={handleSubmit}
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
                        // onClick={handleSubmit}
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
