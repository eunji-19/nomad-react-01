import { Link } from "react-router-dom";
import styles from "../css/Navigator.module.css";

function Navigation() {
  return (
    <div className={styles.nav}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        About
      </Link>
    </div>
  );
}

export default Navigation;
