import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocGenStatus(query) {
  return useQuery({
    queryKey: ["docgenstatus", query],
    queryFn: ({ signal }) => dartService.getDocGenStatus(query, signal),
    staleTime: 0,
    cacheTime: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });
}

export function useAllDocGenStatus(envs) {
  return useQueries(
    envs.map((env) => {
      useDocGenStatus(env);
    })
  );
}

export function useInvalidateDocGenQuery() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["docgenstatus"] });
}

export function getDocGenQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["docgenstatus"]);
}

export function cancelDocGenQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["docgenstatus"]);
}
