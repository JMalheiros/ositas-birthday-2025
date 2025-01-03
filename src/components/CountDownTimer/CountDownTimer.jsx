import React, { useState, useEffect, useMemo } from "react";
import "./CountDownTimer.css";
import image from "../../assets/img/title.png";
import image2 from "../../assets/img/title2.png";

const CountdownTimer = () => {
  const today = useMemo(() => new Date(), []);
  today.setHours(0, 0, 0, 0);
  var spDate = today;

  const eventDate = useMemo(() => new Date(2025, 0, 7), []);
  const spEventDate = useMemo(() =>
    (today < new Date("December 31, 2024")) ?
      spDate :
      spDate.setDate(spDate.getDate() + 1), [today, spDate]);
  const defaultRemainingTime = eventDate.getTime() - new Date().getTime();

  const [birthdayTimeRemaining, setBirthdayTimeRemaining] = useState(defaultRemainingTime);
  const [startingPointTimeRemaining, setStartingPointTimeRemaining] = useState(defaultRemainingTime);
  const [timerSelected, setTimerSelected] = useState("birthday");
  const selectedDate = timerSelected === "birthday" ? eventDate : spEventDate;

  useEffect(() => {
      const countdownInterval = setInterval(() => {
        const currentTime = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        const spEventTime = new Date(spEventDate).getTime();
        let birthdayRemainingTime = eventTime - currentTime;
        let startingPointRemainingTime = spEventTime - currentTime;

        if (birthdayRemainingTime <= 0) {
          birthdayRemainingTime = 0;
          clearInterval(countdownInterval);
        }

        setBirthdayTimeRemaining(birthdayRemainingTime);
        setStartingPointTimeRemaining(startingPointRemainingTime);
      }, 1000);

      return () => clearInterval(countdownInterval);
  }, [eventDate, spEventDate, birthdayTimeRemaining]);

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

  const timerSelectButton = () => {
    const toogleValue = timerSelected === "birthday" ? "startingPoint" : "birthday";
    return (
      <div>
        <button
          className="timer-button"
          onClick={() => setTimerSelected(toogleValue)}
        >
          <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="layer</g>1">
              <path d="M 4 2.5 L 3 3.5 L 3 8 L 7.5 8 L 8.5 7 L 4.6601562 7 L 5.4628906 6.0722656 L 5.7695312 5.7441406 L 6.0996094 5.4414062 L 6.4492188 5.1621094 L 6.8203125 4.9101562 L 7.2089844 4.6875 L 7.6152344 4.4941406 L 8.0332031 4.3300781 L 8.4609375 4.2011719 L 8.8984375 4.1015625 L 9.3417969 4.0351562 L 9.7890625 4.0039062 L 10.238281 4.0058594 L 10.685547 4.0390625 L 11.128906 4.1054688 L 11.564453 4.2070312 L 11.994141 4.3398438 L 12.410156 4.5058594 L 12.814453 4.7011719 L 13.201172 4.9257812 L 13.572266 5.1777344 L 13.921875 5.4589844 L 14.25 5.7636719 L 14.554688 6.09375 L 14.833984 6.4453125 L 15.083984 6.8164062 L 15.310547 7.2050781 L 15.501953 7.609375 L 15.666016 8.0273438 L 15.796875 8.4550781 L 15.896484 8.8925781 L 15.962891 9.3359375 L 15.994141 9.7851562 L 15.994141 10 L 17 10 L 17 9.9902344 L 16.982422 9.5058594 L 16.931641 9.0214844 L 16.847656 8.5449219 L 16.728516 8.0742188 L 16.580078 7.6113281 L 16.398438 7.1621094 L 16.185547 6.7265625 L 15.945312 6.3046875 L 15.675781 5.9023438 L 15.376953 5.5175781 L 15.054688 5.15625 L 14.707031 4.8183594 L 14.335938 4.5058594 L 13.945312 4.2167969 L 13.535156 3.9570312 L 13.109375 3.7285156 L 12.666016 3.5273438 L 12.210938 3.3574219 L 11.746094 3.2207031 L 11.271484 3.1152344 L 10.792969 3.0449219 L 10.306641 3.0058594 L 9.8222656 3 L 9.3378906 3.0292969 L 8.8574219 3.0917969 L 8.3808594 3.1894531 L 7.9140625 3.3183594 L 7.4550781 3.4785156 L 7.0097656 3.6699219 L 6.578125 3.8925781 L 6.1640625 4.1445312 L 5.7675781 4.4238281 L 5.390625 4.7304688 L 5.0371094 5.0605469 L 4.7070312 5.4179688 L 4 6.234375 L 4 2.5 z M 3 10 L 3 10.007812 L 3.0175781 10.492188 L 3.0683594 10.976562 L 3.1523438 11.453125 L 3.2714844 11.923828 L 3.4199219 12.386719 L 3.6015625 12.835938 L 3.8144531 13.271484 L 4.0546875 13.693359 L 4.3242188 14.095703 L 4.6230469 14.480469 L 4.9453125 14.841797 L 5.2929688 15.179688 L 5.6640625 15.492188 L 6.0546875 15.78125 L 6.4648438 16.041016 L 6.890625 16.269531 L 7.3339844 16.470703 L 7.7890625 16.640625 L 8.2539062 16.777344 L 8.7285156 16.882812 L 9.2070312 16.953125 L 9.6933594 16.992188 L 10.177734 16.998047 L 10.662109 16.96875 L 11.142578 16.90625 L 11.619141 16.808594 L 12.085938 16.679688 L 12.544922 16.519531 L 12.990234 16.328125 L 13.421875 16.105469 L 13.835938 15.853516 L 14.232422 15.574219 L 14.609375 15.267578 L 14.962891 14.9375 L 15.292969 14.580078 L 16 13.763672 L 16 17.498047 L 17 16.498047 L 17 11.998047 L 12.5 11.998047 L 11.5 12.998047 L 15.339844 12.998047 L 14.537109 13.925781 L 14.230469 14.253906 L 13.900391 14.556641 L 13.550781 14.835938 L 13.179688 15.087891 L 12.791016 15.310547 L 12.384766 15.503906 L 11.966797 15.667969 L 11.539062 15.796875 L 11.101562 15.896484 L 10.658203 15.962891 L 10.210938 15.994141 L 9.7617188 15.992188 L 9.3144531 15.958984 L 8.8710938 15.892578 L 8.4355469 15.791016 L 8.0058594 15.658203 L 7.5898438 15.492188 L 7.1855469 15.296875 L 6.7988281 15.072266 L 6.4277344 14.820312 L 6.078125 14.539062 L 5.75 14.234375 L 5.4453125 13.904297 L 5.1660156 13.552734 L 4.9160156 13.181641 L 4.6894531 12.792969 L 4.4980469 12.388672 L 4.3339844 11.970703 L 4.203125 11.542969 L 4.1035156 11.105469 L 4.0371094 10.662109 L 4.0058594 10.212891 L 4.0058594 10 L 3 10 z " 
                    style={{fill: "#e8ffe2", fillOpacity: 1, stroke: "none", strokeWidth:"0px"}}/>
            </g>
          </svg>
        </button>
      </div>
    )
  }

  const calendarButton = () => {
    return (
      <div>
        <button 
          className="timer-button"
          onClick={() => window.location.href = "/calendar"}
        >
          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	             viewBox="0 0 64 64">
            <g>
              <path fill="#e8ffe2" d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,53.553,10.447,54,11,54
                z M12,49h4v3h-4V49z"/>
              <path fill="#e8ffe2" d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,53.553,22.447,54,23,54
                z M24,49h4v3h-4V49z"/>
              <path fill="#e8ffe2" d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,53.553,34.447,54,35,54
                z M36,49h4v3h-4V49z"/>
              <path fill="#e8ffe2" d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,42.553,10.447,43,11,43
                z M12,38h4v3h-4V38z"/>
              <path fill="#e8ffe2" d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,42.553,22.447,43,23,43
                z M24,38h4v3h-4V38z"/>
              <path fill="#e8ffe2" d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,42.553,34.447,43,35,43
                z M36,38h4v3h-4V38z"/>
              <path fill="#e8ffe2" d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,42.553,46.447,43,47,43
                z M48,38h4v3h-4V38z"/>
              <path fill="#e8ffe2" d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,31.553,10.447,32,11,32
                z M12,27h4v3h-4V27z"/>
              <path fill="#e8ffe2" d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,31.553,22.447,32,23,32
                z M24,27h4v3h-4V27z"/>
              <path fill="#e8ffe2" d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,31.553,34.447,32,35,32
                z M36,27h4v3h-4V27z"/>
              <path fill="#e8ffe2" d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,31.553,46.447,32,47,32
                z M48,27h4v3h-4V27z"/>
              <path fill="#e8ffe2" d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4
                C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1
                s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1s-1-0.447-1-1V6V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1
                s-1-0.447-1-1V6V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4
                c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"/>
            </g>
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className={"base-page" + (timerSelected === "birthday" ? "" : "-dark")}>
      <div className="countdown-timer-container">
        <div className="image-container">
          <img src={timerSelected === "birthday" ? image : image2} alt="Title" className="image-style" height="200px" />
        </div>
        <p className="countdown-title">
          Contagem para o {timerSelected === "birthday" ? "aniversário" : "próximo evento"}
        </p>
        <p className={"countdown-date" + (timerSelected === "birthday" ? "" : "-dark")}>
          {formatDate(selectedDate)}
        </p>

        <div className="countdown-viewer-container">
          <>
            {timerSelected === "birthday" && formatTime(birthdayTimeRemaining)}
            {timerSelected === "startingPoint" && formatTime(startingPointTimeRemaining)}
          </>

          <div className="countdown-buttons">
            {timerSelectButton()}
            {calendarButton()}
          </div>
        </div>
      </div>
      <div className="footer">
        Feito por Xuxuzinho
      </div>
    </div>
  );
};

export default CountdownTimer;