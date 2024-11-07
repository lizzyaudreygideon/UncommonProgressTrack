import { useState, useEffect } from 'react';

export default function useCountUp(endValue, duration = 2000, isCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isCounting) return; // Only start if component is in view

    let start = 0;
    const increment = endValue / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.round(start));
    }, 50);
    return () => clearInterval(counter);
  }, [endValue, duration, isCounting]);

  return count;
}
