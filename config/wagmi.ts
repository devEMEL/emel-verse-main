import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { sepolia } from 'viem/chains';
import type { Chain } from 'viem';

const emel_Tanssi = {
    id: 1219,
    name: 'Emel_Tanssi',
    nativeCurrency: {
        decimals: 18,
        name: 'Emel_Tanssi',
        symbol: 'EML',
    },
    rpcUrls: {
        public: {
            http: ['https://fraa-flashbox-4524-rpc.a.stagenet.tanssi.network'],
        },
        default: {
            http: ['https://fraa-flashbox-4524-rpc.a.stagenet.tanssi.network'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Emel_Tanssi',
            url: 'https://opencampus-codex.blockscout.com',
        },
    },

    testnet: false,
} as const satisfies Chain;

export const wagmiConfig = getDefaultConfig({
    appName: 'tanssi minter',
    projectId: 'cdddc2c45ee7a243f73916dfe293c0ca',
    chains: [
        // emel_Tanssi
        sepolia,
    ],
    transports: {
        // [emel_Tanssi.id]: http(),
        [sepolia.id]: http(),
    },
});
