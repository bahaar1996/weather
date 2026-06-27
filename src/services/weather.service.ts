import axios from "axios";

export async function getWeather(city: string) {
  const { data } = await axios("api/weather", {
    params: { city },
  });
  return data;
}
