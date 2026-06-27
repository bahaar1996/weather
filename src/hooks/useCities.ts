import { getCities } from "@/services/city.service";
import { useQuery } from "@tanstack/react-query";

export function useCities(search: string) {
  return useQuery({
    queryKey: ["cities", search],
    queryFn: ({ signal }) => getCities(search, signal),
    enabled: search.length > 2,
  });
}
