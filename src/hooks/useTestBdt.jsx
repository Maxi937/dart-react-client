import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useTestBdt(documentModel, env, bdt, enabled) {
  return useQuery({
    queryKey: ["testBdt", documentModel.mdl_nm, env],
    queryFn: ({ signal }) =>
      dartService.testBdt(documentModel, env, bdt, signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    retry: false,
    enabled: enabled,
  });
}

export function useInvalidateCompileBdt() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["compileBdt"] });
}

export function getCompileBdtQuery(documentModelName, env) {
  const queryClient = useQueryClient();
  const query = queryClient.getQueryData([
    "compileBdt",
    documentModelName,
    env,
  ]);
  return query;
}

export function cancelCompileBdtQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["compileBdt"]);
}
