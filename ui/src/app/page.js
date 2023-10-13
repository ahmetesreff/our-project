import styles from './page.module.css'
import ProductList from './components/ProductList'

export default function Home() {



  return (
    <main className={styles.main}>
      <navigator className={styles.navBar}>
        <div className={styles.logo}>LOGO</div>
        NAVBAR
        <button className={styles.basketButton}>SEPET</button>
      </navigator>
      <section className={styles.mainBody}>
        <ProductList />
      </section>
    </main>
  );
}
