import Image from "next/image";
import { BgLarge, BgSmall } from "../../../public/images";
import { useTranslations } from "use-intl";
import { FormatToJalali } from "@/utils/date";
import { Temp } from "@/constants/consts";
import { useUnits } from "@/hooks/useUnits";
import { WEATHER_CONDITIONS } from "@/constants/weatherConditions";
const CurrentWeather = ({ weather }) => {
  const { location, current } = weather;
  const { tempState } = useUnits();
  const t = useTranslations();
  console.log("bg large", BgLarge);
  console.log("type of bglarge", typeof BgLarge);
  return (
    <div className="relative">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center absolute z-2 left-0 right-0 top-[30%] md:left-[5%] md:top-[30%] md:right-[5%] ">
        <div>
          <div className="text-4xl">
            {t(location.name)}، {t(location.country)}{" "}
          </div>
          <div className="mt-2">
            {FormatToJalali(location.localtime, "EEEE d MMMM yyyy")}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-4xl">
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
      <picture>
        <source
          media="(min-width:650px)"
          srcSet={BgLarge.src}
          className="w-full"
        />
        <source media="(min-width:465px)" srcSet={BgSmall.src} />
        <img src={BgSmall.src} className="w-full " />
      </picture>
    </div>
  );
};

export default CurrentWeather;
