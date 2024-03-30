import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useContentGroup(documentName, textClassId, env) {
  return useQuery({
    queryKey: ["contentGroup", documentName, textClassId, env],
    queryFn: ({ signal }) =>
      dartService.getContentGroup(documentName, textClassId, env, signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    retry: false,
  });
}

export function useContentGroups(documentName, textClassIds, env) {
  const result = useQueries(
    textClassIds.map((id) => {
      return {
        queryKey: ["contentGroup", documentName, id, env],
        queryFn: ({ signal }) =>
          dartService.getContentGroup(documentName, id, env, signal),
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnMount: false,
        retry: false,
      };
    })
  );
  return result;
}

// export function useInvalidateCompileBdt() {
//   const queryClient = useQueryClient();
//   queryClient.invalidateQueries({ queryKey: ["compileBdt"] });
// }

// export function getCompileBdtQuery(documentModelName, env) {
//   const queryClient = useQueryClient();
//   const query = queryClient.getQueryData([
//     "compileBdt",
//     documentModelName,
//     env,
//   ]);
//   return query;
// }

// export function cancelCompileBdtQuery() {
//   const queryClient = useQueryClient();
//   queryClient.cancelQueries(["compileBdt"]);
// }
