import { useOutlet } from "react-router-dom";

export function useCacheOutlet(context) {
  const childReactElement = useOutlet(context);
  return childReactElement;
}

export function CacheOutlet({ context }) {
  const childReactElement = useCacheOutlet(context);
  return childReactElement;
}
