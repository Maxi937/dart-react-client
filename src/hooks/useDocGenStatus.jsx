import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocGenStatus(env, startTime, endTime) {
  return useQuery({
    queryKey: ["docgenstatus", env],
    queryFn: ({ signal }) => dartService.getDocGenStatus(env, startTime, endTime, signal),
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: "false",
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
