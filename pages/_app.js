import 'tailwindcss/tailwind.css'
import dynamic from "next/dynamic";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider, lightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai, bsc, bscTestnet} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai, bsc, bscTestnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function MyApp({ Component, pageProps }) {
 return (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}
    
    theme={lightTheme({
      accentColor: '#009A9A',
      accentColorForeground: 'white',
      borderRadius: 'medium',
      fontStack: 'system',
      modalAccentColor: '#009A9A',
    
    })}
    
    
    >
      
    <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
);
};

export default dynamic (() => Promise.resolve(MyApp), {ssr: false})