import { LogoSVG } from './Svg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <LogoSVG />
    </header>
  )
}

export default Header
