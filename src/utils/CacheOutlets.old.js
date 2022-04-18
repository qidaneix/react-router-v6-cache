import react, {
  useRef,
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { Freeze } from "react-freeze";

// function useForceUpdate() {
//   const [, setState] = useState(0);
//   const forceUpdate = useCallback(() => setState((s) => s + 1), []);
//   return forceUpdate;
// }

function useCacheOutlets(context) {
  const cacheOutlets = useRef({});
  const outletRenderKeys = useRef({});
  const currentOutlet = useOutlet(context);
  const { pathname, search, hash } = useLocation();
  const matchedPath = pathname + search + hash;

  //   const matchedPath = [...(currentOutlet?.props?.values?.matches ?? [])].pop()
  //     ?.pathname;
  // const matchedPath = window.location.href;
  console.log("matchedPath", matchedPath);
  if (matchedPath) {
    cacheOutlets.current[matchedPath] = currentOutlet;
    outletRenderKeys.current[matchedPath] =
      outletRenderKeys.current[matchedPath] ?? Math.random();
  }

  const renderConfigs = Object.entries(cacheOutlets.current);

  //   cacheOutlets.current = {}

  return (
    <>
      {renderConfigs.map(([pathname, element]) => {
        //   cacheOutlets.current[pathname] = element;

        const key = outletRenderKeys.current[pathname];
        const isMatch = currentOutlet === element;
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
