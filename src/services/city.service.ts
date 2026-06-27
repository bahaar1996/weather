import axios from "axios";

export async function getCities(search: string, signal?: AbortSignal) {
  const { data } = await axios.get("api/cities", {
    params: {
      search,
    },
    signal,
  });
  return data;
}
