import { getWeather } from "@/services/weather.service";
import { useQuery } from "@tanstack/react-query";

export function useWeather(city: string) {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
    enabled: false,
  });
}
