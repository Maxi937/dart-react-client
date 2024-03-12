import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useAnalyseBdt(documentModelCode) {
  return useQuery({
    queryKey: ["analyseBdt", documentModelCode],
    queryFn: ({ signal }) => dartService.analyseBdt(documentModelCode, signal),
    staleTime: Infinity,
    cacheTime: 0,
    refetchOnMount: false,
    retry: false,
  });
}

export function useInvalidateBdt() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["analyseBdt"] });
}

export function getBdtQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["analyseBdt"]);
}

export function cancelBdtQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["analyseBdt"]);
}
