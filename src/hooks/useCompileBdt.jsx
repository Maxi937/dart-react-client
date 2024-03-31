import { useQuery, useQueries, useQueryClient } from "react-query";
import { dartService } from "../service/dart-service";

export function useCompileBdt(documentModel, env, xml, enabled) {

  return useQuery({
    queryKey: ["compileBdt", documentModel.mdl_nm, env, xml],
    queryFn: ({ signal }) =>
      dartService.compileBdt(documentModel, env, xml, signal),
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    onSuccess: (data) => {
      data.compile.sequence = ruleRollUp(data.compile.sequence)
      console.log(data)
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

    if (Object.keys(d)[0] == "SubDocument") {
      obj.block = ruleRollUp(obj.block);
    }

    if (Object.keys(d)[0] == "If") {
      obj.true = ruleRollUp(obj.true);

      if (obj.false) {
        obj.false = ruleRollUp(obj.false);
      }
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
