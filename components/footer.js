import { useEffect } from "react";
import styles from "../styles/Layout.module.scss";
import { footerAnimation } from "../animations";

const Footer = () => {
  useEffect(() => {
    footerAnimation();
  }, []);

  return (
    <div className={styles.con}>
      <footer className={styles.footer}>
        <div className={styles.photographer}>PHOTOGRAPHER</div>
        <div className={styles.photographer}>05/13</div>
      </footer>
    </div>
  );
};

export default Footer;
