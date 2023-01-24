import Image from "next/image";
import cx from "classnames";
import { motion, Variants, useScroll, useTransform } from "framer-motion";

import styles from "./index.module.scss";

const imageVariants: Variants = {
  offscreen: {
    y: 100,
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

/**
 * Draw animation
 */
const draw: Variants = {
  offscreen: { pathLength: 0, opacity: 0 },
  onscreen: {
    pathLength: 0.5, // 0.5 because we want half of the circle since it is clipped.
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const CirclePart = ({
  color,
  variants,
}: {
  color: string;
  variants: Variants;
}) => {
  return (
    <motion.svg
      className={styles.CirclePart}
      width="712"
      height="328"
      viewBox="0 0 712 328"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      fill="none"
    >
      <motion.circle
        cx="355.5"
        cy="-27.5"
        r="306.5"
        stroke={color}
        stroke-width="103"
        variants={variants}
      />
    </motion.svg>
  );
};

export const ParallaxImage = ({
  src,
  className,
}: {
  src: string;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [40, -80]);
  const y2 = useTransform(scrollY, [0, 500], [20, -30]);

  return (
    <motion.div
      className={cx(styles.Wrapper, className)}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={imageVariants}
      >
        <Image
          className={styles.Image}
          src={src}
          alt="Featured Image"
          width={1232}
          height={659}
        />
      </motion.div>
      <motion.div className={styles.CircleRight} style={{ y: y1 }}>
        <CirclePart color="var(--green)" variants={draw} />
      </motion.div>
      <motion.div className={styles.CircleLeft} style={{ y: y2 }}>
        <CirclePart color="#D08D1E" variants={draw} />
      </motion.div>
    </motion.div>
  );
};

export default ParallaxImage;
