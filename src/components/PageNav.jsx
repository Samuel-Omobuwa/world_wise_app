
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css"

const PageNav = () => {
  return (
    <div>
      <nav>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
};

export default PageNav;
