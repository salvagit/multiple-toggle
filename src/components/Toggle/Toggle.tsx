import { FunctionComponent, useMemo, useState } from "react";
import Button, { ButtonInterface } from "../Button";
import cn from "classnames";

import style from "./Toggle.module.scss";

export type ToggleInterface = {
  buttons: ButtonInterface[];
};

const Toggle: FunctionComponent<ToggleInterface> = ({ buttons }) => {
  const [selected, setSelected] = useState(-1);

  const toggles = useMemo(() => {
    return buttons.map((props, index) => (
      <Button
        {...props}
        onClick={() => {
          props.onClick?.();
          setSelected(index);
        }}
      />
    ));
  }, [buttons]);

  return (
    <div
      className={cn(style.wrapper, {
        [style["wrapper--first"]]: selected === 0,
        [style["wrapper--middle"]]: selected === 1,
        [style["wrapper--last"]]: selected === 2,
      })}
    >
      {toggles}
    </div>
  );
};

export default Toggle;
