"use client";
import { useTranslations } from "next-intl";
import CurrentWeather from "../currentWeather/CurrentWeather";
import Forecast from "../forecast/Forecast";
import HourlyForecast from "../hourlyForecast/HourlyForecast";
import Weather from "../weather/Weather";
import { useState } from "react";
import { FormatToJalali } from "@/utils/date";
import Week from "@/ui/week/Week";

const WeatherDetails = ({ weather }) => {
  const t = useTranslations();
  const today = FormatToJalali(new Date().toISOString(), "EEEE");
  const [daysOfWeek, setDaysOfWeek] = useState(today);
  function getDayOfWeek(day: string) {
    setDaysOfWeek(day);
  }
  const findDay = weather.forecast.forecastday.find((day) => {
    return FormatToJalali(day.date, "EEEE") === daysOfWeek;
  });

  return (
    <div className="grid grid-cols-12 mt-7 gap-4">
      <aside className="col-span-3 row-span-2 rounded-lg bg-white/10 p-4">
        <div className="flex justify-between">
          <h3 className="font-bold">پیش بینی ساعتی</h3>
          <div className="bg-white/10 rounded-lg p-1">
            <Week getDayOfWeek={getDayOfWeek} daysOfWeek={daysOfWeek} />
          </div>
        </div>
        {findDay?.hour?.slice(0, 9).map((hourly) => (
          <HourlyForecast key={hourly.time} hourly={hourly} />
        ))}
      </aside>
      <section className="col-span-9 justify-self-end">
        <CurrentWeather weather={weather} />
      </section>
      <section className="col-span-9">
        <section className="flex justify-between">
          <Weather data={weather.current.feelslike_c} title={t("feelsLike")} />
          <Weather data={`${weather.current.wind_mph}mph`} title={t("wind")} />
          <Weather
            data={`${weather.current.humidity}%`}
            title={t("humidity")}
          />
          <Weather
            data={`${weather.current.precip_in}in`}
            title={t("precipitation")}
          />
        </section>
        <section className="mt-8">
          <h3 className="my-3 font-bold">پیش بینی روزانه</h3>
          <div className="flex justify-between">
            {weather.forecast?.forecastday.map((day) => (
              <Forecast key={day.date} day={day} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default WeatherDetails;
