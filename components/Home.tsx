import Button from './Button'
import FadeInSection from './FadeInSection'
import styles from './Home.module.scss'
// import { MarsVestingQueryClient } from "./types/generated/mars-vesting/MarsVesting.client";

import {
  useWalletManager,
} from "@marsprotocol/wallet-connector";

const Home = () => {
  const { connect } = useWalletManager();
  return (
    <article className={styles.home}>
      <section className={styles.intro}>
        <h1>Mars Protocol</h1>
      </section>
      <FadeInSection className={styles.app}>
        <h3>Connected Wallet: </h3>
        <h3>Balance: </h3>
        <div className={styles.button}>
          <Button text='Get Vested Position' size='large' onClick={connect}/>
        </div>
      </FadeInSection>
    </article>
  )
}

export default Home

