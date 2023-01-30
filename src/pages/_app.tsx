import { ChainInfoID, WalletID, WalletManagerProvider } from '@marsprotocol/wallet-connector'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Suspense } from 'react'
import 'styles/globals.css'

const enabledWallets = [WalletID.Keplr, WalletID.Cosmostation]
const defaultChainId = ChainInfoID.MarsAres1

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content='width=device-width,initial-scale=1,shrink-to-fit=no' name='viewport' />
        <title>Mars Protocol</title>
      </Head>
      <Suspense fallback={null}>
        <WalletManagerProvider
          defaultChainId={defaultChainId}
          enabledWallets={enabledWallets}
          persistent
        >
          <Component {...pageProps} />
        </WalletManagerProvider>
      </Suspense>
    </>
  )
}
