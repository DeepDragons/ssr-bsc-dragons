import type { DragonObject } from "@/types/dragon";

import styles from "./index.module.scss";

import React from "react";

import RarityImage from "components/rarity-image";


type Prop = {
  dragon: DragonObject;
  children?: React.ReactNode;
  onSelect?: () => void;
};


export var Card: React.FC<Prop> = function ({
  dragon,
  children,
  onSelect = () => null,
}) {
  return (
    <div className={styles.container}>
      <RarityImage
        id={dragon.id}
        rarity={dragon.rarity}
        url={dragon.url}
        onClick={onSelect}
      />
      {children}
    </div>
  );
};

