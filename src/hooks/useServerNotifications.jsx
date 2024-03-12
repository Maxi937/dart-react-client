import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useServerNotifications() {
  return useQuery({
    queryKey: ["Notifications"],
    queryFn: ({ signal }) => dartService.getNotifcations(signal),
    staleTime: Infinity,
    cacheTime: 5 * 60 * 60 * 1000,
    refetchOnMount: false,
    retry: false,
  });
}

export function useInvalidateBaselineTree() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["Notifications"] });
}

export function getBaselineTreeQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["Notifications"]);
}

export function cancelBaselineTreeQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["Notifications"]);
}
