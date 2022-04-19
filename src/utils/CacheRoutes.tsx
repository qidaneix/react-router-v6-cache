import {
  useRoutes,
  createRoutesFromChildren,
  RouteObject,
  RoutesProps,
} from "react-router-dom";
import { Location } from "history";
import { useCreateCache } from "./CreateCache.tsx";

export function useCacheRoutes(
  routes: RouteObject[],
  locationArg?: Partial<Location> | string,
  excludes?: string[]
): React.ReactElement | null {
  const currentOutlet = useRoutes(routes, locationArg);

  return useCreateCache(currentOutlet, excludes);
}

export function CacheRoutes({
  children,
  location,
  excludes,
}: RoutesProps & { excludes?: string[] }): React.ReactElement | null {
  return useCacheRoutes(createRoutesFromChildren(children), location, excludes);
}
