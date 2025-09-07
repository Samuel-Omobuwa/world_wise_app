import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
        <PageNav />

      <section>
        <h1>You travel the world.</h1>
        <br />
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget you wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app" className='cta'>START TRACKING NOW</Link>
      </section>
    </main>
  );
};

export default Homepage;
