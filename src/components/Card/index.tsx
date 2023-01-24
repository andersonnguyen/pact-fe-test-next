import cx from "classnames";
import { motion, Variants } from "framer-motion";

import Overline from "@/components/Overline";

import styles from "./index.module.scss";

interface CardProps {
  className?: string;
  overline?: string;
  title: string;
}

const cardVariants: Variants = {
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

export const Card = ({ overline, title, className }: CardProps) => {
  return (
    <motion.div className={cx(styles.Card, className)} variants={cardVariants}>
      {overline && <Overline className={styles.Overline}>{overline}</Overline>}
      <h3 className={styles.Title}>{title}</h3>
    </motion.div>
  );
};

export default Card;
