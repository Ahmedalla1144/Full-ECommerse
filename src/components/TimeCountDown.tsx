"use client";

import { useEffect, useState } from "react";
import { calcTimeLeft } from "./lib";
import { CountDownLeft } from "../../type";

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
