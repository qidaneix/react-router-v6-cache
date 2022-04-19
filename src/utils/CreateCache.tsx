import { useLocation } from "react-router-dom";
import React, { useRef } from "react";
import { Freeze } from "react-freeze";

export function useCreateCache(
  element: React.ReactElement
): React.ReactElement | null {
  const cacheRef = useRef<Record<string, React.ReactElement>>({});

  const { pathname, search, hash } = useLocation();
  const theKey = pathname + search + hash;

  if (!Object.prototype.hasOwnProperty.call(cacheRef.current, theKey)) {
    cacheRef.current[theKey] = element;
  }

  return (
    <>
      {Object.entries(cacheRef.current).map(([key, element]) => {
        const isMatch = key === theKey;
        return (
          <Freeze key={key} freeze={!isMatch}>
            {element}
          </Freeze>
        );
      })}
    </>
  );
}
