import React from "react";
import cx from "classnames";

import styles from "./index.module.scss";

interface ButtonProps extends HTMLElement {
  as?: React.ElementType;
}

export const Button: React.ElementType = React.forwardRef<
  HTMLElement,
  ButtonProps
>(({ as: Component = "button", className, children, ...props }, buttonRef) => {
  return (
    <Component
      ref={buttonRef}
      className={cx(styles.Button, className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;
