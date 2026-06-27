import { SnowIcon, SunnyIcon } from "../../public/images";

export const WEATHER_CONDITIONS = {
  1000: {
    en: "Sunny",
    fa: "آفتابی",
    icon: SunnyIcon,
  },
  1003: {
    en: "Partly cloudy",
    fa: "نیمه ابری",
    icon: SnowIcon,
  },
  1006: {
    en: "Cloudy",
    fa: "ابری",
    icon: "/weather/cloudy.svg",
  },
  1009: {
    en: "Overcast",
    fa: "کاملاً ابری",
    icon: "/weather/overcast.svg",
  },
  1030: {
    en: "Mist",
    fa: "مه رقیق",
    icon: "/weather/mist.svg",
  },
  1063: {
    en: "Patchy rain possible",
    fa: "احتمال بارش پراکنده",
    icon: { SnowIcon },
  },
  1066: {
    en: "Patchy snow possible",
    fa: "احتمال برف پراکنده",
    icon: SnowIcon,
  },
  1069: {
    en: "Patchy sleet possible",
    fa: "احتمال باران و برف",
    icon: "/weather/sleet-possible.svg",
  },
  1072: {
    en: "Patchy freezing drizzle possible",
    fa: "احتمال نم‌نم یخ‌زن",
    icon: "/weather/freezing-drizzle.svg",
  },
  1087: {
    en: "Thundery outbreaks possible",
    fa: "احتمال رعد و برق",
    icon: "/weather/thunder.svg",
  },
  1114: {
    en: "Blowing snow",
    fa: "کولاک برف",
    icon: "/weather/blowing-snow.svg",
  },
  1117: {
    en: "Blizzard",
    fa: "بوران شدید",
    icon: "/weather/blizzard.svg",
  },
  1135: {
    en: "Fog",
    fa: "مه",
    icon: "/weather/fog.svg",
  },
  1147: {
    en: "Freezing fog",
    fa: "مه یخ‌زن",
    icon: "/weather/freezing-fog.svg",
  },
  1150: {
    en: "Patchy light drizzle",
    fa: "نم‌نم پراکنده",
    icon: "/weather/drizzle.svg",
  },
  1153: {
    en: "Light drizzle",
    fa: "نم‌نم باران",
    icon: "/weather/drizzle.svg",
  },
  1168: {
    en: "Freezing drizzle",
    fa: "نم‌نم یخ‌زن",
    icon: "/weather/freezing-drizzle.svg",
  },
  1171: {
    en: "Heavy freezing drizzle",
    fa: "نم‌نم یخ‌زن شدید",
    icon: "/weather/freezing-drizzle-heavy.svg",
  },
  1180: {
    en: "Patchy light rain",
    fa: "باران پراکنده",
    icon: "/weather/light-rain.svg",
  },
  1183: {
    en: "Light rain",
    fa: "باران سبک",
    icon: "/weather/light-rain.svg",
  },
  1186: {
    en: "Moderate rain at times",
    fa: "باران متناوب متوسط",
    icon: "/weather/moderate-rain.svg",
  },
  1189: {
    en: "Moderate rain",
    fa: "باران متوسط",
    icon: "/weather/moderate-rain.svg",
  },
  1192: {
    en: "Heavy rain at times",
    fa: "باران شدید متناوب",
    icon: "/weather/heavy-rain.svg",
  },
  1195: {
    en: "Heavy rain",
    fa: "باران شدید",
    icon: "/weather/heavy-rain.svg",
  },
  1198: {
    en: "Light freezing rain",
    fa: "باران یخ‌زن سبک",
    icon: "/weather/freezing-rain.svg",
  },
  1201: {
    en: "Moderate or heavy freezing rain",
    fa: "باران یخ‌زن شدید",
    icon: "/weather/freezing-rain-heavy.svg",
  },
  1204: {
    en: "Light sleet",
    fa: "برف و باران سبک",
    icon: "/weather/sleet.svg",
  },
  1207: {
    en: "Moderate or heavy sleet",
    fa: "برف و باران شدید",
    icon: "/weather/sleet-heavy.svg",
  },
  1210: {
    en: "Patchy light snow",
    fa: "برف پراکنده سبک",
    icon: "/weather/light-snow.svg",
  },
  1213: {
    en: "Light snow",
    fa: "برف سبک",
    icon: "/weather/light-snow.svg",
  },
  1216: {
    en: "Patchy moderate snow",
    fa: "برف پراکنده متوسط",
    icon: "/weather/moderate-snow.svg",
  },
  1219: {
    en: "Moderate snow",
    fa: "برف متوسط",
    icon: "/weather/moderate-snow.svg",
  },
  1222: {
    en: "Patchy heavy snow",
    fa: "برف پراکنده شدید",
    icon: "/weather/heavy-snow.svg",
  },
  1225: {
    en: "Heavy snow",
    fa: "برف شدید",
    icon: "/weather/heavy-snow.svg",
  },
  1237: {
    en: "Ice pellets",
    fa: "تگرگ یخی",
    icon: "/weather/ice-pellets.svg",
  },
  1240: {
    en: "Light rain shower",
    fa: "رگبار سبک",
    icon: "/weather/rain-shower.svg",
  },
  1243: {
    en: "Moderate or heavy rain shower",
    fa: "رگبار شدید",
    icon: "/weather/rain-shower-heavy.svg",
  },
  1246: {
    en: "Torrential rain shower",
    fa: "رگبار سیل‌آسا",
    icon: "/weather/torrential-rain.svg",
  },
  1249: {
    en: "Light sleet showers",
    fa: "رگبار برف و باران سبک",
    icon: "/weather/sleet-shower.svg",
  },
  1252: {
    en: "Moderate or heavy sleet showers",
    fa: "رگبار برف و باران شدید",
    icon: "/weather/sleet-shower-heavy.svg",
  },
  1255: {
    en: "Light snow showers",
    fa: "رگبار برف سبک",
    icon: "/weather/snow-shower.svg",
  },
  1258: {
    en: "Moderate or heavy snow showers",
    fa: "رگبار برف شدید",
    icon: "/weather/snow-shower-heavy.svg",
  },
  1261: {
    en: "Light showers of ice pellets",
    fa: "رگبار سبک تگرگ",
    icon: "/weather/ice-pellets-shower.svg",
  },
  1264: {
    en: "Moderate or heavy showers of ice pellets",
    fa: "رگبار شدید تگرگ",
    icon: "/weather/ice-pellets-shower-heavy.svg",
  },
  1273: {
    en: "Patchy light rain with thunder",
    fa: "باران سبک همراه با رعد و برق",
    icon: "/weather/thunder-rain.svg",
  },
  1276: {
    en: "Moderate or heavy rain with thunder",
    fa: "باران شدید همراه با رعد و برق",
    icon: "/weather/thunder-rain-heavy.svg",
  },
  1279: {
    en: "Patchy light snow with thunder",
    fa: "برف سبک همراه با رعد و برق",
    icon: "/weather/thunder-snow.svg",
  },
  1282: {
    en: "Moderate or heavy snow with thunder",
    fa: "برف شدید همراه با رعد و برق",
    icon: "/weather/thunder-snow-heavy.svg",
  },
} as const;
