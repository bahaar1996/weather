import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const search = req.nextUrl.searchParams.get("search");
    if (!search) {
      return NextResponse.json([]);
    }
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${process.env.WEATHER_API_KEY}&q=${search}`,
      { signal: req.signal },
    );
    const data = await response.json();
    const cities = data.map(
      (item: { id: number; name: string; country: string }) => ({
        id: item.id,
        name: item.name,
      }),
    );
    return NextResponse.json(cities);
  } catch (error) {
    console.error(error);
    return NextResponse.json([], {
      status: 500,
    });
  }
}
