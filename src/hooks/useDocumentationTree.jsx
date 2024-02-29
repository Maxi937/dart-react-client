import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useDocumentationTree() {
  return useQuery({
    queryKey: ["documentationTree"],
    queryFn: ({ signal }) => dartService.getDocumentationTree(signal),
    staleTime: Infinity,
    cacheTime: 0,
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
