import React from "react";
import "./AdventCalendar.css";
import adventImage from "../../assets/img/advent-calendar.png";

const AdventCalendar = () => {
  const calendar = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      days.push(
        <div className="day">
          {calendarDay(i)}
        </div>
      );
    }
    return days;
  }
  const calendarDay = (day) => {
    var clueTime = new Date("December 30, 2024, 14:00:00");
    clueTime.setDate(clueTime.getDate() + day);
    const formattedTime = clueTime.toLocaleString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
    });
    return (
      <div className="calendar-day">
        <h1>Dia {day}</h1>
        <b>Dica no dia: </b>
        <p>
          {formattedTime}
        </p>
      </div>
    )
  }

  return (
    <div className="advent-calendar">
      <div className="image-container">
        <img src={adventImage} alt="Advent-title" className="image-style" height="200px" />
      </div>

      <div className="calendar-container">
        {calendar()}
      </div>

      <a href="/" style={{ textDecoration: "none" }}>
        <div className="footer">
          Voltar para a contagem regressiva
        </div>
      </a>
      <br />
    </div>
  );
}

export default AdventCalendar;