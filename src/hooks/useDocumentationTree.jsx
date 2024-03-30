import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocumentationTree() {
  return useQuery({
    queryKey: ["documentationTree"],
    queryFn: ({ signal }) => dartService.getDocumentationTree(signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    retry: false,
  });
}

export function useInvalidateDocumentation() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["documentationTree"] });
}

export function getDocuementationQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["documentationTree"]);
}

export function cancelDocumentationQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["documentationTree"]);
}
