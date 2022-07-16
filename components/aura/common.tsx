import React from "react";
import ProgressiveImage from "react-progressive-graceful-image";

import { EMPTY } from "config/emty";

type Prop = {
  id: string;
  url: string;
  width?: string | number;
  height?: string | number;
  color: string;
  onClick?: () => void;
};

export var CommonAura: React.FC<Prop> = function ({
  id,
  color,
  url,
  width = 250,
  height = 250,
  onClick = () => null,
}) {
  const [loadError, setLoadError] = React.useState(false);

  return (
    <svg width={width} height={height} viewBox="25 25 275 265" fill="none">
      <circle cx="160" cy="160" r="127.5" fill="var(--black-color)" stroke={color} />
      <circle cx="160" cy="159" r="116" fill="var(--black-color)" />
      <circle
        cx="160"
        cy="159"
        r="116"
        fill={`url(#pattern-${id})`}
        onClick={onClick}
      />
      <circle cx="160.5" cy="159.5" r="116" stroke={color} />
      <defs>
        <pattern
          id={`pattern-${id}`}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref={`#dragon-${id}`}
            transform="scale(0.00399)"
          />
        </pattern>
        <ProgressiveImage src={url} placeholder={url}>
          {(src: string) => (
            <image
              id={`dragon-${id}`}
              width={width}
              xlinkHref={loadError ? EMPTY : src}
              color={color}
              onError={() => setLoadError(true)}
            />
          )}
        </ProgressiveImage>
      </defs>
    </svg>
  );
};
