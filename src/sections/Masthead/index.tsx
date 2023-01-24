import React from "react";
import cx from "classnames";
import { motion, Variants } from "framer-motion";

import ParallaxImage from "@/components/ParallaxImage";
import CheckCircle from "@/svg/check-circle.svg";

import styles from "./index.module.scss";

// List component
const List = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) => {
  return <ul className={cx(styles.List, className)} {...props} />;
};

const listItemVariants: Variants = {
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

const ListItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.li
      className={cx(styles.ListItem, className)}
      variants={listItemVariants}
    >
      <CheckCircle className={styles.ListItemIcon} />
      <span className={styles.ListItemText}>{children}</span>
    </motion.li>
  );
};

// title animations
const titleVariants: Variants = {
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

// Masthead
interface MastheadProps {
  className?: string;
  children?: React.ReactNode;
  title: React.ReactNode;
  image?: string;
}

export const Masthead = ({
  className,
  children,
  image,
  title,
}: MastheadProps) => {
  return (
    <motion.header
      className={cx(styles.Masthead, className, {
        [`${styles.HasImage}`]: image,
      })}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay: 0.5,
        staggerChildren: 0.125,
      }}
    >
      <div className={styles.MastheadContent}>
        <motion.h1 className={styles.Title} variants={titleVariants}>
          {title}
        </motion.h1>
        {children}
      </div>
      {image && <ParallaxImage src={image} className={styles.FeaturedImage} />}
    </motion.header>
  );
};

export default Object.assign(Masthead, {
  List: List,
  ListItem: ListItem,
});
