"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // only count if 30% is visible
  });

  const [years, setYears] = useState(0);
  const [sessions, setSessions] = useState(0);

  const hasAnimatedRef = useRef(false);
  const yearIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const sessionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (inView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      const timeout = setTimeout(() => {
        let yearCount = 0;
        let sessionCount = 0;

        yearIntervalRef.current = setInterval(() => {
          if (yearCount < 8) {
            yearCount++;
            setYears(yearCount);
          } else {
            clearInterval(yearIntervalRef.current!);
          }
        }, 100);

        sessionIntervalRef.current = setInterval(() => {
          if (sessionCount < 500) {
            sessionCount += 10;
            setSessions(sessionCount);
          } else {
            clearInterval(sessionIntervalRef.current!);
          }
        }, 10);
      }, 500); // 1/2s delay

      return () => clearTimeout(timeout);
    }

    if (!inView && hasAnimatedRef.current) {
      // Reset animation state and values
      hasAnimatedRef.current = false;
      if (yearIntervalRef.current) clearInterval(yearIntervalRef.current);
      if (sessionIntervalRef.current) clearInterval(sessionIntervalRef.current);
      setYears(0);
      setSessions(0);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full h-100 text-white py-10 px-6 text-center flex flex-col lg:flex-row items-center justify-around gap-8"
      style={{ backgroundColor: "rgba(30, 65, 69, 0.9)" }}
    >
      <div className="m-2">
        <h1 className="text-5xl font-extrabold mb-2">{years}+</h1>
        <p className="text-lg font-semibold">Years Experience</p>
        <p>
          Providing compassionate and effective Individual and Couples Therapy
        </p>
      </div>

      <div className="m-2">
        <h1 className="text-5xl font-extrabold mb-2">{sessions}+</h1>
        <p className="text-lg font-semibold">Individual Client Sessions</p>
        <p>
          Helping individuals and couples heal, grow and find purpose
        </p>
      </div>
    </div>
  );
};

export default StatsSection;
