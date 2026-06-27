import Image from "next/image";
import { BgLarge } from "../../../public/images";
import { useTranslations } from "use-intl";
import { FormatToJalali } from "@/utils/date";
import { Temp } from "@/constants/consts";
import { useUnits } from "@/hooks/useUnits";
import { WEATHER_CONDITIONS } from "@/constants/weatherConditions";
const CurrentWeather = ({ weather }) => {
  const { location, current } = weather;
  const { tempState } = useUnits();
  const t = useTranslations();
  return (
    <div>
      <div className="flex gap-2 justify-between items-center absolute z-2 left-15 top-100 right-120">
        <div>
          <div className="text-4xl">
            {t(location.name)}، {t(location.country)}{" "}
          </div>
          <div className="mt-2">
            {FormatToJalali(location.localtime, "EEEE d MMMM yyyy")}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[70px]">
            {tempState === Temp.C ? current.temp_c : current.temp_f}°
          </div>
          <Image
            src={WEATHER_CONDITIONS[current.condition.code]?.icon}
            alt={current.condition.text}
            width={100}
            height={100}
          />
        </div>
      </div>
      <Image src={BgLarge} alt="bg-large" className="w-287.5 relative" />
    </div>
  );
};

export default CurrentWeather;
