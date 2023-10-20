import 'tailwindcss/tailwind.css'
import dynamic from "next/dynamic";
import { ChakraProvider } from '@chakra-ui/react'
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum,sepolia, polygonMumbai} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient,  } = configureChains(
  [mainnet, polygon, optimism, arbitrum,sepolia,polygonMumbai],
  [
    alchemyProvider({ apiKey:"vn61eXIkpvUX5dPgfdirJyhHzm93wQNW" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function MyApp({ Component, pageProps }) {
 return (
  <WagmiConfig  config={wagmiConfig}>
    <RainbowKitProvider chains={chains}
    
    theme={lightTheme({
      accentColor: '#009A9A',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      modalAccentColor: '#009A9A',
    
    })}
    
    
    >
      <ChakraProvider>

      
    <Component {...pageProps} />
    </ChakraProvider>
    </RainbowKitProvider>
  </WagmiConfig>
);
};

export default dynamic (() => Promise.resolve(MyApp), {ssr: false})