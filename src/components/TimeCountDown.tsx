"use client";

import { useEffect, useState } from "react";

interface CountDownLeft {
  days: number;
  hrs: number;
  mins: number;
  secs: number;
}

export default function TimeCountDown() {
  const initTime: CountDownLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };
  const [timeLeft, setTimeLeft] = useState<CountDownLeft>(initTime);

  useEffect(() => {
    setTimeLeft(calcTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calcTimeLeft = (): CountDownLeft => {
    let timeLeft: CountDownLeft = { days: 0, hrs: 0, mins: 0, secs: 0 };
    const now = new Date();
    const endDate = new Date("2024-12-31T00:00:00");
    const diff = endDate.getTime() - now.getTime();

    timeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };

    return timeLeft;
  };

  return (
    <div className=" flex gap-5 px-2">
      {Object.entries(timeLeft).map(([unit, value]) => {
        return (
          <div className="flex justify-center items-center gap-5" key={unit}>
            <div className="flex flex-col gap-1 justify-center items-center">
              <p className="text-sm">{unit}</p>
              <p className="text-xl font-semibold">{value}</p>
            </div>
            {unit !== "secs" && <span className="text-xl">:</span>}
          </div>
        );
      })}
    </div>
  );
}
