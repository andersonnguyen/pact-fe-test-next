import React from "react";
import cx from "classnames";
import styles from "./index.module.scss";

export const Overline = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => {
  return <p className={cx(styles.Overline, className)} {...props} />;
};

export default Overline;
