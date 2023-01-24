import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRect } from "@reach/rect";
import Logo from "@/svg/logo.svg";
import StickyNav from "@/components/StickyNav";

import styles from "./index.module.scss";
import { links } from "./links";

const headerVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

export const Header = () => {
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const headerRef = useRef();
  const headerRect = useRect(headerRef);

  useEffect(() => {
    if (headerRect) {
      setHeaderHeight(headerRect.height);
    }
  }, [headerRect]);

  return (
    <>
      <motion.header
        ref={headerRef}
        className={styles.SiteHeader}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className={styles.Wrapper} variants={headerVariants}>
          <div className={styles.Left}>
            <nav>
              <button className={styles.NavToggler} title="Toggle nav">
                <span className={styles.NavTogglerIcon} />
              </button>
              {/*
              <ul className={styles.MobileNavList}>
                {links.map((link) => (
                  <li className={styles.MobileNavItem} key={link.path}>
                    <Link className={styles.MobileNavLink} href={link.path}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            */}
            </nav>
            <Link href="/" className={styles.HomeLink}>
              <Logo className={styles.Logo} />
            </Link>
          </div>
          <div className={styles.Center}>
            <nav className={styles.SiteNav}>
              <ul className={styles.DesktopNavList}>
                {links.map((link) => (
                  <li className={styles.DesktopNavItem} key={link.path}>
                    <a className={styles.DesktopNavLink} href="#">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.Right}>
            <a href="#" className={styles.NavButton}>
              Get In Touch
            </a>
          </div>
        </motion.div>
      </motion.header>
      <StickyNav items={links} headerHeight={headerHeight} />
    </>
  );
};

export default Header;
