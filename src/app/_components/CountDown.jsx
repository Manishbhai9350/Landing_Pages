'use client'
import { useEffect, useState } from 'react';

const CountDown = ({ targetDate = '' }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    setHasMounted(true);

    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer(); // initial call
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null; // ✅ Prevent hydration mismatch

  return (
    <div className="w-full h-full flex justify-evenly">
      <div className="days h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl leading-none">{String(timeLeft.days).padStart(2, '0')}</h1>
        <h3 className="opacity-80 text-sm">Days</h3>
      </div>
      <div className="hours h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl leading-none">{String(timeLeft.hours).padStart(2, '0')}</h1>
        <h3 className="opacity-80 text-sm">Hours</h3>
      </div>
      <div className="minutes h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl leading-none">{String(timeLeft.minutes).padStart(2, '0')}</h1>
        <h3 className="opacity-80 text-sm">Minutes</h3>
      </div>
      <div className="seconds h-full flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl leading-none">{String(timeLeft.seconds).padStart(2, '0')}</h1>
        <h3 className="opacity-80 text-sm">Seconds</h3>
      </div>
    </div>
  );
};

export default CountDown;
