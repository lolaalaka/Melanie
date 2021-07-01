import gsap from "gsap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { navAnimation, dropAnimation } from "../animations";
import styles from "../styles/Layout.module.scss";
import Link from "next/link";

const tl = gsap.timeline();

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [showHam, setShowHam] = useState(true);
  const router = useRouter();

  const openDropDown = () => {
    setDropDown(!dropDown);
    setShowHam(!showHam);
  };

  const hideDropDown = () => {
    setDropDown(!dropDown);
    setShowHam(true);

    setDropDown === !dropDown ? dropAnimation().reverse() : dropAnimation();
  };

  useEffect(() => {
    navAnimation();
  }, []);

  useEffect(() => {
    dropAnimation();
  }, [!showHam]);

  return (
    <div className={styles.con}>
      <nav className={styles.navContainer}>
        <Link href="/homepage">
          <a className={styles.navAbout}>HOME</a>
        </Link>
        <Link href="/">
          <a className={styles.navMid}>
            <img src="/Logo.png" className={styles.logo} />
          </a>
        </Link>
        <Link href="/contact">
          <a className={styles.navAboutII}>CONTACT</a>
        </Link>
        <div
          className={showHam === true ? "hamCon" : "hamConHide"}
          onClick={openDropDown}
        >
          <div className={styles.ham}></div>
          <div className={styles.ham}></div>
          <div className={styles.ham}></div>
        </div>
        <div
          className={dropDown === true ? "dropDownConVisible" : "dropDownCon"}
        >
          <div
            className={
              router.asPath === "/about" ? "dropDownAbout" : "dropDown"
            }
          >
            <div className="textCon">
              <a href="/homepage">
                <div className="ddText">Home</div>
              </a>
              <a href="/contact">
                <div className="ddText">Contact</div>
              </a>
            </div>

            <span className="close" onClick={hideDropDown}>
              <svg
                width="20"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
