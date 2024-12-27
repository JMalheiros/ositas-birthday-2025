import React, { useState, useEffect, useMemo } from "react";
import "./CountDownTimer.css";
import image from "../img/title.png";

const CountdownTimer = () => {
  const eventDate = useMemo(() => new Date(2025, 0, 7), []);
  const defaultRemainingTime = eventDate.getTime() - new Date().getTime();
  const [timeRemaining, setTimeRemaining] = useState(defaultRemainingTime);

  useEffect(() => {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        let remainingTime = eventTime - currentTime;

        if (remainingTime <= 0) {
          remainingTime = 0;
          clearInterval(countdownInterval);
        }

        setTimeRemaining(remainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
  }, [eventDate, timeRemaining]);

  const formatDate = (date) => {
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Date(date).toLocaleDateString("pt-BR", options);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
      <div className="countdown-display">
        <div className="countdown-value">
          <p>
            {days.toString().padStart(2, "0")}
          </p>
          <span>dias</span>
        </div>
        <div className="countdown-value">
          <p>
            {hours.toString().padStart(2, "0")}
          </p>
          <span> horas</span>
        </div>
        <div className="countdown-value">
          <p>
            {minutes.toString().padStart(2, "0")}
          </p>
          <span>minutos</span>
        </div>
        <div className="countdown-value">
          <p>
            {seconds.toString().padStart(2, "0")}
          </p>
          <span>segundos</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="countdown-timer-container">
        <div className="countdown-image-container">
          <img src={image} alt="Title" className="countdown-image" height="200px" />
        </div>
        <p className="countdown-date">
          {formatDate(eventDate)}
        </p>

        <>
          {formatTime(timeRemaining)}
        </>
      </div>
      <div className="footer">
        Feito por Xuxuzinho
      </div>
    </>
  );
};

export default CountdownTimer;