import cx from "classnames";
import { motion } from "framer-motion";

import Card from "@/components/Card";

import styles from "./index.module.scss";

export const CardSet = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.section
      className={cx(styles.CardSet, className)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.333 }}
      transition={{ staggerChildren: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export default Object.assign(CardSet, {
  Item: Card,
});
