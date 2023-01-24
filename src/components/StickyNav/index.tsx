import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Logo from "@/svg/logo.svg";
import { useState, useEffect } from "react";
import styles from "./index.module.scss";

const stickyNavVariants: Variants = {
  hide: { y: "-100%", opacity: 0 },
  show: { y: "0%", opacity: 1 },
};

export const StickyNav = ({
  items,
  headerHeight,
}: {
  items: [];
  headerHeight: number;
}) => {
  const [isSticky, setIsSticky] = useState(false);

  // set the sticky nav to show when it scrolls pass the header
  const triggerSticky = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > headerHeight ? setIsSticky(true) : setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", triggerSticky);

    return () => {
      window.removeEventListener("scroll", triggerSticky);
    };
  });

  return (
    <motion.div
      className={styles.StickyContainer}
      initial="hide"
      animate={isSticky ? "show" : "hide"}
      variants={stickyNavVariants}
      transition={{ type: "spring", bounce: 0 }}
    >
      <div className={styles.Wrapper}>
        <nav className={styles.StickyNav}>
          <div className={styles.Left}>
            <button className={styles.NavToggler} title="Toggle nav">
              <span className={styles.NavTogglerIcon} />
            </button>
            <Link href="/" className={styles.HomeLink}>
              <Logo className={styles.Logo} />
            </Link>
          </div>
          <div className={styles.Center}>
            <ul className={styles.NavList}>
              {items.map((link: { title: string; path: string }) => (
                <li className={styles.NavItem} key={link.path}>
                  <a className={styles.NavLink} href="#">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.Right}>
            <a href="#" className={styles.NavButton}>
              Get In Touch
            </a>
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default StickyNav;
