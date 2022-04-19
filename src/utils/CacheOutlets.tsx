import { useOutlet, OutletProps } from "react-router-dom";
import React from "react";
import { useCreateCache } from "./CreateCache.tsx";

export function useCacheOutlets(context?: unknown): React.ReactElement | null {
  const currentOutlet = useOutlet(context);

  return useCreateCache(currentOutlet);
}

export function CacheOutlets({
  context,
}: OutletProps): React.ReactElement | null {
  return useCacheOutlets(context);
}
