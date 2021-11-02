import { FunctionComponent, useMemo, useState } from "react";
import Button, { ButtonInterface } from "../Button";

import style from "./Toggle.module.scss";

export type ToggleInterface = {
  buttons: ButtonInterface[];
};

const Toggle: FunctionComponent<ToggleInterface> = ({ buttons }) => {

  const buttonStartingPosition = useMemo( () => {
    return 0.5 * buttons.length - 0.5;
  }, [buttons])

  const [selected, setSelected] = useState(buttonStartingPosition);
  
  const selectedCSSVariable = {"--selected": selected} as React.CSSProperties;

  const toggles = useMemo(() => {
    return buttons.map((props, index) => (
      <Button
        {...props}
        onClick={() => {
          props.onClick?.();
          setSelected(buttonStartingPosition - index);
        }}
      />
    ));
  }, [buttons, buttonStartingPosition]);

  return (
    <div style={selectedCSSVariable} className={style.wrapper} >
      {toggles}
    </div>
  );
};

export default Toggle;
