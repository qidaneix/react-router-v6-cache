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
  locationArg?: Partial<Location> | string
): React.ReactElement | null {
  const currentOutlet = useRoutes(routes, locationArg);

  return useCreateCache(currentOutlet);
}

export function CacheRoutes({
  children,
  location,
}: RoutesProps): React.ReactElement | null {
  return useCacheRoutes(createRoutesFromChildren(children), location);
}
