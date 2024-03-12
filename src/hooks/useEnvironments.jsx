import { useQuery } from "react-query";
import { dartService } from "../service/dart-service";

export function useEnvironments() {
  return useQuery({
    queryKey: ["availableEnvironments"],
    queryFn: () => dartService.getEnvironments(),
    staleTime: 5 * 60 * 60 * 1000,
    cacheTime: 5 * 60 * 60 * 1000,
    refetchOnMount: false,
    retry: 2,
  });
}
