"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [date_now, setDate] = useState(new Date());

  const date_future = new Date("2024-10-31");
  date_future.setHours(0, 0, 0);

  let delta = Math.abs(date_future.getTime() - date_now.getTime()) / 1000;

  const days = Math.floor(delta / 86400);
  delta -= days * 86400;

  const hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  const minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  const seconds = Math.floor(delta % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="prose container mx-auto pt-4">
      <h1>🎃 Halloween 🎃</h1>

      <section>
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span
                suppressHydrationWarning
                style={{ "--value": days } as React.CSSProperties}
              ></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span
                suppressHydrationWarning
                style={{ "--value": hours } as React.CSSProperties}
              ></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span
                suppressHydrationWarning
                style={{ "--value": minutes } as React.CSSProperties}
              ></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span
                suppressHydrationWarning
                style={{ "--value": seconds } as React.CSSProperties}
              ></span>
            </span>
            sec
          </div>
        </div>
      </section>
    </main>
  );
}
