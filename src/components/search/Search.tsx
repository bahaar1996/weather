"use client";
import { useCities } from "@/hooks/useCities";
import { useWeather } from "@/hooks/useWeather";
import SpinComponent from "@/ui/spin/Spin";
import { Button } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { SearchIcon } from "../../../public/images";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import WeatherDetailsSkeleton from "../weatherDetailsSkeleton/WeatherDetailsSkeleton";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const { data: cities = [], isLoading: isLoadingCities } = useCities(query);
  const {
    data: weather,
    isLoading: isLoadingWeather,
    refetch,
  } = useWeather(selectedCity);

  async function handleSearch() {
    await refetch();
  }
  console.log("heyy", weather?.forecast?.forecastday?.length);
  async function handleClickOption(city: string) {
    setQuery(city);
    setIsOpen(false);
    setSelectedCity(city);
  }
  return (
    <>
      <div className="md:flex md:justify-center gap-4 mt-7">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 p-2 rounded-lg border-0 bg-white/10">
            <Image src={SearchIcon} alt="searchIcon" className="w-4 h-4" />
            <input
              value={query}
              onFocus={() => setIsOpen(true)}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              name="search"
              placeholder="جستجوی مکان..."
              className="text-neutral-300 outline-0 min-w-75"
            />
          </div>
          <div className="text-[12px] text-gray-400">
            لطفا نام شهر را به انگلیسی وارد کنید
          </div>
          {isOpen && (
            <div className="rounded-lg border-0 bg-neutral-800 ">
              {cities.map((city) => (
                <div
                  key={city.id}
                  onClick={() => handleClickOption(city.name)}
                  className="text-white rounded-lg cursor-pointer hover:bg-neutral-500 p-2 m-1"
                >
                  {city.name}
                </div>
              ))}
            </div>
          )}
          {isLoadingCities && (
            <SpinComponent
              styles="flex justify-center items-center mt-2"
              size="large"
            />
          )}
        </div>
        <Button
          onClick={handleSearch}
          className="bg-blue-800 text-white rounded-lg px-3 w-full h-11 mt-2 md:w-fit md:max-h-10 md:mt-0"
        >
          جستجو
        </Button>
      </div>
      {weather && <WeatherDetails weather={weather} />}
      {isLoadingWeather && <WeatherDetailsSkeleton />}
    </>
  );
};

export default Search;

//search cities by axios
// const getCities = useCallback(async () => {
//   const timer = setTimeout(async () => {
//     if (query.length < 1) {
//       setResult([]);
//       return;
//     }

//     try {
//       const response = await axios.get(`/api/cities?search=${query}`);
//       console.log("response.data=>>", response.data);
//       setResult(response.data);
//     } catch (error) {
//       console.error("error fetching cities", error);
//       setResult([]);
//     }
//   }, 400);
//   return () => clearTimeout(timer);
// }, [query]);

// useEffect(() => {
//   getCities();
// }, [getCities]);
