import { FunctionComponent } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

const CLEAR = "clear";

export type ButtonInterface = {
  title: string;
  onClick: () => void;
  type?: string | Object;
  className?: string;
  selected?: boolean;
};

const Button: FunctionComponent<ButtonInterface> = ({
  title,
  onClick,
  type,
  className,
  selected,
}) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={cn(styles.wrapper, className, {
          [styles["button--clear"]]: type === CLEAR,
          [styles["button--selected"]]: selected,
        })}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
