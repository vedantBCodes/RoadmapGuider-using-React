import React, { useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      const hr = d.getHours();
      const min = d.getMinutes();
      const sec = d.getSeconds();

      const hr_rotation = 30 * hr + min / 2;
      const min_rotation = 6 * min;
      const sec_rotation = 6 * sec;

      document.getElementById("hour").style.transform = `rotate(${hr_rotation}deg)`;
      document.getElementById("minute").style.transform = `rotate(${min_rotation}deg)`;
      document.getElementById("second").style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock-wrapper">
      <div id="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
      </div>
    </div>
  );
};

export default Clock;
