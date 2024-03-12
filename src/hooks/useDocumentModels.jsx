import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocumentModels(env) {
  return useQuery({
    queryKey: ["documentModels", env],
    queryFn: ({ signal }) =>
      dartService.getXpressionDocumentModels(env, signal),
    staleTime: 5 * 60 * 60 * 1000,
    cacheTime: 5 * 60 * 60 * 1000,
    refetchOnMount: false,
    retry: 2,
  });
}

export function useAllDocumentModels(envs) {
  const result = useQueries(
    envs.map((env) => {
      return {
        queryKey: ["documentModels", "env", env],
        queryFn: ({ signal }) =>
          dartService.getXpressionDocumentModels(env, signal),
        staleTime: Infinity,
        cacheTime: 0,
        refetchOnMount: false,
        retry: false,
      };
    })
  );
  return result;
}

export function useInvalidateDocumentModels() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["documentModels"] });
}

export function getDocumentModelsQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["documentModels"]);
}

export function cancelDocumentModelsQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["documentModels"]);
}
