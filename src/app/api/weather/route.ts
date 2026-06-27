import { getWeather } from "@/services/weather.service";
import { NextRequest, NextResponse } from "next/server";
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

export async function GET(req: NextRequest) {
  try {
    const city = req.nextUrl.searchParams.get("city");
    if (!city) {
      return NextResponse.json(
        {
          message: "city is required",
        },
        { status: 400 },
      );
    }

    const params = new URLSearchParams({
      key: process.env.WEATHER_API_KEY!,
      q: city,
      days: "7",
      aqi: "no",
    });

    const response = await fetch(`${BASE_URL}?${params}`);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
