import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useMigrationTest(documentModel, env) {
  return useQuery({
    queryKey: ["migrationTests", documentModel.mdl_nm, env],
    queryFn: ({ signal }) =>
      dartService.migrationTests(documentModel, env, signal),
    staleTime: 0,
    cacheTime: 0,
    refetchOnMount: false,
    retry: false,
  });
}
