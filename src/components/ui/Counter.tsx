"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value:    number;
  suffix?:  string;
  prefix?:  string;
  duration?: number;
}

export default function Counter({ value, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref              = useRef<HTMLSpanElement>(null);
  const isInView         = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const steps    = 60;
    const stepTime = duration / steps;
    let current    = 0;
    const timer    = setInterval(() => {
      current += value / steps;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}{count >= 1000 ? count.toLocaleString("fr-FR") : count}{suffix}
    </span>
  );
}