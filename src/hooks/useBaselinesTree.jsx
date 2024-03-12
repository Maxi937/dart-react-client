import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useBaselineTree() {
  return useQuery({
    queryKey: ["baselineTree"],
    queryFn: ({ signal }) => dartService.getBaselineTree(signal),
    staleTime: Infinity,
    cacheTime: 5 * 60 * 60 * 1000,
    refetchOnMount: false,
    retry: false,
  });
}

export function useInvalidateBaselineTree() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["baselineTree"] });
}

export function getBaselineTreeQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["baselineTree"]);
}

export function cancelBaselineTreeQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["baselineTree"]);
}
