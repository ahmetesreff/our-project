import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <navigator className={styles.navBar}>
        <div className={styles.logo}>LOGO</div>
        NAVBAR
        <button className={styles.basketButton}>SEPET</button>
      </navigator>
      <section className={styles.mainBody}>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>Ürün Başlığı</div>
        <div className={styles.productPrice}>$300</div>
      </div>
      </section>
    </main>
  )
}
