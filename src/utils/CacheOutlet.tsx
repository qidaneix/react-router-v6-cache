import { useOutlet, OutletProps } from "react-router-dom";
import React from "react";
import { useCreateCache } from "./CreateCache.tsx";

export function useCacheOutlet(context?: unknown): React.ReactElement | null {
  const currentOutlet = useOutlet(context);

  return useCreateCache(currentOutlet);
}

export function CacheOutlet({
  context,
}: OutletProps): React.ReactElement | null {
  return useCacheOutlet(context);
}
