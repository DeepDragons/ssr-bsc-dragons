import styles from "./index.module.scss";

import classNames from "classnames";
import React from "react";


type Prop = {
  value: number;
  max?: number;
  min?: number;
  onInput?: (value: number) => void;
};

export const Indexer: React.FC<Prop> = ({
  value,
  max = 1000,
  min = 0,
  onInput = () => null
}) => {
  const onInputNumber = React.useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const n = Number(e.currentTarget.value);

      if (max && max < n) {
        return onInput(max);;
      }

      if (!isNaN(n)) {
        onInput(n);
      }
    },
    [max],
  );

  const decrease = React.useCallback(() => {
    if (value <= 1) {
      return null;
    }

    onInput(value - 1);
  }, [value]);

  const increase = React.useCallback(() => {
    const newValue = value + 1;

    if (max && max < newValue) {
      return null;
    }

    onInput(newValue);
  }, [value, max]);

  return (
    <div className={styles.container}>
      <span
        className={styles.btn}
        onClick={decrease}
      >
        <svg width="36" height="2" viewBox="0 0 36 2" fill="none">
          <path d="M0 1H36" stroke="var(--text-color)" strokeWidth="2" />
        </svg>
      </span>
      <input
        value={value}
        max={max}
        min={min}
        type="text"
        onInput={onInputNumber}
      />
      <span
        className={styles.btn}
        onClick={increase}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M0 17H36M19 0L19 36" stroke="var(--text-color)" strokeWidth="2" />
        </svg>
      </span>
    </div>
  );
};
