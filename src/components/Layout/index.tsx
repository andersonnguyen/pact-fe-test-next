import Header from "@/components/Header";
import React from "react";
import { motion, Variants } from "framer-motion";
import SkipToContent from "@/components/SkipToContent";

const pageTransitionVariants: Variants = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: "linear",
      when: "beforeChildren",
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "linear",
      when: "beforeChildren",
    },
  },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      id="app"
      initial="hide"
      animate="show"
      exit="hide"
      variants={pageTransitionVariants}
    >
      <SkipToContent />
      <Header />
      <main id="content">{children}</main>
    </motion.div>
  );
};

export default Layout;
