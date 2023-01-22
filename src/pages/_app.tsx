import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";
import { client } from "../utils/wagmi";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThirdwebProvider desiredChainId={ChainId.Mumbai} >
      <WagmiConfig client={client}>
        <ConnectKitProvider theme="retro">
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </ConnectKitProvider>
      </WagmiConfig>
      </ThirdwebProvider>
    </>
  );
}
