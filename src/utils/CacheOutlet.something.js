// import { useOutlet, useLocation } from "react-router-dom";
// import { useRef } from "react";

// export function useCacheOutlet(context) {
//   // const location = useLocation();
//   // console.log(location);
//   console.log("window.location", window.location);

//   const cacheRef = useRef(new Map());
//   const childReactElement = useOutlet(context);
//   const href = window.location.href;

//   if (cacheRef.current.has(href)) return cacheRef.current.get(href);

//   cacheRef.current.set(href, childReactElement);
//   return childReactElement;
// }

// export function CacheOutlet({ context }) {
//   const childReactElement = useCacheOutlet(context);
//   return childReactElement;
// }
