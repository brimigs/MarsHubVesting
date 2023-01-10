import { ChainInfoID, WalletManagerProvider, WalletType } from '@marsprotocol/wallet-connector'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content='width=device-width,initial-scale=1,shrink-to-fit=no' name='viewport' />
        <title>Mars Protocol</title>
      </Head>
      <WalletManagerProvider
        defaultChainId={ChainInfoID.MarsAres1}
        enabledWalletTypes={[WalletType.Keplr]}
        localStorageKey='marsVestingStorageKey'
        walletConnectClientMeta={{
          name: 'Mars Hub Vested Tokens',
          description:
            'This UI allows you to query you vested token position and unlocked schedule for the connect wallet',
          url: 'https://localhost:3000',
          icons: ['https://marsprotocol.io/favicon.svg'],
        }}
      >
        <Component {...pageProps} />
      </WalletManagerProvider>
    </>
  )
}
