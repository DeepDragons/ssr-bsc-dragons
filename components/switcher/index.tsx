import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";


type Prop = {
  elements: string[];
  selected?: number;
  onSelect: (index: number) => void;
};

export const Switcher: React.FC<Prop> = ({
  elements,
  selected = 0,
  onSelect = () => null
}) => {
  return (
    <ul className={styles.container}>
      {elements.map((el, index) => (
        <li
          className={classNames(styles.item, {
            selected: selected === index
          })}
          key={index}
          onClick={() => onSelect(index)}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};
