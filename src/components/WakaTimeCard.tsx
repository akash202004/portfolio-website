"use client";
import { useEffect, useState } from "react";

interface WakaTimeData {
  total_seconds: number;
  text: string;
  daily_average: number;
}

const WakaTimeCard = () => {
  const [wakaData, setWakaData] = useState<WakaTimeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const response = await fetch("/api/wakatime"); // fetch from our backend
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();

        setWakaData({
          total_seconds: json.data.total_seconds || 0,
          text: json.data.text || "0 hrs 0 mins",
          daily_average: json.data.daily_average || 0,
        });
      } catch (err) {
        console.error("Error fetching WakaTime data:", err);
        setWakaData({
          total_seconds: 0,
          text: "0 hrs 0 mins",
          daily_average: 0,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWakaTimeData();
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  if (loading) {
    return (
      <div className="h-full flex flex-col justify-center">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg md:text-xl font-deb text-white">
            Coding Time
          </h3>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-8 bg-[#2a2a2a] rounded animate-pulse"></div>
          <div className="h-4 bg-[#2a2a2a] rounded animate-pulse w-3/4"></div>
        </div>
      </div>
    );
  }

  if (!wakaData) {
    return (
      <div className="h-full flex flex-col justify-center">
        <h3 className="text-lg md:text-xl font-deb text-white mb-3">
          Coding Time
        </h3>
        <p className="text-gray-400 text-sm">Unable to load data</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg md:text-xl font-deb text-white">Coding Time</h3>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="mb-4">
        <div className="text-2xl md:text-3xl font-deb text-white mb-1">
          {wakaData.text.split(" hrs")[0]}
          <span className="text-lg text-gray-400">hrs</span>
        </div>
        <p className="text-xs text-gray-500 font-med">All time</p>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400 font-med">
          Daily avg:
          <span className="text-white ml-1 font-sb">
            {formatTime(wakaData.daily_average)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default WakaTimeCard;
