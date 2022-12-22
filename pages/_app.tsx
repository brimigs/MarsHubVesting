import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  WalletManagerProvider,
  ChainInfoID,
  WalletType,
} from "@marsprotocol/wallet-connector";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WalletManagerProvider
      defaultChainId={ChainInfoID.MarsAres1}
      enabledWalletTypes={[WalletType.Keplr]}
      localStorageKey="marsVestingStorageKey"
      walletConnectClientMeta={{
          name: "Mars Hub Vested Tokens",
          description: "This UI allows you to query you vested token position and unlocked schedule for the connect wallet",
          url: "https://localhost:3000",
          icons: ["https://marsprotocol.io/favicon.svg"],
      }}
    >
      <Component {...pageProps} />
    </WalletManagerProvider>
  );
}
