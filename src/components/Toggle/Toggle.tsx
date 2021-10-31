import { FunctionComponent, useMemo, useState } from "react";
import Button, { ButtonInterface } from "../Button";

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
        selected={selected === index}
        onClick={() => {
          // props?.onClick();
          setSelected(index);
        }}
      />
    ));
  }, [buttons, selected]);

  return <div className={style.wrapper}>{toggles}</div>;
};

export default Toggle;
