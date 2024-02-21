import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useCompare(baseline, candidate) {
  return useQuery({
    queryKey: ["compare", baseline, candidate],
    queryFn: ({ signal }) => dartService.compare(candidate, baseline, signal),
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnMount: false,
    retry: false,
  });
}

export function useCompares(compares) {
  return useQueries(
    compares.map((compare) => {
      useCompare(compare.baseline, compare.candidate);
    })
  );
}

export function useInvalidateCompares() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["compare"] });
}

export function getComparesQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["compare"]);
}

export function cancelComparesQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["compare"]);
}
