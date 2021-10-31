import { FunctionComponent } from "react";
import Button, { ButtonInterface } from "../Button";

import style from "./Toggle.module.scss";

export type ToggleInterface = {
  buttons: ButtonInterface[];
};

const Toggle: FunctionComponent<ToggleInterface> = ({ buttons }) => {
  return <div className={style.wrapper}>{buttons.map(Button)}</div>;
};

export default Toggle;
