import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      "https://wakatime.com/api/v1/users/current/all_time_since_today",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
      }
    );

    if (!response.ok) {
      console.log("WakaTime API failed, returning fallback data");
      return NextResponse.json({
        data: {
          total_seconds: 892800, 
          text: "248 hrs 0 mins",
          daily_average: 25200, 
        },
      });
    }

    const apiData = await response.json();

    const transformedData = {
      data: {
        total_seconds: apiData.data.total_seconds || 0,
        text: apiData.data.text || "0 hrs 0 mins",
        daily_average: Math.floor((apiData.data.total_seconds || 0) / 365), 
      },
    };

    return NextResponse.json(transformedData);
  } catch (err) {
    console.error("Error fetching Wakatime data:", err);

    return NextResponse.json({
      data: {
        total_seconds: 892800, 
        text: "248 hrs 0 mins",
        daily_average: 25200,
      },
    });
  }
}
