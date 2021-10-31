import { FunctionComponent } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

const CLEAR = "clear";

export type ButtonInterface = {
  title: string;
  onClick: () => {};
  type?: string | Object;
  className?: string;
};

const Button: FunctionComponent<ButtonInterface> = ({
  title,
  onClick,
  type,
  className,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.wrapper, className, {
          [styles["button--clear"]]: type === CLEAR,
        })}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
