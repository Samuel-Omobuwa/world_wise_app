import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>About Worldwide.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            error vitae necessitatibus aspernatur voluptates minus non sit esse,
            perspiciatis quibusdam ad. Exercitationem omnis nobis similique, sed
            distinctio aspernatur iste libero.
          </p>
        </div>
        <img src="img-1.jpg" alt="overview of a large city with skyscrappers" />
      </section>
    </main>
  );
}

export default Product;
