import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocumentation(name) {
  return useQuery({
    queryKey: ["documentation", name],
    queryFn: ({ signal }) => dartService.getDocumentation(name, signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    retry: false,
  });
}

// export function useAllDocumentation(documentationNames) {
//   return useQueries(
//     documentationNames.map((documentationName) => {
//       useCompare(compare.baseline, compare.candidate);
//     })
//   );
// }

export function useInvalidateDocumentation() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["documentation"] });
}

export function getDocuementationQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["documentation"]);
}

export function cancelDocumentationQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["documentation"]);
}
