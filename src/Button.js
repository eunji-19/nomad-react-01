import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
  //   return (
  //     <button
  //       style={{
  //         color: "white",
  //         fontWeight: "bold",
  //         backgroundColor: "#f0a500",
  //         border: "none",
  //         borderRadius: "10px",
  //         padding: "10px 20px",
  //       }}
  //     >
  //       {text}
  //     </button>
  //   );
}

Button.propTypes = { text: PropTypes.string.isRequired };
export default Button;
