"use client";
import React, { useEffect, useState } from "react";

const useCountDown = () => {
  const [currentTime, setCurrentTime] = useState({
    currentDays: 0,
    currentHours: 0,
    currentMinutes: 0,
    currentSeconds: 0,
  });
  const targetDate = new Date("2024-11-17T15:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setCurrentTime({
      ...currentTime,
      currentDays: days < 10 ? "0" + days : days,
      currentHours: hours < 10 ? "0" + hours : hours,
      currentMinutes: minutes < 10 ? "0" + minutes : minutes,
      currentSeconds: seconds < 10 ? "0" + seconds : seconds,
    });
  }

  useEffect(() => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }, []);

  return currentTime;
};

export default useCountDown;
