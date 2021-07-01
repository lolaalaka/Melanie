import styles from "../styles/Home.module.scss";
import { useEffect } from "react";
import { homeAnimation } from "../animations";

const Homepage = () => {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className={styles.containerHome}>
      <div className={styles.innerHome}>
        <div className={styles.firstCard}>
          <div className={styles.img}></div>
          <div className={styles.bruxells}>lls</div>
        </div>
        <div className={styles.secondCard}>
          <div className={styles.imgMid}></div>
          <div className={styles.melanie}>Melanie</div>
        </div>
        <div className={styles.thirdCard}>
          <div className={styles.imgLast}></div>
          <div className={styles.problem}>Pro</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
