import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocumentModels(env) {
  return useQuery({
    queryKey: ["documentModels", env],
    queryFn: ({ signal }) => dartService.getXpressionDocumentModels(env, signal),
    staleTime: 36000,
    cacheTime: 36000,
    refetchOnMount: false,
    retry: 2,
  });
}

export function useAllDocumentModels(envs) {
  return useQueries(
    envs.map((env) => {
      useDocumentModels(env);
    })
  );
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
