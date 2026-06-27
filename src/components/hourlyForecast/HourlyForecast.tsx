"use client";
import { Temp } from "@/constants/consts";
import { useUnits } from "@/hooks/useUnits";
import { FormatToJalali } from "@/utils/date";

const HourlyForecast = ({ hourly }) => {
  const { tempState } = useUnits();
  return (
    <div>
      <div className="flex flex-col gap-3 mt-3">
        <div className="flex justify-between items-center bg-white/10 p-2 rounded-lg">
          <div>{tempState === Temp.C ? hourly.temp_c : hourly.temp_f}°</div>
          <div className="flex items-center gap-1">
            {FormatToJalali(hourly.time, "HH a")}
            <img
              width={40}
              height={40}
              src={`https:${hourly.condition.icon}`}
              alt={`https:${hourly.condition.text}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
