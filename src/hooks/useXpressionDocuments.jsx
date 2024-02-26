import { useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useXpressionDocuments(env, DocumentModelCode, files) {
  const result = useQueries(
    files.map((file) => {
      return {
        queryKey: ["xpression", file.path, "env", env],
        queryFn: ({ signal }) =>
          dartService.generateXpression(env, DocumentModelCode, file, signal),
        staleTime: Infinity,
        cacheTime: 0,
        refetchOnMount: false,
        retry: false,
      };
    })
  );
  return result;
}

export function useInvalidateXpressionDocuments() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["xpression"] });
}

export function getXpressionDocumentsQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["xpression"])
}

export function cancelXpressionDocumentsQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["xpression"])
}
