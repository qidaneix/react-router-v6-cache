import { useOutlet, useLocation } from "react-router-dom";
import { useRef } from "react";
import { Freeze } from "react-freeze";

export function useCacheOutlets(context) {
  const { pathname, search, hash } = useLocation();
  const theKey = pathname + search + hash;

  const cacheRef = useRef({});
  const currentOutlet = useOutlet(context);

  if (!Object.prototype.hasOwnProperty.call(cacheRef.current, theKey)) {
    cacheRef.current[theKey] = currentOutlet;
  }

  const renderConfigs = Object.entries(cacheRef.current);

  return (
    <>
      {renderConfigs.map(([key, element]) => {
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

export function CacheOutlets({ context }) {
  return useCacheOutlets(context);
}
