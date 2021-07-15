import styles from "../styles/about.module.scss";
import { useEffect } from "react";
import { aboutAnimation } from "../animations";

const About = () => {
  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.firstCard}>
          <div className={styles.firstImg}></div>
          <div className={styles.editorial}>Editorial</div>
        </div>
        <div className={styles.directorTexts}>
          <div className={styles.textGroup}>
            <div className={styles.top}>ART DIRECTOR</div>
            <div className={styles.bottom}>Geoff Levy</div>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.top}>CREATIVE DIRECTOR</div>
            <div className={styles.bottom}>Natailie Schneidery</div>
          </div>
          <div className={styles.textGroup}>
            <div className={styles.top}>DESIGNER</div>
            <div className={styles.bottom}>Em Design</div>
          </div>
        </div>
        <div className={styles.secondCard}>
          <div className={styles.secondImg}></div>
        </div>
        <div className={styles.thirdCard}>
          <div className={styles.editorialII}>Editorial</div>
          <div className={styles.thirdImg}></div>
        </div>
        <div className={styles.secondCard}>
          <div className={styles.fourthImg}></div>
        </div>
        <div className={styles.lowerCon}>
          <div className={styles.fifthImgCon}>
            <div className={styles.fifthImg}></div>
          </div>
          <div className={styles.sixthImgCon}>
            <div className={styles.sixthImg}></div>
          </div>
          <div className={styles.seventhImgCon}>
            <div className={styles.seventhImg}></div>
          </div>
        </div>
        <div className={styles.eightCard}>
          <div className={styles.threeEditCon}>
            <div className={styles.editorialIII}>Editorial</div>
            <div className={styles.editorialIII}>Editorial</div>
            <div className={styles.editorialIII}>Editorial</div>
          </div>
          <div className={styles.eightImg}></div>
        </div>
        <div className={styles.nextProjectCon}>
          <div className={styles.npImagesCon}>
            <div className={styles.ninthCard}>
              <div className={styles.ninthImg}></div>
            </div>
            <div className={styles.tenthCard}>
              <div className={styles.tenthImg}></div>
            </div>
            <div className={styles.eleventhCard}>
              <div className={styles.eleventhImg}></div>
            </div>
          </div>
          <div className={styles.nextProjectText}>Next Project</div>
        </div>
      </div>
    </div>
  );
};

export default About;
