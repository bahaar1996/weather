"use client";

import { Temp } from "@/constants/consts";
import { useUnits } from "@/hooks/useUnits";
import { FormatToJalali } from "@/utils/date";

const Forecast = ({ day }) => {
  const { tempState } = useUnits();
  return (
    <div className="flex flex-col w-34 md:w-35  items-center rounded-lg bg-white/10 py-2 px-5">
      <div className="px-4">
        {FormatToJalali(day.date, "EEEE") ?? "روز های هفته"}
      </div>
      <img
        src={`https:${day.day.condition.icon}`}
        alt={day.day.condition.text}
        width={32}
        height={32}
      />
      <div className="flex gap-5">
        <span>
          {tempState === Temp.C ? day.day.mintemp_c : day.day.mintemp_f}°
        </span>
        <span>
          {tempState === Temp.C ? day.day.maxtemp_c : day.day.maxtemp_f}°
        </span>
      </div>
    </div>
  );
};

export default Forecast;
