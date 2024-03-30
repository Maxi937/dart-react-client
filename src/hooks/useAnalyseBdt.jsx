import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useAnalyseBdt(documentModel, env, enabled) {
  return useQuery({
    queryKey: ["analyseBdt", documentModel.mdl_nm, env],
    queryFn: ({ signal }) => dartService.analyseBdt(documentModel, env, signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    onSuccess: (data) => {
      // data.analyser.bdtsequence = ruleRollUp(data.analyser.bdtsequence);
    },
    retry: false,
    enabled: enabled,
  });
}

function ruleRollUp(data) {
  const result = [];

  data.map((d) => {
    const obj = d[Object.keys(d)[0]];
    const last = result[result.length - 1];

    if (Object.keys(d)[0] == "Rule") {
      obj.items = [];
      return result.push(d);
    }

    if (Object.keys(d)[0] == "Section") {
      obj.block = ruleRollUp(obj.block);
    }

    if (Object.keys(d)[0] == "If") {
      obj.true = ruleRollUp(obj.true);
    }

    if (last) {
      if (Object.keys(last)[0] == "Rule") {
        return last[Object.keys(last)[0]].items.push(d);
      }
    }

    return result.push(d);
  });

  return result;
}

export function useInvalidateBdt() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["analyseBdt"] });
}

export function getBdtQuery() {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  return queryCache.findAll(["analyseBdt"]);
}

export function cancelBdtQuery() {
  const queryClient = useQueryClient();
  queryClient.cancelQueries(["analyseBdt"]);
}
