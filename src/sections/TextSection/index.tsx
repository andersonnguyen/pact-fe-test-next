import cx from "classnames";
import { motion, Variants } from "framer-motion";

import Overline from "@/components/Overline";

import styles from "./index.module.scss";

interface TextSectionProps {
  className?: string;
  overline: string;
  title: string;
  children?: React.ReactNode;
}

const colVariants: Variants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 50,
    },
  },
};

export const TextSection = ({
  className,
  overline,
  title,
  children,
}: TextSectionProps) => {
  return (
    <motion.section
      className={cx(styles.TextSection, className)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div className={styles.Left} variants={colVariants}>
        <Overline className={styles.Overline}>{overline}</Overline>
      </motion.div>
      <div className={styles.Right}>
        <motion.h2 className={styles.Title} variants={colVariants}>
          {title}
        </motion.h2>
        <motion.div variants={colVariants}>{children}</motion.div>
      </div>
    </motion.section>
  );
};

export default TextSection;
