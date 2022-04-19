import { useOutlet, OutletProps } from "react-router-dom";
import React from "react";
import { useCreateCache } from "./CreateCache.tsx";

export function useCacheOutlet(
  context?: unknown,
  excludes?: string[]
): React.ReactElement | null {
  const currentOutlet = useOutlet(context);

  return useCreateCache(currentOutlet, excludes);
}

export function CacheOutlet({
  context,
  excludes,
}: OutletProps & { excludes?: string[] }): React.ReactElement | null {
  return useCacheOutlet(context, excludes);
}
