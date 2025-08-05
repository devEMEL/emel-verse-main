import { useImageLoader } from '@/hooks/useImageLoader';
import { formatRelativeTime } from '@/utils';
import React from 'react';


const TableRow = ({id, tokenId, name, imageUrl, ca, mintedAt}: any) => {

    const { imageSrc, isLoading, error } = useImageLoader(imageUrl);

  return (
    
    <tr key={id}>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{tokenId}</td>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{name}</td>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
            <img
                    src={imageSrc}
                    alt={name}
                    className="w-10 h-10 object-cover"
                />
        </td>

        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{ca}</td>
        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
            {formatRelativeTime(mintedAt)}
        </td>
    </tr>

  )
}

export default TableRow;