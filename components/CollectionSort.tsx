'use client';
import { ArrowUpDown, Clock, DollarSign, SortAsc } from 'lucide-react';

const CollectionSort = ({ onSort, activeSort }) => {
    const sortOptions = [
        // { id: 'all', label: 'All', icon: <ArrowUpDown className="w-4 h-4" /> },
        { id: 'name', label: 'Name', icon: <SortAsc className="w-4 h-4" /> },
        {
            id: 'createdAt',
            label: 'Time Created',
            icon: <Clock className="w-4 h-4" />,
        },
        {
            id: 'cheapest',
            label: 'Cheapest',
            icon: <DollarSign className="w-4 h-4" />,
        },
        {
            id: 'expensive',
            label: 'Most Expensive',
            icon: <DollarSign className="w-4 h-4" />,
        },
    ];

    return (
        <div className="flex flex-wrap gap-2 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
            <span className="text-zinc-400 flex items-center mr-2">
                Sort by:
            </span>
            <div className="flex flex-wrap gap-2">
                {sortOptions.map((option) => (
                    <button
                        key={option.id}
                        onClick={() => onSort(option.id)}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-lg transition-all
              ${
                  activeSort === option.id
                      ? 'bg-white text-black'
                      : 'bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700/50'
              }
            `}
                    >
                        {option.icon}
                        <span>{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CollectionSort;
