import styles from "../page.module.css"

function Product(props) {
    return (
      <div className={styles.productContainer}>
        <div className={styles.image}></div>
        <div className={styles.productTitle}>{props.name}</div>
        <div className={styles.productPrice}>{props.price}</div>
      </div>
    );
  }


export default Product;