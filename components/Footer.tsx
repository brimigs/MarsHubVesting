import styles from './Footer.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>TEST</h2>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a href='https://marsprotocol.io' title='Mars Protocol' target='_blank' rel='noreferrer'>
            <Image
              src='/images/icon-mars.png'
              placeholder='blur'
              blurDataURL='/images/icon-mars.png'
              alt='Mars Protocol'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://mars-protocol.medium.com'
            title='Mars Protocol on Medium'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-medium.png'
              placeholder='blur'
              blurDataURL='/images/icon-medium.png'
              alt='Medium'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://t.me/martiannews'
            title='Mars Protocol on Telegram'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-telegram.png'
              placeholder='blur'
              blurDataURL='/images/icon-telegram.png'
              alt='Telegram'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://twitter.com/mars_protocol'
            title='Mars Protocol on Twitter'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-twitter.png'
              placeholder='blur'
              blurDataURL='/images/icon-twitter.png'
              alt='Twitter'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://discord.gg/marsprotocol'
            title='Mars Protocol Discord Server'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-discord.png'
              placeholder='blur'
              blurDataURL='/images/icon-discord.png'
              alt='Discord'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://docs.marsprotocol.io'
            title='Mars Protocol Docs'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-gitbook.png'
              placeholder='blur'
              blurDataURL='/images/icon-gitbook.png'
              alt='Gitbook'
              width='64'
              height='64'
            />
          </a>
        </div>
        <div className={styles.social}>
          <a
            href='https://mars-protocol.medium.com/subscribe'
            title='Subscribe to the Mars Protocol newsletter'
            target='_blank'
            rel='noreferrer'
          >
            <Image
              src='/images/icon-mail.png'
              placeholder='blur'
              blurDataURL='/images/icon-mail.png'
              alt='Newsletter'
              width='64'
              height='64'
            />
          </a>
        </div>
      </div>

      <p className={styles.disclaimer}>
        <strong>Mars Disclaimers</strong>
        <br />
        <br />
        Please be advised: This article sets forth speculation regarding a possible design of a
        potential future derivation and deployment of &apos;Mars protocol&apos; and the creation of
        new MARS tokens. There is no guarantee or promise being made, or duty or obligation being
        assumed, or right being created or conferred hereby, and no contract or agreement is
        implied. There is no guarantee or assurance that new Mars software will be created or
        deployed, or that any Mars software which is created or deployed will adhere to the design
        or have all of the features described herein.
        <br />
        <br />
        If Mars software is created or deployed, this article does not constitute a representation,
        warranty or guaranty as to how that software will function or the outcomes to be produced by
        that software. This article is not an offer or solicitation to purchase or otherwise acquire
        MARS tokens, and does not constitute investment or other advice.
        <br />
        <br />
        Mars protocol is open-source software, and the Mars branding is licensed under creative
        commons. Accordingly, no single person or group controls what forks or derivations of Mars
        protocol may be created in the future. There is no specific entity or entities that have
        promised or committed to develop the software described herein, and you should not have any
        expectation of continued software development or governance on the part of any specific
        person or persons.
        <br />
        <br />
        Do not make any financial decisions based on this article.
        <br />
        <br />
        This article is further qualified by, and subject to, the{' '}
        <a
          title='Mars Disclaimers/Disclosures'
          href='https://mars-protocol.medium.com/mars-disclaimers-disclosures-f44cc7c54a33'
          target='_blank'
          rel='noreferrer'
        >
          Mars Disclaimers.
        </a>
      </p>
    </footer>
  )
}

export default Footer
