import { useQuery } from "react-query";
import { dartService } from "../service/dart-service";

export function useEnvironments() {
  return useQuery({
    queryKey: ["availableEnvironments"],
    queryFn: () => dartService.getEnvironments(),
    staleTime: Infinity,
    retry: false
  });
}
