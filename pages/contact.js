import styles from "../styles/contact.module.scss";
import { contactAnimation } from "../animations";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    contactAnimation(), [];
  });
  return (
    <div className={styles.containerContact}>
      <div className={styles.innerContact}>
        <div className={styles.contactTextCon}>
          <div className={styles.contactText}>Contact</div>
        </div>
        <div className={styles.designer}>
          Developed by Lola Alaka (alakaoyinlola@gmail.com)
        </div>
        <div className={styles.designer}>Designed by mo.jahanii@gmail.com</div>
        <div className={styles.lineBreak}></div>
        <div className={styles.image}> Images from unsplash</div>
      </div>
    </div>
  );
};

export default Contact;
