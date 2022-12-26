import styles from './index.module.scss'
// import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appContainer}>
        <div className={styles.widthBox}>
          <Header />
          <div className={styles.body}>
            <Home />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default App
