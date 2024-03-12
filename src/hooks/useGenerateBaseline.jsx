import { useQueries, useQuery, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useGenerateBaseline(env, DocumentModelCode, name) {
  return useQuery({
    queryKey: ["baseline", env, name],
    queryFn: ({ signal }) =>
      dartService.generateBaseline(env, DocumentModelCode, name, signal),
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnMount: false,
    retry: false,
  });
}

export function useInvalidateBaseline() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["baseline"] });
}

export function getBaselineQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["baseline"]);
}

export function cancelBaselineQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["baseline"]);
}
